import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import controlElectron from "./scripts/vite-plugin-electron-dev"
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const baseConfig = {
    plugins: [vue(),controlElectron()],
    root: join(process.cwd(),"src","render")
  }

  return baseConfig
})
