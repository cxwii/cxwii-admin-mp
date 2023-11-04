import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import EslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    EslintPlugin({
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
    })
  ]
})
