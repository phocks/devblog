+++
title = "WiFi and Bluetooth can coexist peacefully on 2.4 Ghz"
date = 2023-11-21
draft = false

[taxonomies]
tags = ["WiFi", "Bluetooth", "Arch", "Linux", "Instructions"]
+++

I wonder who decided it might be a good idea to put Bluetooth and WiFi on the same 2.4 gigahertz spectrum?

It was relatively easy to enable Bluetooth and connect my wireless headphones in Arch Linux. I noticed however that afterwards my internet connection would inexplicably slow to a crawl whenever I connected. Disconnect, and it would be fine again. Connect, and again, virtually nothing — especially if sound was playing through the headset.

The easy solution was to connect my WiFi on the 5 Ghz band. Done. It worked. No interference. And that could have been that. But it was still bugging me. I still wanted to know why. I still wanted to fix it.

(2.4 Ghz gets better range than 5 Ghz because it's a lower frequency so sometimes it actually gives me a more stable connection from further away.)

I found a few possible solutions. I tried changing the WiFi channel on my router, and that helped a little bit, but not quite enough.

In the Arch Wiki they have a small section about [Intel combined WiFi and Bluetooth cards](https://wiki.archlinux.org/title/Bluetooth#Intel_combined_WiFi_and_Bluetooth_cards) and playing with the coexistence setting and I thought I was onto something. 

They suggested adding the following to `/etc/modprobe.d/iwlwifi.conf`:

```
options iwlwifi bt_coex_active=0
```

But nope. Nothing. No difference.

After some searching, [a post in the Arch Forums](https://bbs.archlinux.org/viewtopic.php?pid=1991801#p1991801) put me on the right track.

In the end, adding this to `/etc/modprobe.d/iwlwifi.conf` fixed it for me:

```
options iwlmvm power_scheme=1
```

Reboot and you're all good.

Seems to be the same fix [as described here](https://wiki.archlinux.org/title/Network_configuration/Wireless#Cause_#6), but for a different symptom.

Anyway, hope this helps someone else. Happy hacking!

---

**ps.**

- [Jim Mussared](https://mastodon.social/@jimmo/111451012551649253) put me on to this page about [iwlwifi and platform noise](https://wireless.wiki.kernel.org/en/users/drivers/iwlwifi#about_platform_noise) which gives a bit more information about why this works.
