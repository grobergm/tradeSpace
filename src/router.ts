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
    redirect: {name:'profile-items'},
    component: ()=> import("./components/People/Profile.vue"),
    children:[
        {
            path:'items',
            name: 'profile-items',
            component: ()=> import("./components/People/subtabs/Items.vue")
        },
        {
            path:'trades',
            component: ()=> import("./components/People/subtabs/Trades.vue")
        },
        {
            path:'reviews',
            component: ()=> import("./components/People/subtabs/Reviews.vue")
        },

    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;