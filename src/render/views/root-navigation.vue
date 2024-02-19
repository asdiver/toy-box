<script lang="ts" setup>
import navigationIcon from '@render/components/navigation-icon/index.vue'
import { reactive, ref } from 'vue'

// todo 滚动样式处理
const menuList = reactive([
  {
    size: 110,
    name: '爬虫管理',
    iconClass: 'icon-pachong',
  },
  {
    size: 110,
    name: '爬虫管理',
    iconClass: 'icon-pachong',
  },
  {
    size: 110,
    name: '爬虫管理',
    iconClass: 'icon-pachong',
  },
  {
    size: 110,
    name: '爬虫管理',
    iconClass: 'icon-pachong',
  },
  {
    size: 110,
    name: '爬虫管理',
    iconClass: 'icon-pachong',
  },
  {
    size: 110,
    name: '爬虫管理',
    iconClass: 'icon-pachong',
  },

])

const selectIndex = ref(0)
/**
 * 鼠标点击列表元素
 * @param index 目标元素下标
 */
function switchIndex(index: number) {
  selectIndex.value = index
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
}
</style>
