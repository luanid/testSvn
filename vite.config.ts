import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {ViteToml} from "vite-plugin-toml";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteToml({namedExports: true}),
    //viteSingleFile()   Only when the output should be a single html file
  ],
  /*build: {   Only when the output should be a single html file
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,

  },*/
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
