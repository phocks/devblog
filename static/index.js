import init, { main } from "./pkg/wasm.js";

function supportsServiceWorkers() {
  return "serviceWorker" in navigator;
}

/** @param {string} seriveWorkerPath */
function registerServiceWorker(seriveWorkerPath) {
  if (!supportsServiceWorkers()) return;
  navigator.serviceWorker.register(seriveWorkerPath);
}

async function run() {
  // Register the service worker
  registerServiceWorker("/service_worker.js");

  // Initialise and run WebAssembly
  await init();
  main();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // A test fetch
  const response = await fetch("/favicon.png");
  const blob = await response.blob();
  console.log(blob);
}

// Run the main thread
run();
