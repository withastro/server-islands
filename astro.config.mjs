import { defineConfig, sessionDrivers } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES_URL || "https://localhost:4321",
  adapter: cloudflare({
    imageService: "compile",
  }),
  integrations: [react(), tailwind({ applyBaseStyles: true })],
  devToolbar: { enabled: false },
  // Workaround: disable automatic KV SESSION binding since we don't use sessions.
  // Without this, the adapter injects a KV binding that breaks preview deploys.
  session: { driver: sessionDrivers.lruCache() },
});
