+++
title = "What cargo new gives you"
date = 2023-12-10
draft = false

[taxonomies]
tags = ["Rust", "Tutorial", "Getting Started", "Hello World", "Rustacean"]
+++

[Last time] we used `cargo new` to generate a new Rust app. Let's take a look inside.

Run `tree` to print the directory structure.

```bash
.
├── Cargo.lock
├── Cargo.toml
└── src
    └── main.rs
```

There's also a hidden dotfile `.gitignore` and the `.git` folder, but don't worry about those for now.

The `Cargo.lock` file is generated by Cargo by `cargo run` and it's for dependency tracking and that's Cargo's problem.

The two important files are `Cargo.toml` and `src/main.rs`.

```toml
# Cargo.toml

[package]
name = "hello"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```

`Cargo.toml` is our project's manifest, where we keep track of stuff about the project in [TOML] format and also any dependencies we want to use. Currently there's none!

Name and version are pretty self-explanatory. The `edition` key is for specifying [which edition of Rust] we want to use *ie. latest stable edition, 2021*.

The `src/main.rs` file is our entry point.

```rust
// src/main.rs

fn main() {
    println!("Hello, world!");
}
```

When compiling, Rust will look for the `src/main.rs` file with a `main` function inside. Functions in Rust are defined with the `fn` keyword.

If Rust finds a `src/lib.rs` file it will build a "library", which can be used as a dependency inside another app instead of a standalone binary app. (We can also have both apparently. But we'll get to that later.)

To print "Hello, world!" to the console we use the `println!` macro, which is built-in to Rust. Macros are kinda like functions that expand into other functions at compile time. They have a `!` at the end. For now, you just need to know that `println!()` prints stuff to the console.

Aaaaaand that's just about it. Let's edit some code. We can make the computer say whatever we want!

```rust
println!("Crab party time! 🦀🦀🦀🦀🦀🦀🦀🦀🦀");
```

Do another `cargo run` and give us a little happy dance.

Nice. Until next time!

[Last time]: /nature-keeps-evolving-rustaceans/
[TOML]: https://toml.io
[which edition of Rust]:(https://doc.rust-lang.org/stable/edition-guide/)
