import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

const oldPosts = ["an-initial-test-post"];
const redirects = Object.fromEntries(
	oldPosts.map((slug) => [`/${slug}`, `/posts/${slug}`]),
);

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: "css-variables",
		},
	},
	shikiConfig: {
		wrap: true,
		skipInline: false,
		drafts: true,
	},
	site: "https://josh.is-cool.dev",
	integrations: [sitemap(), mdx()],
	redirects,
});
