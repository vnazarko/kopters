import { defineStore } from 'pinia'

import * as logo from '@/assets/img/intro/logo.svg'

export const useIntroUsingStore = defineStore('intro', {
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
      title: 'Применение наших вентиляторов'
    }
  },
})