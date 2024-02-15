+++
title = "In-browser WebAssembly we trust"
date = 2024-02-15
draft = false

[taxonomies]
tags = ["WebAssembly", "Wasm", "Rust", "WebDev"]
+++

Rust compiles to machine code, which runs as an executable file on your computer. You can also compile it to [WebAssembly](https://webassembly.org/) (Wasm for short) and have it run in the browser.

Until recently, if you wanted to add interactivity to a web page, or do a bunch of calculations in-browser, you'd use JavaScript. Now that Wasm is supported in all modern browsers, we can use Rust (or [another compatible language](https://github.com/appcypher/awesome-wasm-langs)) and run much closer to the metal.

Good times! Here's how to do it.

Firstly, [install wasm-pack](https://rustwasm.github.io/wasm-pack/installer/). It's a tool that helps build Rust code for the web.

Then, create a new Rust project with `wasm-pack new my-wasm-project`. This will generate a basic Rust library for you.

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

Those `#[wasm_bindgen]` annotations are what bind our Rust code to JavaScript. They show where the Wasm module should interface with JavaScript.

The `alert` function ... shows an alert box on the page. Cool. Let's do something a bit more interesting!

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

Build your [Wasm module](https://rustwasm.github.io/docs/wasm-bindgen/examples/without-a-bundler.html) with `wasm-pack build --target web` in the root of your project. This will create a `pkg` directory with a `wasm.js` file and a `wasm_bg.wasm` file.

We'll need an `index.js` file at the root of our project to import our Wasm module.

```javascript
import init, { fibonacci } from "./pkg/my_wasm_project.js";
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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Hello World!</title>
    <script type="module" defer async src="./index.js"></script>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

Now serve your root directory with [miniserve](https://github.com/svenstaro/miniserve) or your favourite [local static file server](https://github.com/vercel/serve) and open `index.html` in your [browser](https://www.mozilla.org/firefox). You should see the result of the `fibonacci` function in [the console](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html).

_The 32nd Fibonacci number is 2178309 btw._

And there you have it. Wasm running in-browser.

'Till next time. ✌️
