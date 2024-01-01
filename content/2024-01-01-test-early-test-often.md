+++
title = "Test early test often, or: writing tests in Rust is super easy and hella fun!"
date = 2024-01-01
draft = true

[taxonomies]
tags = ["rust", "testing", "tests", "debugging"]
+++

It's tempting to say "I'll learn how to write tests later" or "I'll just test it in production". I've fallen into that trap many a time. So let's tackle testing up front!

Basically, tests are functions annotated with `#[test]`. If the function panics, the test fails. If it doesn't panic, the test passes. That's it. We can use `assert!` to check if something is true.

Here's a test that passes:

```rust
#[test]
fn it_works() {
    assert!(true);
}
```

And here's a test that fails:

```rust
#[test]
fn it_works() {
    assert!(false);
}
```

We can also use `assert_eq!` to check if two things are equal:

```rust
#[test]
fn it_works() {
    assert_eq!(1, 1);
}
```

And we can use `assert_ne!` to check if two things are not equal:

```rust
#[test]
fn it_works() {
    assert_ne!(1, 2);
}
```



