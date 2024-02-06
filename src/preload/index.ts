import { contextBridge, ipcRenderer } from 'electron/renderer'

// only can use typescript type because electron sanbox
import type { TestReq, TestRes } from '../main/listen'
import type { NoticRender } from '../main/dispatch'

type ExposeOnType = {
  [K in keyof NoticRender]: (callback: (data: NoticRender[K]) => void) => void;
}

// --------------
const exposeEmit = {
  // 注册render请求
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
