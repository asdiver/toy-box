import Crawler from 'crawler'

import { reptileStoreControl } from '../store/index'
import type { Reptile } from '../store/index'

const crawler = new Crawler({
})

function jsonHandle(reptile: Reptile) {
  const { headers, uri, target } = reptile
  return {
    uri,
    jQuery: target === 'html',
    headers,
    // callback可以复用
    callback(error, res, done) {
      if (error) {
        // todo 通知操作系统错误
      }
      else {
        // dom
        // if (res.$) {

        // }else{

        // }
        console.log('你好')

        // const $ = res.$;
        // $ 默认为 Cheerio 解析器
        // 它是核心jQuery的精简实现，可以按照jQuery选择器语法快速提取DOM元素
        // console.log($(".app").html());
        // console.log(res.statusCode);
      }
      done()
    },
  } as Crawler.CrawlerRequestOptions
}
// 数据初始化Map 并执行定时器
// 初始数据
const reptiles = reptileStoreControl.getReptiles()
const reptileMap = new Map<Reptile, NodeJS.Timeout | null>()

function reptileMapSet(target: Reptile) {
  const timeout = target.open ? setInterval(() => { crawler.queue(jsonHandle(target)) }) : null
  reptileMap.set(target, timeout)
}

for (const key in reptiles)
  reptileMapSet(reptiles[key])

/**
 * 获取所有爬虫任务
 */
function getReptiles() {
  return reptiles
}

/**
 * 删除爬虫任务
 * @param key 标识符
 */
function delReptiles(key: string) {
  const del = reptiles[key]
  delete reptiles[key]
  // 删除定时器
  clearInterval(reptileMap.get(del) as NodeJS.Timeout)
  reptileMap.delete(del)

  reptileStoreControl.delReptiles(key)
}
function setReptiles(key: string, target: Reptile) {
  // this file
  reptiles[key] = target
  reptileMapSet(target)
  // store
  reptileStoreControl.setReptiles(key, target)
}
/**
 * 暴力删除和更新 不直接通过修改具体属性
 * @param key 
 * @param target 
 */
function updateReptiles(key: string, target: Reptile) {
  delReptiles(key)
  setReptiles(key, target)
}
// todo渲染端处理请求头字符串
// url 请求头字符串（渲染层转化为对象） 爬虫间隔 是否开启 解析数据为json或者html  通知依据（json为目标属性 html为选择器目标元素）   跳转的目标url
// const arr = cookieStr.split('\n')
// const obj = {}
// for (let i = 0; i < arr.length; i += 2) {
//   const value = arr[i]
//   obj[value.slice(0, value.length - 1)] = arr[i + 1]
// }

// 修改reptile通过 render ipc=> reptile index => electron store
// 爬虫通知 reptile index => os notice & render
export {
  getReptiles,
  delReptiles,
  setReptiles,
  updateReptiles,
}
