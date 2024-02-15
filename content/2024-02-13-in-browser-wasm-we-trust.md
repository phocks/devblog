+++
title = "In-browser WebAssembly we trust"
date = 2024-01-25
draft = true

[taxonomies]
tags = ["WebAssembly", "Wasm", "Rust", "WebDev"]
+++

Rust compiles to machine code, which runs as an executable file on your computer. You can also compile it to WebAssembly (or Wasm for short) and run it in any browser.

Until recently, if you wanted to add interactivity to a web page, or do a bunch of calculations in-browser, you'd use JavaScript. Now that Wasm is supported in all modern browsers, we can use Rust (or another compatible language) and run much closer to the metal.

Good times! Here's how to do it.

Firstly, [install wasm-pack](https://rustwasm.github.io/wasm-pack/installer/). It's a tool that helps build Rust code for the web.

Then, create a new Rust project with `wasm-pack new my-wasm-library`. This will install a bunch of stuff like [web-sys](https://rustwasm.github.io/wasm-bindgen/web-sys/index.html) etc and then create a basic Rust library.

We only need to worry about `src/lib.rs` for now.

```rust 
mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, my-wasm-test!");
}

```



