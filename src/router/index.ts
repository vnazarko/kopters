import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import UsingView from '../views/UsingView.vue'
import IndustryView from '../views/using/IndustryView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductView from '../views/products/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/using',
      name: 'using',
      component: UsingView
    },
    {
      path: '/using/:id',
      component: IndustryView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView
    },
    {
      path: '/catalog/vent',
      name: 'vent',
      component: ProductView
    }
  ]
})

export default router
