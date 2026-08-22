---
pubDate: 2023-11-19
author: Joshua Byrd
title: One does indeed simply install Arch Linux
slug: "one-does-indeed-simply-install-arch-linux"
description: "A guide to installing Arch Linux without losing your marbles."
image:
  url: "/src/images/blog/one-does-indeed-simply-install-arch-linux.jpg"
  alt: "An arch with a person walking towards some stairs."
  source: "https://unsplash.com/photos/a-person-walking-up-a-flight-of-stairs-IImZQk78xe0"
tags: ["Linux"]
---

A poll I ran on Mastodon recently forced me, against my will, to attempt an install of Arch Linux again.

*...Multiple hours of frustration later...*

Here's how to install Arch the easy way.

1. Download and make a bootable USB of the [Arch Linux ISO](https://archlinux.org/download/).
2. DON'T FOLLOW THE INSTALL GUIDE.
3. Boot into the USB and run `iwctl` and follow [these instructions](https://wiki.archlinux.org/title/Iwd#iwctl) to connect — basically `device list`, `station <device> scan`, `station <device> get-networks`, `station <device> connect <SSID>` — you can tab-complete devices and SSIDs.
4. (OR simply plug in an ethernet cable.)
5. Run `archinstall` and follow the prompts.
6. Hit "Install" then run `reboot` when it's done.

That's it. You're done. You have a working Arch Linux install.

Of course, it won't actually do much just yet, but it's a start. Here's a good place to continue your journey: [https://wiki.archlinux.org](https://wiki.archlinux.org).

Good luck out there!
