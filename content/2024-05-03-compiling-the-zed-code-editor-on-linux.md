+++
title = "Compiling the Zed code editor on Linux"
date = 2024-05-03
draft = true

[taxonomies]
tags = ["Linux", "IDE", "Editors", "Compiling"]
+++

Hello World!

I'm on my ThinkPad T480s running Arch Linux with KDE Plasma 6 desktop environment. I'm typing this sentence into the [Zed code editor][Zed] right now, which isn't available on Linux yet unless you compile it yourself.

Luckily it's relatively easy to do.

Just [clone the repo][Zed GitHub]. Then follow [the instructions here][Linux instructions].

```
[Desktop Entry]
Type=Application
Name=Zed
Exec=WAYLAND_DISPLAY='' /home/phocks/bin/Zed
Icon=/home/phocks/bin/Zed.jpg
Terminal=false
Categories=Utility;TextEditor;Development;
```

[Zed]: https://zed.dev
[Linux instructions]: https://github.com/zed-industries/zed/blob/main/docs/src/developing_zed__building_zed_linux.md
[Zed GitHub]: https://github.com/zed-industries/zed
