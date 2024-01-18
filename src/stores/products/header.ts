import { defineStore } from 'pinia'

import * as logo from '@/assets/img/intro/logo.svg'

export const useHeaderStore = defineStore('header', {
  state: () => {
    return {
        img: logo,
        links: [
          {
            name: 'Применение',
            path: '/using'
          },
          {
            name: 'Каталог',
            path: '/catalog'
          }
        ],
    }
  },
})

// npm i pinia @pinia/nuxt