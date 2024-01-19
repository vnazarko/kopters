import { defineStore } from 'pinia'

import * as farm from '@/assets/img/using/farm.png'
import * as produce from '@/assets/img/using/produce.png'
import * as sport from '@/assets/img/using/sport.png'
import * as shop from '@/assets/img/using/shop.png'

export const useUsingStore = defineStore('using', {
  state: () => {
    return {
      use: [
        {
            bg: farm,
            title: 'Сельское хозяйство'
        },
        {
            bg: produce,
            title: 'Производство'
        },
        {
            bg: sport,
            title: 'Спорт. предприятия'
        },
        {
            bg: shop,
            title: 'Торговые предприятия'
        },
      ]
    }
  },
})
// npm i pinia @pinia/nuxt