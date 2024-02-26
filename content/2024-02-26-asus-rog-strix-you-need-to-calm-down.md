+++
title = "ASUS ROG Strix x570-i Gaming motherboard chipset fan you need to calm down"
date = 2024-02-26
draft = false

[taxonomies]
tags = ["Hardware", "Motherboard", "ASUS", "Tech"]
+++

_TL;DR If you have an ASUS ROG Strix x570-i Gaming motherboard (or similar) and are having issues with a constant high-pitched fan noise, try [the instructions here](https://www.reddit.com/r/FormD/comments/ktt4wr/dropping_your_strix_x570i_board_chipset_temp/) to enable ASPM and then [these instructions](https://www.reddit.com/r/Amd/comments/nu59wl/modifying_pch_fan_curve_on_nonmodded_asus_x570/) to alter the fan curve._

A very niche post, but here it is.

I recently flashed the latest BIOS on my motherboard. It all went fine, but then, that sound was back again. I'd completely wiped it from my memory, the huge saga that I went through when I first got the board. The chipset runs real hot, and the fan runs real loud. 

I'd fixed it before, so now I'm just writing it up for next time, or for anyone else who's having the same issue. I make no guarantees that you won't brick your motherboard, but I've done this twice now and it's been fine.

Step 1: Enable ASPM.

Using information from [this Reddit post](https://www.reddit.com/r/FormD/comments/ktt4wr/dropping_your_strix_x570i_board_chipset_temp/), follow the steps below:

1. Download this boot file: [bootx64.efi.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5eab4fa-30c5-4442-8921-6575c9348ab7/bootx64.efi.zip)
2. FAT32 format a USB drive and create a folder `/efi/boot`.
3. Unzip the file and put it in the `boot` folder.
4. Restart your PC and boot from the USB drive from your BIOS.
5. You will get a GRUB screen and a command prompt.
6. Type `setup_var 170 37` and press enter.
7. Power off and restart Windows.
8. Check [HWiNFO64](https://www.hwinfo.com/download/) and search for **ASPM** settings.
9. It should say **L1 Entry** instead of **disabled**.

To reset back to default:

1. Do the same kind of thing until you get to the GRUB cli.
2. type `setup_var 170 00` and press enter.
3. Reboot.

Step 2: Tweak the fan curve.

Using instructions from [this Reddit post](https://www.reddit.com/r/Amd/comments/nu59wl/modifying_pch_fan_curve_on_nonmodded_asus_x570/), follow these steps:

1. Download [modGRUBShell.efi](https://github.com/datasone/grub-mod-setup_var/releases) and put it in `/efi/boot` on your USB drive.
2. Delete `bootx64.efi` and rename `modGRUBShell.efi` to `bootx64.efi`. (They may actually do the same thing, but I'm not sure. Better safe than sorry.)
3. Boot from the USB drive and you'll get a GRUB screen and a command prompt.
4. Type `setup_var_cv QFan 0x3a` and press enter. You should see `offset 0x3a is: 0x3c` which means the PCH Fan Middle Temperature is set to 60 degrees. If it doesn't say this, go back to the Reddit post and do *"Phase 1: Getting the correct variable offset for your BIOS"*.
5. Type `setup_var_cv QFan 0x3a 0x01 0x50` and press enter. This sets the fan curve to 80 degrees, which means it will wait until the chipset is 80 degrees before it starts ramping up the fan speed.
6. Reboot and you should be golden.

Note: Use [LibreHardwareMonitor](https://github.com/LibreHardwareMonitor/LibreHardwareMonitor) to get the real chipset temperature and fan speed.

That's it. Remember, I'm not responsible if you enter the wrong values and your motherboard explodes.

Enjoy the quiet!
