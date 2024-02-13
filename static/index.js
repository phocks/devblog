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

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // A test fetch
  const response = await fetch("/favicon.png");
  const blob = await response.blob();
  console.log(blob);
}

// Run the main thread
run();
