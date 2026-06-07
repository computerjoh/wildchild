// @ts-check

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://go.wildchild.camp",
	output: "static",

	build: {
		inlineStylesheets: "auto",
	},

	integrations: [sitemap()],

	vite: {
		plugins: [tailwindcss()],
	},

	adapter: vercel(),
});
