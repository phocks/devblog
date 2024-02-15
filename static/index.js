import init, { main } from "./pkg/wasm.js";

function supportsServiceWorkers() {
  return "serviceWorker" in navigator;
}

/** @param {string} seriveWorkerPath */
function registerServiceWorker(seriveWorkerPath) {
  if (!supportsServiceWorkers()) return;
  navigator.serviceWorker.register(seriveWorkerPath);
}

function fibonacci(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

async function run() {
  // Register the service worker
  registerServiceWorker("/service_worker.js");

  // Initialise and run WebAssembly
  await init();
  main();

  let start = performance.now();
  let number = 32;

  console.log(`Fibonacci of ${number} is:`, fibonacci(number));

  let duration = performance.now() - start;

  console.log("Time elapsed in (JavaScript) fibonacci() is:", `${duration}ms`);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // A test fetch
  const response = await fetch("/favicon.png");
  const blob = await response.blob();
  console.log(blob);
}

// Run the main thread
run();
