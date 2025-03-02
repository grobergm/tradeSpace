import { createWebHistory, createRouter } from 'vue-router'

import ProductSearch from './components/Products/ProductSearch.vue'

const routes = [
  {
    path: '/',
    alias: '/products',
    component: ProductSearch
  },
  {
    path: '/people/:userId',
    component: ()=> import("./components/People/Profile.vue") 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;