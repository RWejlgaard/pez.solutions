// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Static output, no adapter, no server: the build is a directory of files that
// Caddy on helsinki-a serves, copied there by the deploy workflow.
export default defineConfig({
  site: "https://pez.solutions",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "always" },
});
