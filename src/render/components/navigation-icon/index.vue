<script lang="ts" setup>
import { computed, reactive, ref, watchEffect } from 'vue'

const props = defineProps<{
  // 元素相关参数
  value: {
    size: number
    name: string
    iconClass: string
  }
  // 元素所属下标
  index: number
  // 当前选择下标
  chooseIndex: number
}>()
const iconTarget = reactive([props.value.iconClass])

const show = ref(false)
/**
 * 选中控制
 * @param choose 鼠标是否在盒子上
 */
function switchChoose(choose: boolean) {
  if (props.chooseIndex === props.index)
    return
  show.value = choose
}

watchEffect(() => {
  show.value = props.chooseIndex === props.index
})

// 选中样式
const showNameStyle = computed(() => {
  return { fontSize: show.value ? '16px' : '0px' }
})

const iconStyle = computed(() => {
  return {
    width: `${props.value.size}px`,
    // height: `${props.value.size}px`,
    backgroundColor: show.value ? '#e9e9feaa' : 'transparent',
    // color: show.value ? 'white' : '#000000',
  }
})
</script>

<template>
  <div class="icon" :style="iconStyle" @mouseenter="switchChoose(true)" @mouseleave="switchChoose(false)">
    <i class="iconfont icon-iconfont " :class="iconTarget" />
    <div class="icon-name" :style="showNameStyle">
      {{ value.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0.3rem;
  &-iconfont{
    font-size: 40px;
  }
  &-name{
    // background-color: #e9e9feaa;
    transition: font-size 0.3s;
    padding: 5px 0;
  }
}
</style>
