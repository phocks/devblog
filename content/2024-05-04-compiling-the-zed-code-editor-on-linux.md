+++
title = "Compiling the Zed code editor on Linux"
date = 2024-05-04
draft = false

[taxonomies]
tags = ["Linux", "IDE", "Editors", "Compiling"]
+++

Hello World! Comin' to ya from my ThinkPad running Arch Linux with KDE Plasma 6. I'm typing this sentence into [Zed][] right now, a new code editor from the devs who brought us [Atom][] back in the day.

There are no binaries available for Linux yet, but don't worry, for extra fun we can compile the code ourselves!

Just [clone the repo][Zed GitHub], then follow [the instructions here][Linux instructions]. Basically it's a [Rust][] app, so you just need clone the code, do a bit of setup, and then run `cargo build --release` and go make a cup of tea (it will take a while).

The `Zed` executable will be in `target/release`. Copy it to a directory in your homedir or something.

Add it as a desktop application with a `.desktop` file like this.

```ini
# ~/.local/share/applications/Zed.desktop
[Desktop Entry]
Type=Application
Name=Zed
Exec=WAYLAND_DISPLAY='' /home/phocks/Apps/Zed/Zed
Icon=/home/phocks/Apps/Zed/Zed.jpg
Terminal=false
Categories=Utility;TextEditor;Development;
```

Add it to your commandline with a bash script in a directory available to your executable [PATH][].

```bash
#!/usr/bin/env bash

# Pass any arguments to the Zed app
WAYLAND_DISPLAY='' /home/phocks/Apps/Zed/Zed "$@" &

# Wait for the Zed app to start
sleep 2

# Detach the process from the terminal
disown
```

We need `WAYLAND_DISPLAY=''` to run it in X11 mode so we can resize and move the window (there's [no client side decoration on Wayland][Zed Wayland] yet.)

Well, that's about it. To update it just run a `git pull` to fetch the latest code in `main` and do the compile again and re-copy the resulting binary.

Enjoy!

[Zed]: https://zed.dev/
[Atom]: https://en.wikipedia.org/wiki/Atom_(text_editor)
[Rust]: https://www.rust-lang.org/
[Linux instructions]: https://github.com/zed-industries/zed/blob/main/docs/src/developing_zed__building_zed_linux.md
[Zed GitHub]: https://github.com/zed-industries/zed
[PATH]: https://wiki.archlinux.org/title/Environment_variables#Per_user
[Zed Wayland]: https://github.com/zed-industries/zed/issues/9205
