import { contextBridge, ipcRenderer } from 'electron/renderer'

// only can use typescript type
import type { TestReq, TestRes } from '../main/listen'

const expose = {
  emit: {
    // 在此注册暴露事件
    test(data: TestReq): Promise<TestRes> { return ipcRenderer.invoke('test', data) },
  },

}

contextBridge.exposeInMainWorld('electronAPI', expose)

// todo
export type ipcEvent = typeof expose
