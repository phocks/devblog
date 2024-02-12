console.log("Hello, this message is sent by a service worker");

// This code executes in its own worker or thread
self.addEventListener("install", event => {
  console.log("Service worker installed");
});
self.addEventListener("activate", event => {
  console.log("Service worker activated");
});

self.addEventListener('fetch', (event) => {
  // Handle fetch events
});

// Listen for online and offline events
self.addEventListener('online', () => {
  console.log('Connection is now online.');
});

self.addEventListener('offline', () => {
  console.log('Connection is now offline.');
});