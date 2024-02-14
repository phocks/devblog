+++
title = "In-browser WebAssembly we trust"
date = 2024-01-25
draft = true

[taxonomies]
tags = ["WebAssembly", "Wasm", "Rust", "WebDev"]
+++

Rust compiles to machine code, which runs as an executable file on your computer. You can also compile it to WebAssembly (or Wasm for short) and run it in any browser.

Until recently, if you wanted to add interactivity to a web page, or run a bunch of calculations in-browser, you'd use JavaScript. Now that Wasm is supported in all modern browsers, we can use Rust (or a bunch of other languages too) and run much closer to the metal.

Good times! Here's how to do it.

Firstly, [install wasm-pack](https://rustwasm.github.io/wasm-pack/installer/).

