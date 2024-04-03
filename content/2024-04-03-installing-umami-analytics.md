+++
title = "Installing Umami analytics"
date = 2024-04-03
draft = false

[taxonomies]
tags = ["Analytics", "Umami", "Tech", "Tracking"]
+++

Real quick post. [Umami](https://umami.is) I saw the other day on [Evan Boehs](https://boehs.org)' blog. Wanted to try it out myself. So I did. It's tracking analytics right now on this page.

I went the [self-hosted](https://umami.is/docs) route. Real easy install. Already had a PostgreSQL container on my [Proxmox](https://www.proxmox.com/en/) box, so I just had to spin up a new container, install Node.js, and go through the [installation instructions](https://umami.is/docs/install).

I pointed my [Caddy server](https://caddyserver.com) to the new container and bam, analytics. You can even make a public link. [Check it](https://umami.phocks.org/share/LE5nfO82Ck9n1cIM/josh.is-cool.dev). You should see yourself there.

Anyways. Bye for now! Peace.
