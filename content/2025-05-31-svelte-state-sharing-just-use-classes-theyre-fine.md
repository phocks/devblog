+++
title = "Svelte state sharing? Just use classes. They're fine."
date = 2025-05-31
draft = false

[taxonomies]
tags = ["Svelte", "JavaScript", "Runes"]
+++

Who here remembers [Stores](https://svelte.dev/docs/svelte/stores) from Svelte 4?

```ts
// counter.ts
import { writable } from 'svelte/store';

export const count = writable(0);
```

In Svelte 5, Stores [are out](https://svelte.dev/tutorial/svelte/stores) and Runes are in. [Universal reactivity](https://svelte.dev/tutorial/svelte/universal-reactivity) baby!

```ts
// counter.svelte.ts
export const count = $state({ value: 0 });
```

The problem is there are [too many different ways](https://joyofcode.xyz/how-to-share-state-in-svelte-5) to share state across modules.

Basically, after extensive experimentation, I'd suggest ... just use classes.

They're fine, flexible, fun!

```ts
// counter.svelte.ts
class Counter {
  value = $state(0);
  doubled = $derived(this.value * 2);
}

export const counter = new Counter();
```

That's it! That's my recommendation.

Maybe I'll expand on reasoning etc later, when I have more time.

Peace out ✌️
