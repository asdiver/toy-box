const listenEvent = {
  test(e, data) {
    console.log(data);
    return { mes: "你好" };
  },
};

/**
 *
 * @param {Electron.IpcMain} ipcMain
 */
function initListen(ipcMain) {
  // 遍历监听
  for (const key in listenEvent) {
    ipcMain.handle(key, listenEvent[key]);
  }
}

module.exports = {
  listenEvent,

  initListen,
};
