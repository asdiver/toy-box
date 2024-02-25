import { Notification } from 'electron'
import type { BrowserWindow } from 'electron'
import { dispatch } from '../../ipc/dispatch'

let win: BrowserWindow

function noticeGetWin(data: BrowserWindow) {
  win = data
  console.log(win)
  // 应用获得聚焦后关闭闪烁
  win.on('focus', () => win.flashFrame(false))
}

function notice(title: string, body: string) {
  new Notification({
    title,
    body,
  }).show()
  // 通知render
  dispatch('notice', { title, body })

  win.flashFrame(true)
}

export {
  noticeGetWin,
  notice,
}
