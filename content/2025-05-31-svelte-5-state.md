+++
title = "Svelte 5 State"
date = 2025-05-31
draft = true

[taxonomies]
tags = ["Svelte", "JavaScript"]
+++

Who here remembers [Stores](https://svelte.dev/docs/svelte/stores) from Svelte 4?

```ts
import { writable } from 'svelte/store';

export const count = writable(0);
```

In Svelte 5, Stores are out and Runes are in. Global Reactivity baby!

```ts
export const count = $state({ value: 0 });
```

