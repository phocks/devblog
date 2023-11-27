+++
title = "Switching filesystems in Arch Linux"
date = 2023-11-27
draft = true

[taxonomies]
tags = ["linux", "filesystems", "f2fs", "btrfs", "ssd", "storage"]
+++

So you wanna jump from one moving train to another for fun?

You could just do a fresh install. But there's an easier way. No more mucking around getting everything set up the way you had it before and reinstalling all your old programs.

After many failed attempts, this is what worked for me. Recording it here for future reference and in case it's useful for anyone else.

The main issue is making sure you don't overwrite the new `/etc/fstab` with your old one.

Here's what you do.

Make a full system backup with something like [Rescuezilla](https://rescuezilla.com/) for ~~if~~ when you screw up your system and need to restore it.

Make a file-level backup on an external drive. I used [Timeshift](https://github.com/linuxmint/timeshift) with the RSYNC option.

[Reinstall Arch](/one-does-indeed-simply-install-arch-linux), and choose the filesystem you want to switch to.

Boot into the new system and install Timeshift again.

Make a backup copy of your new `fstab` first.

```
sudo cp /etc/fstab /etc/fstab.bak
```

Then do a restore from within Timeshift.




<!-- 

NOTES: DRAFTS

My Arch setup was stable. I needed something to break. So I decided to switch filesystems.

I'd tried before. But after restoring my files I couldn't get the system to boot.

When I installed I chose f2fs. It works well and it's fast and it apparently doesn't wear down my solid state drive as fast. 

-->