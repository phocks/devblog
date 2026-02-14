---
title = "Svelte state sharing? Just use classes. They're fine."
date = 2025-05-31
draft = true

[taxonomies]
tags = ["JavaScript", "Modules", "HTML"]
---

Need to load a JavaScript (ES) module script with `type=module` but don't have access to modify the html. Well you can do it through a standard "classic" script. Here's how.

```js
const script = document.createElement("script");
script.type = "module";
script.src = "http://localhost:5173/src/main.ts";
document.body.appendChild(script);
```
