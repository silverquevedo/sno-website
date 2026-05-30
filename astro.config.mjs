// @ts-check
import { defineConfig } from 'astro/config';
import { resolve } from 'path';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    server: {
      fs: {
        // allow serving album art from the parent SilverNightOperator directory
        allow: [resolve('../')],
      },
    },
    // allow following symlinks in public/ (the albums symlink)
    resolve: {
      preserveSymlinks: true,
    },
  },
});
