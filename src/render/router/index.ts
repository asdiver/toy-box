import * as VueRouter from 'vue-router'
import edit from '@render/views/edit/index.vue'
import reptile from '@render/views/reptile/index.vue'

const routes = [
  { path: '/', component: reptile },
  { path: '/edit', component: edit },
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export {
  routes,
}
