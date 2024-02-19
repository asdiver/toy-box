import { resolve } from 'node:path'
import process from 'node:process'
import { BrowserWindow, app, ipcMain } from 'electron'

import { initListen } from './listen'
import { dispatch, setWebContents } from './dispatch'

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: resolve(__dirname, '..', 'preload', 'index.js'),
      sandbox: false,
    },
  })

  // 初始
  win.menuBarVisible = false

  // 判断生产环境和开发环境
  if (app.isPackaged)
    win.loadFile('./dist/index.html')
  else
    win.loadURL(process.env.VITE_DEV_URL as string)
}

app.on('browser-window-created', (_, window) => {
  // 开发环境f12控制台
  window.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown') {
      if (app.isPackaged) {
        if (input.code === 'KeyR' && (input.control || input.meta))
          event.preventDefault()
      }
      else {
        if (input.code === 'F12') {
          if (window.webContents.isDevToolsOpened())
            window.webContents.closeDevTools()
          else
            window.webContents.openDevTools({ mode: 'bottom' })
        }
      }
    }
  })

  setWebContents(window.webContents)
  // test
  window.webContents.on('did-finish-load', () => {
    dispatch('test', { mes: 'dispatch success' })
  })
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
