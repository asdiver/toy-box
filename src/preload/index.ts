import { contextBridge, ipcRenderer } from "electron/renderer";

// only can use typescript type
import type { TestReq, TestRes } from "../main/listen";

let currentFunctionName = "";

/**
 * 拿到当前执行函数名currentFunctionName
 * @param data 事件传递的数据类型
 */
function baseCall(data: any) {
  return ipcRenderer.invoke(currentFunctionName, data);
}

const expose = {
  // 在此注册暴露事件
  test(data: TestReq): Promise<TestRes> { return baseCall(data); },

};

contextBridge.exposeInMainWorld("electronAPI", new Proxy(expose, {
  get(target, key: string, receiver) {
    // 返回目标对象的属性值
    currentFunctionName = key;
    return Reflect.get(target, key, receiver);
  },

  set() {
    // 防止设置属性
    throw new Error("unable to set electronAPI");
  },
}));

// todo
export type mainEvent = typeof expose;
