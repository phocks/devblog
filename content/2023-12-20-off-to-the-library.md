+++
title = "Off to the library"
date = 2023-12-20
draft = true

[taxonomies]
tags = ["rust", "tutorial"]
+++

Why write code you don't have to?

Chances are someone's already written it and put up a crate on [crates.io](https://crates.io). A "crate" in Rust is just another name for a library or package -- code and functions that you can use in your own project.

The other day I wanted a randomly generated string of text so I could append it to a CSS class name to make (pretty) sure it was unique. Let's write an extremely simple commandline application!

We already know how to print stuff to the console, so all we need is a random string generator library. There's a crate I've used before called [nanoid](https://crates.io/crates/nanoid), which might do the trick. 

Use your existing Hello World project or create a new one with `cargo new`.

We add the crate using the `cargo new` command.

```bash
cargo add nanoid
```

This will add the latest version of nanoid to your `Cargo.toml` file.

```toml
[dependencies]
nanoid = "0.4.0"
```

To use a crate we use the `use` keyword.

```rust
use nanoid;
```

