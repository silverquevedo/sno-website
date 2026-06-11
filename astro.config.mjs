// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// public/albums/ is a real committed directory (see CLAUDE.md), so the old
// symlink/fs.allow vite overrides are no longer needed.
export default defineConfig({
  output: 'static',
});
