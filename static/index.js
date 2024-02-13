import init, { main as mainWasm } from "./pkg/wasm.js";

function supportsServiceWorkers() {
  return "serviceWorker" in navigator;
}

async function main() {
  supportsServiceWorkers() &&
    navigator.serviceWorker.register("/service_worker.js");

  // Some WebAssembly tests
  await init();
  mainWasm();
}

// Run the main thread
main();
