+++
title = "Test early test often, or: writing tests in Rust is super easy and hella fun!"
date = 2024-01-01
draft = true

[taxonomies]
tags = ["rust", "testing", "tests", "debugging"]
+++

When you're first learning a language it's extremely tempting to simply not write tests.

You could just keep saying "I'll learn how to write tests later" or "Any errors will just show up in production and I'll just catch them there". I've fallen into that trap many times.

This time let's tackle testing in Rust up front!

Tests are super simple. Tests make your code better, and they make you a better coder.

Simply put, tests in Rust are functions annotated with `#[test]` which are run using `cargo test`. If the function panics, the test fails. If it doesn't panic, the test passes. That's it.

We can use `assert!` to check if something is true (it will cause the function to panic if the expression is false).

Here's a test that passes.

```rust
#[test]
fn it_works() {
    assert!(1 == 1);
}
```

And here's a test that fails.

```rust
#[test]
fn it_works() {
    assert!(1 == 2);
}
```

We can also use `assert_eq!` to check if two things are equal.

```rust
#[test]
fn it_works() {
    assert_eq!(1, 1);
}
```

And we can use `assert_ne!` to check if two things are not equal.

```rust
#[test]
fn it_works() {
    assert_ne!(1, 2);
}
```
