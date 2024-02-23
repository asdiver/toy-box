import { delReptiles, getReptiles, setReptiles } from '../reptile/index'
import type { Reptile } from '../store/reptile'

// 编写事件处理
const listenEvent: ListenEventMap = {
  // Reptiles
  getReptiles(_e: Electron.IpcMainInvokeEvent) {
    return getReptiles()
  },
  delReptiles(_e: Electron.IpcMainInvokeEvent, data: DelReptilesRes) {
    delReptiles(data.key)
  },
  setReptiles(_e: Electron.IpcMainInvokeEvent, data: SetReptilesRes) {
    const { key, reptile } = data
    setReptiles(key, reptile)
  },
  // test
  test(_e: Electron.IpcMainInvokeEvent, data: TestReq) {
    console.log(data)
    return { mes: '你好' }
  },
}

function initListen(ipcMain: Electron.IpcMain) {
  // 遍历监听
  for (const key in listenEvent) ipcMain.handle(key, listenEvent[key])
}

export {
  listenEvent,

  initListen,
}

// code-------------type

interface ListenEventMap {
  [key: string]: (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any
}

export interface TestReq {
  mes: string
}

export interface TestRes {
  mes: string
}

export interface DelReptilesRes {
  key: string
}

export interface SetReptilesRes {
  key: string
  reptile: Reptile
}
