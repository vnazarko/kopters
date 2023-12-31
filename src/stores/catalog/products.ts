import { defineStore } from 'pinia'

import * as kopter from '@/assets/img/products/kopter.png'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: [
        {
            bg: kopter,
            title: 'Потолочные вентиляторы',
            path: '/catalog/vent'
        },
      ]
    }
  },
})
// npm i pinia @pinia/nuxt