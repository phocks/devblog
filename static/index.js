import init, { main } from "./pkg/wasm.js";

async function run() {
  await init();
  main();
}

run();
