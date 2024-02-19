import * as VueRouter from 'vue-router'
import a from '@render/components/HelloWorld.vue'

const routes = [
  // { path: '/', component: a },
  // { path: '/about', component: b },
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
