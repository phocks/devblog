import init, { hello_world } from "./pkg/wasm.js";

async function run() {
  await init();
  hello_world();
}

run();
