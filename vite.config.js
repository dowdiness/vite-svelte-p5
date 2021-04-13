import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: { exclude: ["@roxi/routify"] },
  plugins: [
    svelte(),
    WindiCSS({
      scan: {
        exclude: ['.git'], // node_modules will no longer been excluded, take your own risk
        dirs: ['node_modules/@fouita'],
        include: ['src/**/*.{svelte,html,jsx,tsx}'],
        fileExtensions: ['svelte', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
  ]
})
