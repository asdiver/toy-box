const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("electronAPI", {
  emit(event, ...args) {
    // TODO 这里是否安全 为什么不安全
    // if (event != "???") {

    // }
    return ipcRenderer.invoke(event, ...args);
  },

});
