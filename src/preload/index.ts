import { contextBridge, ipcRenderer } from 'electron/renderer'

// only can use typescript type because electron sanbox
import type { DelReptilesRes, SetReptilesRes, TestReq, TestRes } from '../main/ipc/listen'
import type { Reptiles } from '../main/store/reptile'
import type { NoticRender } from '../main/ipc/dispatch'

type ExposeOnType = {
  [K in keyof NoticRender]: (callback: (data: NoticRender[K]) => void) => void;
}

// --------------
const exposeEmit = {
  // 注册render请求
  getReptiles(): Promise<Reptiles> { return ipcRenderer.invoke('getReptiles', {}) },
  delReptiles(data: DelReptilesRes): Promise<null> { return ipcRenderer.invoke('delReptiles', data) },
  setReptiles(data: SetReptilesRes): Promise<null> { return ipcRenderer.invoke('setReptiles', data) },

  test(data: TestReq): Promise<TestRes> { return ipcRenderer.invoke('test', data) },
}

const exposeOn: ExposeOnType = {
  // 注册render监听
  test(callback) { ipcRenderer.on('test', (_event, value) => callback(value)) },
  test1(callback) { ipcRenderer.on('test1', (_event, value) => callback(value)) },
}

// 最终暴露数据
const expose = { emit: exposeEmit, on: exposeOn }

contextBridge.exposeInMainWorld('electronAPI', expose)

// todo
export type ipcEvent = typeof expose
