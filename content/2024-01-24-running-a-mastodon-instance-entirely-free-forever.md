+++
title = "Running a Mastodon instance entirely free forever"
date = 2024-01-24
draft = true

[taxonomies]
tags = ["social", "hosting", "domains", "mastodon", "fediverse"]
+++

My single-user Mastodon instance has been ticking away at [phocks.eu.org](https://phocks.eu.org) for a while now, over a year at least. I've paid zero dollars all up to keep it running. Here's how.

But first ... why? For the fun of mucking around with servers and software. And for the freedom to post whatever you want on your own platform and no one (except maybe peer pressure or law of the land) can force you to take it down.

Basically, you need 2 things.

1. A domain.
2. A server.

Getting an actual <abbr title="Top-level domain">TLD</abbr> for free is more art than science these days, especially since [Freenom](https://www.freenom.com) shut down new registrations. Here's some places to try.

1. [nic.eu.org](https://nic.eu.org) - They make you [jump through a few hoops](https://forum.infinityfree.com/t/how-to-get-a-free-eu-org-domain/88508), plus it can take up to a month or two (or forever) to get approved.
2. [nic.ua](https://nic.ua/en/domains/.pp.ua) - 1 year registrations only, but you can renew manually for free each year.

(If you know of any other places to get free TLDs, please let me know.)

You can, of course, use a subdomain too, which are easier to get for free. Try here.

1. [afraid.org](https://freedns.afraid.org)
2. [GitHub free-subdomain topic](https://github.com/topics/free-subdomain)
3. [noip.com](https://www.noip.com)
4. [duckdns.org](https://www.duckdns.org)

Or else if you already have a domain, you can create a subdomain like `mastodon.yourdomain.com` or `fedi.yourdomain.com` or whatever you like and point it to your server.

But first you need a server.

You could use any old computer that you have lying around the house, or you could sign up for the [free tier on the Oracle Cloud](https://www.oracle.com/cloud/free/). This is what I'm using currently.
