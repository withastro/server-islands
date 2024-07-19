import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_DEPLOY_URL =
	process.env.CONTEXT === 'production'
		? process.env.URL
		: process.env.DEPLOY_PRIME_URL;

// https://astro.build/config
export default defineConfig({
	site: NETLIFY_DEPLOY_URL || 'https://localhost:4321',
	output: 'hybrid',
	adapter: netlify(),
	integrations: [
		react(),
		tailwind({ applyBaseStyles: true })
	],
	devToolbar: { enabled: false },
	experimental: {
		serverIslands: true,
	}
});
