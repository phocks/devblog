+++
title = "A static site with Zola"
date = 2023-11-13
draft = true

[taxonomies]
tags = ["setup", "zola", "rust", "blog"]
+++

Much of the fun/frustration in running your own blog is the setup. Here's how to get started with [Zola](https://getzola.org), a static site generator written in Rust.

Prerequisites:

1. A commandline terminal.
2. [Rust](https://www.rust-lang.org/tools/install) installed.
3. Static site hosting.

<!-- more -->

After [installing Zola](https://www.getzola.org/documentation/getting-started/installation/), you can create a new site with the following command:

```bash
zola init myblog # or whatever you want to call it
```

Then choose a theme and follow the instructions to install it. eg. in your `myblog` directory:

```bash
git init # if you haven't already
git submodule add https://github.com/pawroman/zola-theme-terminimal.git themes/terminimal
```

Add `theme = "terminimal"` (or your theme name) to your `config.toml` file and change any other relevant settings.

Add Markdown posts to the `content` directory.

```markdown
+++
title = "A static site in Zola"
date = 2023-11-13
+++

Hello, World!!
```

And preview locally with:

```bash
zola serve
```

Get Zola to build your static site with:

```bash
zola build
```

To deploy, make sure [Surge](https://surge.sh) is installed and then push the `public` dir up using:

```bash
surge public <subdomain>.surge.sh # replace <subdomain> with your subdomain
```

You could also use [Netlify](https://www.netlify.com) or [Github Pages](https://pages.github.com) or any other static site host you're familiar with.