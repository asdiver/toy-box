const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("electronAPI", {
  emit(event, data) {
    return ipcRenderer.invoke(event, data);
  },
  on(event, callBack) {

  },
});
