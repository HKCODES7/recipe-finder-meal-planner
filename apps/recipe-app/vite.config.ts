import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { fileURLToPath } from 'node:url';

const workspaceRoot = fileURLToPath(new URL('../..', import.meta.url));

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        workspaceRoot
      ]
    }
  }
});