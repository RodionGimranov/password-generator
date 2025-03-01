import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/password-generator/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/global.scss";
        @import "./src/styles/variables.scss";
        @import "./src/styles/mediaQueries.scss";
        `,
      }
    },
  }
})
