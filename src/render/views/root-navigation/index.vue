<script lang="ts" setup>
import navigationIcon from '@render/components/navigation-icon/index.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from '@render/router/index'

const menuList = reactive([
  {
    size: 95,
    name: '爬虫管理',
    iconClass: 'icon-pachong1',
  },
  {
    size: 95,
    name: '设置',
    iconClass: 'icon-shezhi',
  },

])

const router = useRouter()

const selectIndex = ref(0)
/**
 * 鼠标点击列表元素
 * @param index 目标元素下标
 */
function switchIndex(index: number) {
  selectIndex.value = index
  router.push(routes[index])
}
</script>

<template>
  <div class="navigation">
    <navigationIcon
      v-for="(item, index) in menuList"
      :key="index"
      :choose-index="selectIndex"
      :value="{ size: item.size, name: item.name, iconClass: item.iconClass }"
      :index="index"
      @click="switchIndex(index)"
    />
  </div>
</template>

<style lang="scss" scoped>
.navigation{
  width: 110px;
  background-color: #f4f4f4;
  height: 100vh;

  overflow-y: auto;

  &::-webkit-scrollbar{
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc; // 滑块颜色
    border-radius: 5px; // 滑块圆角
  }
}
</style>
