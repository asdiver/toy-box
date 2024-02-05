// 存放事件处理
const listenEvent: ListenEventMap = {
  test(_e: Electron.IpcMainInvokeEvent, data: TestReq) {
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

// code-------------type

interface ListenEventMap {
  [key: string]: (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any;
}

export interface TestReq {
  mes: string;
}

export interface TestRes {
  mes: string;
}
