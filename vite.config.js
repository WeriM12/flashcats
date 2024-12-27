import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodePackageImporter } from "sass-embedded";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        importers: [new NodePackageImporter()],
      },
    },
  },
  esbuild: {
    loader: 'jsx', // Treat .js files as .jsx
    include: /src\/.*\.js$/, // Apply only to .js files in the src directory
  },
});