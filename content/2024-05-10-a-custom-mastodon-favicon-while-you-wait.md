+++
title = "A custom Mastodon favicon while you wait"
date = 2024-05-10
draft = false

[taxonomies]
tags = ["Social", "Mastodon", "Config"]
+++

Admin-uploadable custom favicons [are officially coming](https://github.com/mastodon/mastodon/issues/7396)!

But until then, if you are running your own Mastodon instance, you can still do it. This is the easiest way that I've found to do it.

I'll lay it out here, so it's handy for future me, or someone else.

In `/etc/nginx/sites-enabled/mastodon` add something like this:

```conf
location ^~ "/packs/media/icons/" {
  return 301 https://yourdomain.org/favicon.ico;
}
```

Change `yourdomain.org` to whatever domain your Mastodon instance is running on.

Then just replace the `favicon.ico` file in your `/home/mastodon/live/public/` directory with the favicon you want.

Restart the Mastodon services with:

```bash
# systemctl restart mastodon-*
# or a shell script:

#!/usr/bin/env bash
systemctl restart mastodon-sidekiq
systemctl reload mastodon-web
systemctl restart mastodon-streaming
```

Then hard-reload your browser. Requests for any favicons (Mastodon uses a few different ones) should now be redirected to your custom one.

This is good enough for me anyway, for now. Looking forward to having this all handled in the admin page soon anyway.

Bye for now!
