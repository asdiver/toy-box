import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import controlElectron from "./scripts/vite-plugin-electron-dev"
import { join,resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const baseConfig = {
    plugins: [vue(),controlElectron()],
    root: join(process.cwd(),"src","render"),
    // file协议相对路径
    base:"./",
    resolve:{
      alias:{
        '@': resolve(__dirname, 'src'),
        '@main': resolve(__dirname, 'src', "main"),
        '@preload': resolve(__dirname, 'src', "preload"),
        '@render': resolve(__dirname, 'src', "render")
      }
    }
  }

  return baseConfig
})
