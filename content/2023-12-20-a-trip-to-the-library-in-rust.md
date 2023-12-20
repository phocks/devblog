+++
title = "A trip to the library in Rust"
date = 2023-12-20
draft = false

[taxonomies]
tags = ["rust", "tutorial"]
+++

Why write code you don't have to?

Chances are someone's already written it and put a crate up on [crates.io](https://crates.io). A "crate" in Rust is just another name for a library or package, code that you can use in your own project.

The other day I wanted a randomly generated string of text so I could manually append it to a CSS class name to make (pretty) sure it was unique. Let's write an extremely simple commandline application that does this!

We already know how to print stuff to the console, so all we need is a random string generator library. There's a crate I've used before called [nanoid](https://crates.io/crates/nanoid), which might do the trick. 

Use your existing Hello World project or create a new one with `cargo new`.

```bash
cargo new rando # or whatever you want to call it
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

We can now use the `nanoid` crate directly in our code, using `::` to access the `nanoid!` macro inside the crate.

```rust
// main.rs

fn main() {
    let id = nanoid::nanoid!();
    println!("{}", id);
}
```

Alternatively, we can use the `use` keyword to bring the macro into scope. THen we don't have to use the fully qualified name with the double colon syntax `::` every time we want to use it.

```rust
use nanoid::nanoid;

fn main() {
    let id = nanoid!();
    println!("{}", id);
}
```

That's our app anyway. Run it with `cargo run` and we'll get a random string of text printed to the console. But it might be fun to actually install it on our system so we can run it any time we want.

To do this simply run `cargo install --path .` in the root of your project. This will install the app in `~/.cargo/bin`, which should have been added to your PATH when you installed Rust. You can now run it from anywhere on your system.

In my case, I called the app `rando` so now whenever I want a random string of text printed to the console I can just run `rando` and hey presto I get that random string of text.

OK fun's over. To uninstall the app just run `cargo uninstall rando`.

That's it for today. Happy coding!
