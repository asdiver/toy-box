<script setup>

console.log(window.electronAPI);
window.electronAPI.emit("test", { file: "x" }).then((...arr) => {
  console.log(arr);
});

</script>

<template>
  <div>
    <router-link to="/">
      Go to Home
    </router-link>
    <router-link to="/about">
      Go to About
    </router-link>
    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
