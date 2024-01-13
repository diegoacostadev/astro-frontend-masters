import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-frontend-masters-diegoacostadev.netlify.app/',
  output: 'hybrid',
  integrations: [react()]
});
