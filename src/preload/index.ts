import { contextBridge, ipcRenderer } from "electron/renderer";

contextBridge.exposeInMainWorld("electronAPI", {
  // todo
  emit(event: string, data: any) {
    return ipcRenderer.invoke(event, data);
  },
  // on(event, callBack) {

  // },
});
