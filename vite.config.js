import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    vuetify({ autoImport: true}), //{styles: 'none'} { styles: { configFile: 'src/settings.scss' } }
    /*
    autoImport: {
        labs: true,
        ignore: [
          'VAlert', // Component name
          'Ripple', // Directive name
        ]
      },
      styles: {
        configFile: settingsFile
      }
     */
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
