+++
title = "Static embeds"
date = 2024-01-03
draft = true

[taxonomies]
tags = ["webdev", "social"]
+++

Here's a static embed as a test.

<script>
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
</script>

<style>
.static-embed-container {
  min-height: 200px;
  max-width: 500px;
  border: 1px solid #555;
  border-radius: 16px;
  padding: 16px;
  background-color: #eee;
  font-family: Arial, Helvetica, sans-serif;
}

.static-embed-container .avatar {
  width: 32px;
  height: 32px;
  border-radius: 20%;
  margin-right: 16px;
}

.static-embed-container .status-text {
  font-size: 19px;
}

.dark .static-embed-container {
  background-color: #333;
  color: #eee;
}
</style>

<div class="static-embed-container">
  <div>
    <img class="avatar" alt="Avatar" src="data:image/webp;base64,UklGRtgBAABXRUJQVlA4IMwBAAAwCQCdASogACAAPok2lEelIyIhMAwAoBEJbACdMoR5n7N+AF0GcA21F2ic+B7Gn3AMYFaCgbNwPfv80eBbbZMjq2AFO6xKQqOlQEKpjH8CnHAAAP7343N7CtCwjYPwpgb9hs0NBXg8bNNz2//Bof3yEfJejM5TFMj5qZIla5Dgs+C3kF5gVzLGCVjyiz/Jx//npDpizf7PcDJIj0nf/5gBcD9r8T/r/wuIVFAhR//tf8nU9Y9RpvC9g/PSeJZq3Kh/jr+4qdLoxn/aT20rxVeN3YpqAD7St3uOdJtcPd0keqXtJlVktO1BteoxUIQb/2DlNzGzNqyjH9//HgppETbz0q/6NyBSRo346umXogEUf+68byvGeRy3pymWsZ97IitptF768gkliJaTVQXKq1B66n5acDd7Ml+QiG2Qpa8Ib1gUmTZeDlby0vUr4czPwFQjBNzz/tMFxXO4lZLAKyUVMAg85orhCEEMQp5zpNRNftkYkkbF9+CAZL6hvYMIscOyZRm23puQLr2L8WyaIG/70jlixQZtttCXvgKSyND2eQUWPl8gzxQ3O+0y7IxVx80wlI7fOkKATzqbfwEM1VpsqZd2ctRW6D2vrYAA" />
  </div>

  <div class="status-text">
    <p>Damn the 80s were a wild time to be alive</p>
  </div>
</div>
