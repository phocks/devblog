+++
title = "I made a Rust generated static site blog (and so can you)!"
date = 2023-11-13
draft = true

[taxonomies]
tags = ["setup", "zola", "rust", "blog"]
+++

Much of the fun/frustration in running your own blog is the setup. Here's how to get started using [Zola](https://getzola.org), a static site generator written in Rust.

Prerequisites:

1. A commandline terminal.
2. [Rust](https://www.rust-lang.org/tools/install) installed.
3. Static site hosting.

<!-- more -->

After installing Zola, you can create a new site with the following command:

```bash
zola init myblog # or whatever you want to call it
```
Then choose a theme and follow the instructions to install it. eg. in your `myblog` directory:

```bash
git init # if you haven't already
git submodule add https://github.com/pawroman/zola-theme-terminimal.git themes/terminimal
```

Add `theme = "terminimal"` (or your theme name) to your `config.toml` file and change any other relevant settings in `config.toml` and then you should be able to build your site with:

```bash
zola build
```

Then push the `public` dir up to [Surge](https://surge.sh) using:

```bash
surge public <subdomain>.surge.sh # replace <subdomain> with your subdomain
```

And that's it!