import { defineStore } from 'pinia'

import * as logo from '/img/intro/logo.svg'

export const useIntroCatalogStore = defineStore('intro', {
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
      title: 'Каталог'
    }
  },
})