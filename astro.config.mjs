import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import yaml from "@rollup/plugin-yaml";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  integrations: [tailwind(), svelte(), icon()],
  vite: {
    plugins: [yaml()],
  },
});
