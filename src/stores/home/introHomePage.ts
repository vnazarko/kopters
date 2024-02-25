import { defineStore } from 'pinia'

import * as logo from '/img/intro/logo.svg'

export const useIntroStore = defineStore('intro', {
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
      title: 'Ветер перемен с нашим охлаждением.'
    }
  },
})
// npm i pinia @pinia/nuxt