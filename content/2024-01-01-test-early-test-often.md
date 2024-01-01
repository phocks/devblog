+++
title = "Test early test often, or: writing tests in Rust is super easy and hella fun!"
date = 2024-01-01
draft = true

[taxonomies]
tags = ["rust", "testing", "tests", "debugging"]
+++

It's tempting to say "I'll learn how to write tests later" or "I'll just test it in production" and I've fallen into that trap many times. So let's tackle testing up front!

I've gone ahead and read [Chapter 11 of The Rust Book](https://doc.rust-lang.org/book/ch11-00-testing.html), all about writing tests, and basically, it all boils down to this. Tests are functions annotated with `#[test]`. If the function panics, the test fails. If it doesn't panic, the test passes. That's it.

Here's a test that passes:

```rust
#[test]
fn it_works() {
    assert!(true);
}
```



