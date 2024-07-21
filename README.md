<h1 align="center">Server Islands Demo<br><br>🏝️✨<br><br></h1>

<p align="center">
  This repo demonstrates Astro’s Server Islands technique.
</p>

<p align="center">
  <strong>
    <a href="https://server-islands.com/">👉 LIVE DEMO 👈</a>
  </strong>
</p>

<p align="center">
  Learn more in the <a href="https://astro.build/blog/astro-4120/">Astro 4.12: Server Islands</a> blog post.
</p>

## Local development

1. Install dependencies:

   ```sh
   pnpm install
   ```

2. Run the dev server:

   ```sh
   pnpm run dev
   ```

3. Open the demo in your browser: <https://localhost:4321>

## Notes

- This example is ready to deploy to Netlify, but can be updated to deploy to other hosts by changing the adapter in `astro.config.mjs`.

  Learn more in [“On-demand Rendering Adapters”](https://docs.astro.build/en/guides/server-side-rendering/) in the Astro Docs.

- This example is backed by an API which includes the delays. You can see the source here: https://github.com/withastro/server-islands-api
