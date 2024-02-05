import type { ipcEvent } from '../preload/index'

declare global {
  interface Window {
    electronAPI: ipcEvent
  }
}
