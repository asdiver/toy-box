import type {mainEvent} from "../preload/index"



declare global {
  interface Window {
    electronAPI:{
      emit: mainEvent
    }
  }
}