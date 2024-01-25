+++
title = "Running a Mastodon instance entirely free forever"
date = 2024-01-25
draft = false

[taxonomies]
tags = ["social", "hosting", "domains", "mastodon", "fediverse"]
+++

My single-user Mastodon instance has been ticking away at [phocks.eu.org](https://phocks.eu.org/about) for a while now, over a year at least. All up, I've paid zero dollars to keep it running. I've had a few people ask me to write up something about it, so here it is. If you're comfortable logging into Linux via <abbr title="Secure Shell">SSH</abbr> and running commands you should be fine. Enjoy!

Firstly though, why would anyone even want to run their own Mastodon instance? Well, for the fun of mucking around with servers and software, perhaps? Maybe for the freedom to post whatever you want on your own platform and no dumb billionaire can suspend you or force you to take it down? Who knows? Anyway...

To run a Mastodon instance you need 2 things.

1. A domain, or subdomain.
2. A server, 2<abbr title="gigabytes">GB</abbr> <abbr title="Random Access Memory">RAM</abbr> minimum. 50GB disk space minimum.

Getting an actual <abbr title="Top-level domain">TLD</abbr> for free is more art than science these days, especially since [Freenom](https://www.freenom.com) shut down new registrations. Here are some other places to try.

1. [nic.eu.org](https://nic.eu.org) - They make you [jump through a few hoops](https://forum.infinityfree.com/t/how-to-get-a-free-eu-org-domain/88508), plus it can take up to a month or two (or forever) to get approved.
2. [nic.ua](https://nic.ua/en/domains/.pp.ua) - 1-year registrations only, but you can renew manually for free each year.

_(If you know of any other places to get free TLDs, please [let me know](/about).)_

You can use a subdomain too. Subdomains are easier to get for free. Try some of these places or [do a search](https://duckduckgo.com/?q=register+a+free+subdomain+with+dns&t=ffab&ia=web) online.

1. [afraid.org](https://freedns.afraid.org)
2. [GitHub free-subdomain topic](https://github.com/topics/free-subdomain)
3. [noip.com](https://www.noip.com)
4. [duckdns.org](https://www.duckdns.org)

Or else if you already have a domain, you can create a subdomain like `mastodon.yourdomain.com` or `fedi.yourdomain.com` or whatever you like.

Now you need a server to point your domain to.

You could use any old computer that you have lying around the house, or you could sign up for the [free tier on the Oracle Cloud](https://www.oracle.com/cloud/free/). This is what I'm using currently.

Google Cloud also offers [a free server](https://cloud.google.com/free/docs/free-cloud-features#compute), but they only give you 30GB storage and Mastodon will chew through this pretty quick. But you could try [GoToSocial](https://gotosocial.org/) instead, which is more lightweight.

_(If anyone knows any other free forever tier <abbr title="Virtual Private Server">VPS</abbr>s please [let me know](/about) too.)_

I wrote up a [little guide](https://phocks.github.io/how-to-get-2x-oracle-cloud-servers-free-forever.html) a while ago about how to get 2x Oracle Cloud servers free forever. These are x86 servers with 1GB RAM each. 1GB is a bit small for a Mastodon instance, but I can confirm that it does run if you [enable some swap space](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04). You could even try splitting the database and the web server between the two separate servers, if you're feeling adventurous.

But Oracle has now added <abbr title="Advanced RISC Machines">ARM</abbr> servers to their free tier. These are the [Ampere A1 Compute](https://www.oracle.com/cloud/compute/arm/) servers. You can create from 1 up to 4 servers with 24GB of RAM spread between them, which is more than enough for a Mastodon instance. And they're free forever too. I am running mine on a 2-thread ARM CPU with 12GB RAM and 50GB block storage.

Oracle gives you up to 200GB of block storage, which you can spread across all your servers. I have had some issues with running low on disk space and having to set up scripts to compress media etc (see below), so I'd probably recommend using 100GB for your Mastodon instance as a minimum. Unfortunately, Mastodon uses a lot of space for storing accounts and media etc. You can hook up [object storage](https://docs.joinmastodon.org/admin/optional/object-storage/) later if you want, but it's not necessary for starters.

OK, so now you have your domain and you have it pointed to the <abbr title="Internet Protocol">IP</abbr> address of your server (or your home IP address with ports 80 and 443 forwarded to your internal address). Now you need to install Mastodon. Simply follow the instructions over at the [official guide](https://docs.joinmastodon.org/admin/prerequisites/) to get started. There are quite a few steps involved, but it's not too hard if you take it one step at a time.

If everything went well, you should now have a working Mastodon instance. Log in and create start posting!

---

ps.

Here are some scripts that I run [on cron](https://askubuntu.com/questions/2368/how-do-i-set-up-a-cron-jobhttps://askubuntu.com/questions/2368/how-do-i-set-up-a-cron-job) every few hours, mostly to help keep disk usage down.

This first one runs `tootctl` to prune old accounts and media etc. This may not be necessary these days as I believe Mastodon has some built-in pruning now. But I've been running this for a while and it seems to work.

```bash
#!/usr/bin/env bash

export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
export RAILS_ENV=production

# Added from https://ricard.dev/improving-mastodons-disk-usage/
/home/mastodon/live/bin/tootctl accounts prune
#/home/mastodon/live/bin/tootctl media remove --remove-headers --include-follows --days 1
/home/mastodon/live/bin/tootctl media remove --prune-profiles --days 1
/home/mastodon/live/bin/tootctl cache clear
/home/mastodon/live/bin/tootctl statuses remove --days=1
/home/mastodon/live/bin/tootctl media remove --days=1
/home/mastodon/live/bin/tootctl preview_cards remove --days=1
/home/mastodon/live/bin/tootctl media remove-orphans
/home/mastodon/live/bin/tootctl media usage
date
```

This compresses images in the cache. You'll need to install [jpegoptim](https://lindevs.com/install-jpegoptim-on-ubuntu/) and [pngquant](https://pngquant.org) for this to work.

```bash
#!/usr/bin/env bash
cd /home/mastodon/live/public/system/cache
find -name '*.jpg' -print0 | xargs -0 jpegoptim --preserve --threshold=1 --max=45
find -name '*.jpeg' -print0 | xargs -0 jpegoptim --preserve --threshold=1 --max=45

cd /home/mastodon/live/public/system/cache/accounts
find -name '*.png' -print0 | xargs -0 pngquant --ext=.png --force --speed 10 --quality 45-50 --skip-if-larger

cd /home/mastodon/live/public/system/cache/media_attachments
find -name '*.png' -print0 | xargs -0 pngquant --ext=.png --force --speed 10 --quality 45-50 --skip-if-larger

cd /home/mastodon/live/public/system/cache/preview_cards
find -name '*.png' -print0 | xargs -0 pngquant --ext=.png --force --speed 10 --quality 45-50 --skip-if-larger

# Can't really use gif compression as you can't ignore on bigger file size etc
#find -name '*.gif' -print0 | xargs -0 gifsicle -O3 --colors=64 --use-col=web --lossy=100 --batch
```

Aaaaaaaand... there you have it. Contact me on Mastodon at [@josh@phocks.eu.org](https://phocks.eu.org/@josh) if you have any questions or need any help, or if you just wanna say hi 👋
