+++
title = "A trip to the library in Rust"
date = 2023-12-20
draft = false

[taxonomies]
tags = ["rust", "tutorial"]
+++

Why write code you don't have to?

Chances are someone's already written it and put up a crate on [crates.io](https://crates.io). A "crate" in Rust is just another name for a library or package, code that you can use in your own project.

The other day I wanted a randomly generated string of text so I could append it to a CSS class name to make (pretty) sure it was unique. Let's write an extremely simple commandline application!

We already know how to print stuff to the console, so all we need is a random string generator library. There's a crate I've used before called [nanoid](https://crates.io/crates/nanoid), which might do the trick. 

Use your existing Hello World project or create a new one with `cargo new`.

```bash
cargo new rando # or whatever you want to call your app
```

We add the crate using the `cargo add` command.

```bash
cargo add nanoid
```

This will add the latest version of nanoid to your `Cargo.toml` file.

```toml
[dependencies]
nanoid = "0.4.0"
```

We can now use the `nanoid` crate directly in our code, using `::` to access the `nanoid!` macro in the crate.

```rust
// main.rs

fn main() {
    let id = nanoid::nanoid!();
    println!("{}", id);
}
```

Or we can use the `use` keyword to bring the macro into scope. THen we don't have to use the fully qualified name every time.

```rust
use nanoid::nanoid;

fn main() {
    let id = nanoid!();
    println!("{}", id);
}
```

That's our app anyway. We can run it with `cargo run` and we'll get a random string of text printed to the console. But it might be fun to actually install it on our system so we can run it any time we want.

To do this simply run `cargo install --path .` from the root of your project. This will install the app in your `~/.cargo/bin` directory. You can now run it from anywhere on your system.

In my case I called the app `rando` so now when I want a random string of text printed to the console I can just run `rando` and hey presto I get my random string of text.

To uninstall the app just run `cargo uninstall rando`.

That's it for today. Happy coding!
