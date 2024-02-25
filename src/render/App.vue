<script lang="ts" setup>
import rootNavigationVue from '@render/views/root-navigation/index.vue'

window.electronAPI.emit.getReptiles().then((x) => {
  console.log(x)
})

// window.electronAPI.emit.setReptiles({ key: '测试', reptile: {
//   /**
//    * 目标地址
//    */
//   uri: 'https://www.baidu.com/',
//   /**
//    * 请求头对象
//    */
//   headers: {},
//   /**
//    * 请求间隔
//    */
//   interval: 1000,
//   /**
//    * 是否开启
//    */
//   open: true,
//   /**
//    * 返回的数据类型
//    */
//   target: 'json',
//   /**
//    * 更新依据 json=> .a.b.c | html=> #selecter
//    */
//   noticeBy: 'string',
//   /**
//    * 跳转url
//    */
//   link: 'string',
//   /**
//    * 通过noticeBy获取的最新内容
//    */
//   lastValue: 'string',
// } })

// window.electronAPI.on.test((data) => {
//   console.log(data)
// })

window.electronAPI.on.notice((data) => {
  const { title } = data
  console.log(title)
})
</script>

<template>
  <div class="root">
    <rootNavigationVue />
    <div class="root-router">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root{
  width: 100vw;
  height: 100vh;

  display: flex;

  &-router{
    flex-grow: 1;
    padding: 7px;
  }

}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
