<script lang="ts" setup>
import rootNavigationVue from '@render/views/root-navigation/index.vue'

// const x = {
//   mes: 'yes',
// }
// window.electronAPI.emit.test(x)

// window.electronAPI.on.test((data) => {
//   console.log(data)
// })
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
