+++
title = "Test early test often: writing tests in Rust is super easy and (kinda) fun!"
date = 2024-01-02
draft = false

[taxonomies]
tags = ["rust", "testing", "tests", "debugging", "handling errors"]
+++

It's extremely tempting to simply not write tests.

You could forever keep saying *"I'll learn how to write tests later"* or *"Any errors will just show up in production and I'll just catch them there"* ... aaaaand I've fallen into that trap many times.

This time let's tackle testing in Rust head-on, up front!

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

We can put these tests anywhere and `cargo test` will run them all. It's common however to put all your tests inside a **tests** module at the bottom of the file.

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(1, 1);
    }

    #[test]
    fn it_works2() {
        assert_eq!(2, 2);
    }
}
```

Why would we want to do this?

Well, putting tests in a module like this allows us to encapsulate code and any helper functions or libraries we might need for our tests and make sure it doesn't end up in our final binary.

For simple test functions that don't bring in other code, it's not strictly necessary. You could even put the test inline right after the function you're testing.

Here are some tests in action.

```rust
// src/main.rs

fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn minus(a: i32, b: i32) -> i32 {
    a - b
}

fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

#[test]
fn it_multiplies() {
    assert_eq!(multiply(2, 2), 4);
}

fn main() {
    let add_result = add(1, 2);
    println!("result: {}", add_result);

    let minus_result = minus(2, 1);
    println!("result: {}", minus_result);
}

#[cfg(test)]
mod tests {
    // "super" brings parent functions into scope
    // eg. add and minus so we can test them
    use super::*;

    #[test]
    fn it_adds() {
        assert_eq!(add(1, 2), 3);
    }

    #[test]
    fn it_subtracts() {
        assert_eq!(minus(2, 1), 1);
    }
}
```
Well, there you go. Now you can write tests to make sure a function actually does what you want it to do. Super easy and ... kinda fun!

There's a little bit more to testing in Rust and you can read about it in the [Rust Book](https://doc.rust-lang.org/book/ch11-00-testing.html). Here's a breakdown of other stuff to think about.

- `#[should_panic]` - put this under `#[test]` to make sure the test panics (useful for testing error handling).
- `#[ignore]` - put this under `#[test]` to ignore the test unless you run `cargo test -- --ignored` (useful for tests that take a long time to run).
- Integration tests - put tests in `tests/` directory if you're making a library and test how it integrates with other code.
- Custom failure messages - use `assert!(1 == 2, "1 does not equal 2")` to provide a custom failure message. ie. additional arguments to `assert!` will be passed to `format!` and used as the failure message.
- use `Result<(), String>` - instead of panicking, you can use `Result<(), String>` as the return type for your test function and the test will **pass** if the result is `Ok(())` and **fail** if the result is `Err(String)`.
- use `cargo test -- --nocapture` to see the output of `println!` if your tests pass.
- choose which tests to run with `cargo test it_works` or `cargo test it_works2`.

That's it for now. Good luck out there you beautiful evolving Rustaceans! Go write some amazing tests!

🦀🦀🦀🦀🦀🦀🦀