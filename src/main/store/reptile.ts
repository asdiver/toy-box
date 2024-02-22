import type ElectronStore from 'electron-store'

export interface Reptile {
  /**
   * 目标地址
   */
  uri: string
  /**
   * 请求头对象
   */
  headers: any
  /**
   * 请求间隔
   */
  interval: number
  /**
   * 是否开启
   */
  open: boolean
  /**
   * 返回的数据类型
   */
  target: 'json' | 'html'
  /**
   * 更新依据 json=> .a.b.c | html=> #selecter
   */
  noticeBy: string
  /**
   * 跳转url
   */
  link: string
  /**
   * 通过noticeBy获取的最新内容
   */
  lastValue: string
}

export interface Reptiles {
  [key: string]: Reptile
}

export function reptileStore(store: ElectronStore) {
  return {
    getReptiles() {
      return store.get('reptiles') as Reptiles || {}
    },

    /**
     *
     * @param key reptiles下的属性名作为key
     * @param reptile 修改后的reptile对象
     */
    setReptiles(key: string, reptile: Reptile) {
      store.set(`reptiles.${key}`, reptile)
    },

    /**
     *
     * @param key reptiles下的属性名作为key
     */
    delReptiles(key: string) {
      store.delete(`reptiles.${key}`)
    },
  }
}
