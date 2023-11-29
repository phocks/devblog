+++
title = "Running runes locally with Svelte 5 pre-release alpha"
date = 2023-11-29
draft = false

[taxonomies]
tags = ["svelte", "runes", "javascript", "webdev"]
+++

I noticed Svelte published some v5 pre-releases. Previously you could only try out [Svelte runes](https://svelte.dev/blog/runes) by using the [online playground](https://svelte-5-preview.vercel.app). Now you can run them locally.

Here's how. You'll need:

- [Node.js](https://nodejs.org).
- [pnpm](https://pnpm.io) - Svelte uses it, but `npm` should work too.

Download one of the version 5 pre-releases from the [Svelte releases page](https://github.com/sveltejs/svelte/releases) and extract it. Or you could just clone [the repo](https://github.com/sveltejs/svelte) to get the bleeding edge version.

Then move into the dir and do a `pnpm install` to install the dependencies.

Then run `pnpm run build` to compile everything.

^^^ You know what, scrap that, silly me, I just realised that they are actually publishing these pre-releases [to npm](https://www.npmjs.com/package/svelte?activeTab=versions). So you can simply link your `svelte` dev dependency to the latest pre-release version.

Well then. Instead of linking in `package.json` to the version we just compiled, we can just link to the one on npm.

Anyway, I'll press on regardless. It's up to you if you want to compile it locally or not.

Create a new Svelte project in a separate directory.

```bash
npm create vite@latest # Select svelte option
```
In `package.json` find the `svelte` dev dependency and change the version.

To use the npm version:

```json
"svelte": "5.0.0-next.15"
```

Otherwise, link to your locally compiled version of Svelte:

```json
"svelte": "file:../svelte/packages/svelte"
```

In Svelte 5 there's [a new way](https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes) of mounting the app. So you'll have to edit `main.js` to look a bit like this:

```typescript
import "./app.css";
import App from "./App.svelte";
import { createRoot } from "svelte";

const target = document.getElementById("app");

if (!target) throw new Error("Failed to find #app");

const app = createRoot(App, { target });

export default app;
```

Then you can run `npm run dev` and you should see the app running.

Change `Counter.svelte` to use runes, and away you go.

```typescript
<script lang="ts">
  let count: number = $state(0);

  const onclick = () => {
    count += 1;
  };
</script>

<button {onclick}>
  count is {count}
</button>
```

Have run writing your next Svelte app with runes!