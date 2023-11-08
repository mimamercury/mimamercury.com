import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    env: {

    },
    alias: {
      $components: "./src/lib/components",
      $lib: "./src/lib",
      $data: "./src/data",
    },
  },

  preprocess: [vitePreprocess({}), mdsvex(mdsvexConfig)],
};

export default config;
