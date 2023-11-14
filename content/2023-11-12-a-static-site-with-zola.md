+++
title = "A static site with Zola"
date = 2023-11-13
draft = false

[taxonomies]
tags = ["setup", "zola", "rust", "blog"]
+++

There are a few static site generators out there, like [Jekyll](https://jekyllrb.com), [Hugo](https://gohugo.io), [Gatsby](https://www.gatsbyjs.org), [11ty](https://www.11ty.dev/), [Pelican](https://getpelican.com), [Hexo](https://hexo.io), [Nikola](https://getnikola.com), [Metalsmith](https://metalsmith.io), [Middleman](https://middlemanapp.com), etc. I chose [Zola](https://getzola.org) to power this blog because it's simple, super speedy, easy to customise, and written in [Rust](https://www.rust-lang.org).

Much of the ~~frustration~~ fun in running your own blog is the setup, so here's probably the quickest and dirtiest guide to getting a blog up and running with Zola and hosting it with [Surge](https://surge.sh).

Prerequisites:

1. A computer.
2. Some command-line knowledge.

<!-- more -->

First, install Zola by running `brew install zola` (if you have Homebrew installed) or by following the [Zola install instructions here](https://www.getzola.org/documentation/getting-started/installation/).

After installing Zola, create a new site with `zola init myblog`, answer the install questions (we're using Surge so pick a base <abbr title="Uniform Resource Locator">URL</abbr> like: `https://<subdomain>.surge.sh`, this can be changed later), and then `cd myblog`.

Then [choose a theme here](https://www.getzola.org/themes/) and follow the install instructions. Mostly it's something like `git init` and then `git submodule add <theme url> themes/<theme name>`. For example:

```bash
git init # if you haven't already
git submodule add https://github.com/pawroman/zola-theme-terminimal.git themes/terminimal
```

Then add `theme = "terminimal"` (or your theme name) to your `config.toml` file and change any other relevant settings.

Create a Markdown `.md` post in the `content` directory like this. For example, `content/2023-11-12-hello-world.md`:

```markdown
+++
title = "Hello, World!"
date = 2023-11-13

[taxonomies]
tags = ["hello", "world"]
+++

Hello, World!
```

To preview locally run `zola serve` and build your static site with `zola build`

To deploy, make sure [Surge](https://surge.sh/help/getting-started-with-surge) is installed with `npm install --global surge` (assuming you have a recent version of [Node.js](https://nodejs.org)) and then push your `public` dir up using:

```bash
surge public <subdomain>.surge.sh # replace <subdomain> with your subdomain
```

NOTE: Set your `base_url` to in your `config.toml` file, eg. `base_url = "https://<subdomain>.surge.sh"` before you deploy.

You could also use [Netlify](https://www.netlify.com) or [Github Pages](https://pages.github.com) or [Cloudflare](https://pages.cloudflare.com/) or whatever you want, but that's a topic for another day.

Anyway, that's it. Enjoy your static site!
