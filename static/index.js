import init, { hello_world } from "./pkg/wasm.js";

function supportsServiceWorkers() {
  return "serviceWorker" in navigator;
}

async function main() {
  supportsServiceWorkers() &&
    navigator.serviceWorker.register("/service_worker.js");

  // Some WebAssembly tests
  await init();
  hello_world();
}

// Run the main thread
main();
