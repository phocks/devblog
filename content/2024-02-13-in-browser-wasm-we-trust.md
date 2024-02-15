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

Then, create a new Rust project with `wasm-pack new my-wasm-library`. This will generate a basic Rust library for you.

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

The `extern "C"` block pulls the `alert` function in from JavaScript and we "export" the `greet` function using `pub` so we can call it from JavaScript.

All this does is show an alert on the page. Let's do something better.

```rust
mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}
```

This function calculates the nth Fibonacci number. Now we can hook it up and call this function from our page. But first, we need to compile it into WebAssembly.

Run `wasm-pack build` in the root of your project. This will create a `pkg` directory with a `wasm.js` file and a `wasm_bg.wasm` file. The `wasm.js` file is a JavaScript wrapper around the WebAssembly module.

We'll need an `index.js` file at the root of our project.


```javascript
import init, { fibonacci } from "./pkg/test.js";

async function run() {
  await init();
  let result = fibonacci(32);
  console.log(result); // 2178309
}

run();
```

And an `index.html` to load our script.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello World!</title>
    <script type="module" defer async src="./index.js"></script>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

Now serve your root directory with [miniserve](https://github.com/svenstaro/miniserve) or another static file server and open `index.html` in your browser. You should see the result of the `fibonacci` function in the console.


