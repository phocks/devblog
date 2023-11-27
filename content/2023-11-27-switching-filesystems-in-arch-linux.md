+++
title = "Switching filesystems in Arch Linux"
date = 2023-11-27
draft = false

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

Make sure the new system boots.

Then we're going to boot into [System Rescue CD](https://www.system-rescue.org/) and mount the new system drive and the old Timeshift backup.

```bash
cd /mnt
mkdir new old
mount -t btrfs /dev/nvme0n1p2 new/
mount -t f2fs /dev/sda1 old/
```

Replace filesystems and drive names with your own.

Make a backup of the new `fstab` file.

```bash
cp new/etc/fstab new/etc/fstab.bak
```

Now we're going to copy the old Timeshift backup to the new system.

I did this one directory at a time, just to be sure, starting with `/home`, then rebooting, then repeating the process with `/usr`, `/var`, and `/root` and the others and finally `/etc`.

For example:

```bash
rsync -av old/timeshift/2021-11-27-000000/localhost/home/ /new/@home/
```

Replace the directory names with your own.

I think I needed to use the `--ignore-times` option for the `/etc` directory. I believe this forces files to be overwritten. There was a little guesswork involved in this process and I want to go back over it sometime.

In the end, you want to restore the `fstab` backup file.

```bash
cp new/etc/fstab.bak new/etc/fstab
```

Then reboot. Hopefully you have a working system.

If not, restore from your Rescuezilla backup and try, try again.

Good luck!

*(and please [contact me](/about) with your experiences)*




<!-- Boot into the new system and install Timeshift again.

Make a copy of your new `fstab` first.

```
sudo cp /etc/fstab /etc/fstab.bak
```

Then do a restore from within Timeshift and reboot.

It won't work first time. You'll need to restore the new `fstab` from the copy you made earlier.

```
sudo cp /etc/fstab.bak /etc/fstab
```

Then reboot again.

You're done. -->


<!-- 

NOTES: DRAFTS

My Arch setup was stable. I needed something to break. So I decided to switch filesystems.

I'd tried before. But after restoring my files I couldn't get the system to boot.

When I installed I chose f2fs. It works well and it's fast and it apparently doesn't wear down my solid state drive as fast. 

-->