import init, { main } from "./pkg/wasm.js";

function supportsServiceWorkers() {
  return "serviceWorker" in navigator;
}

async function run() {
  supportsServiceWorkers() &&
    navigator.serviceWorker.register("/service_worker.js");

  // Some WebAssembly tests
  await init();
  main();
}

// Run the main thread
run();
