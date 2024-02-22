import Store from 'electron-store'
import { reptileStore } from './reptile'

const store = new Store()
const reptileStoreControl = reptileStore(store)
// interface Storage {
//   // 爬虫数据
//   reptiles: {
//     [key: string]: Reptile
//   }
// }

export {
  // Reptile
  reptileStoreControl,
}
export type * from './reptile';
