/**
 * @description main到render的通知类型定义 见function dispatch
 * @key event name
 * @value event data type
 */
interface NoticRender {
  test: { mes: string }
  notice: { title: string, body: string }
}

let webContents: Electron.WebContents
function setWebContents(content: Electron.WebContents) {
  webContents = content
}

function dispatch<K extends keyof NoticRender>(eventName: K, data: NoticRender[K]) {
  webContents.send(eventName, data)
}

export {
  setWebContents,
  dispatch,
}

export type {
  NoticRender,
}
