import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES_URL || "https://localhost:4321",
  adapter: cloudflare(),
  integrations: [react(), tailwind({ applyBaseStyles: true })],
  devToolbar: { enabled: false },
});
