import { app, BrowserWindow } from "electron"
import { join } from 'path'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  // 判断生产环境和开发环境
  if(app.isPackaged){
    win.loadFile(join(process.cwd(),"src","render","dist","index.html"))
  }else{
    win.loadURL(process.env.VITE_DEV_URL);
  }
  
  
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})