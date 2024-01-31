import { app, BrowserWindow } from "electron";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // 判断生产环境和开发环境
  if (app.isPackaged) {
    win.loadFile("./src/render/dist/index.html");
  } else {
    win.loadURL(process.env.VITE_DEV_URL);
  }
};

app.on("browser-window-created", (_, window) => {
  optimizer.watchWindowShortcuts(window);
});

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
