+++
title = "Friendship over with Zola"
date = 2026-08-18
description = "Where I get fed up with my static site generator."
draft = false

[taxonomies]
tags = ["Zola", "Static", "Web"]
+++

????? is my new best friend now.

It's time to find a new static site generator. The only question is, which one?

One of the main reason I've been absent here is due to breaking changes in the static site generator [Zola](1), which runs this site. Because it's just a binary installed via the OS package manager, it updates automatically and lately they've been altering the way the config files are structured, the way themes work, and the way code syntax highlighting works.

Ordinarily, this wouldn't be too much of a problem, and I persevered through a few updates, just changing my config file accordingly. But then some changes began breaking the theme too and of course theme authors never have time to fix their themes, so I'd end up spending hours I don't have digging through code, just to get the site to build.

So I just wouldn't post, mostly. An "I'll deal with it later" type situation.

But now we've hit breaking point. Now I can't even get the site to build at all with the current version. Zola keeps giving me syntax errors. Strangely different errors for local builds to <abbr title="Continuous Integration">CI</abbr> builds too. So who knows? I don't need this.

Anyway, enough ranting. I'm jumping ship. I just don't really know which ship to jump to.

My instinct is to go with [Astro](2), but I might check out [11ty](3) as well. If anyone else has some suggestions, please [get in touch](/about/). I just want a static site builder that builds my markdown files and doesn't break every time the developer thinks up a "better" way to do the config or changes syntax on a whim.

Cheers, and hopefully see you soon, on the other side!

[1]: https://www.getzola.org/
[2]: https://astro.build/
[3]: https://www.11ty.dev/
