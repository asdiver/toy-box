import { resolve } from 'node:path'
import process from 'node:process'
import { BrowserWindow, app, ipcMain } from 'electron'
import { optimizer } from '@electron-toolkit/utils'
import { initListen } from './listen'

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: resolve(__dirname, '..', 'preload', 'index.js'),
      sandbox: false,
    },
  })

  // 判断生产环境和开发环境
  if (app.isPackaged)
    win.loadFile('./dist/index.html')
  else
    win.loadURL(process.env.VITE_DEV_URL as string)
}

app.on('browser-window-created', (_, window) => {
  optimizer.watchWindowShortcuts(window)
})

app.whenReady().then(() => {
  // 监听事件
  initListen(ipcMain)
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})
