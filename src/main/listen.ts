interface ListenEventMap {
  [key: string]: (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any;
}

// -------------

const listenEvent: ListenEventMap = {
  test(_e: Electron.IpcMainInvokeEvent, data: {}) {
    console.log(data);
    return { mes: "你好" };
  },
};

function initListen(ipcMain: Electron.IpcMain) {
  // 遍历监听
  for (const key in listenEvent) {
    ipcMain.handle(key, listenEvent[key]);
  }
}

export {
  listenEvent,

  initListen,
};
