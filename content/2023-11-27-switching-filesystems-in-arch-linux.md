+++
title = "Switching filesystems in Arch Linux"
date = 2023-11-27
draft = false

[taxonomies]
tags = ["linux", "filesystems", "f2fs", "btrfs", "ssd", "storage"]
+++

So you wanna jump from one moving train to another for fun?

You could just do a fresh install. Or you could try this. Basically we're going to reinstall your base system, then restore all your old files over the top. This means you can avoid reinstalling all your old programs and settings etc.

After many failed attempts, this is what worked for me. Recording it here for future reference and in case it's useful for anyone else. (In my case I was going from f2fs to btrfs btw.)

The main issue is making sure you don't overwrite the new `/etc/fstab` with your old one, otherwise you'll end up with a system that won't boot because it will be looking for your old filesystems.

Here's what you do.

Make a full system backup with something like [Rescuezilla](https://rescuezilla.com/) for ~~if~~ when you screw up your system and need to restore it.

Make a backup on an external drive of all your files. I used [Timeshift](https://github.com/linuxmint/timeshift) with the RSYNC option.

[Reinstall Arch](/one-does-indeed-simply-install-arch-linux) on your main drive, and choose the filesystem you want to switch to.

Make sure the new system boots.

Then we're going to boot into the [System Rescue CD](https://www.system-rescue.org/) and mount the new system drive and the old Timeshift backup.

```bash
cd /mnt
mkdir new old
mount -t btrfs /dev/nvme0n1p2 new/
mount -t f2fs /dev/sda1 old/
```

(Replace filesystems and drive names with your own.)

Make a backup of the new `fstab` file.

```bash
cp new/@/etc/fstab new/@/etc/fstab.bak
```

Now we're going to copy the old Timeshift backup files to the new system.

I did this one directory at a time, just to be sure, starting with `/home`, then rebooting, then repeating the process with `/usr`, `/var`, and `/root` and the others and finally `/etc`.

For example:

```bash
rsync -av old/timeshift/2021-11-27-000000/localhost/home/ /new/@home/
rsync -av old/timeshift/2021-11-27-000000/localhost/usr/ /new/@/usr/
```

Replace the directory names with your own. (btrfs is a bit strange as it uses @ to denote subvolumes.)

If I remember correctly, I think I had to use the `--ignore-times` option for the `/etc` directory. This forces files to be overwritten, even if they're older. There was a little guesswork involved in this process and I want to go back over it sometime.

In the end, you'll want to restore the `fstab` backup file.

```bash
cp new/@/etc/fstab.bak new/@/etc/fstab
```

Then reboot. And hopefully you now have a working system.

If not, restore from your Rescuezilla backup and try, try again.

Good luck!

---

UPDATE-2023-12-27

I tried the process again and didn't seem to need `--ignore-times` this time. Also because Arch maps the `@log/` subvolume to `/var/log` I removed the contents of `@/var/log/` after I rsynced it over.
