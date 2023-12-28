import { defineStore } from 'pinia'

import * as first from '@/assets/img/product/vent/swiper/1.jpg'

export const useVentStore = defineStore('vent', {
  state: () => {
    return {
      title: 'Потолочный вентилятор',
      img: first,
      info: [
        {
            title: 'Рабочее напряжение',
            text: '380В'
        },
        {
            title: 'Можность',
            text: '3000Вт'
        },
        {
            title: 'Число фаз',
            text: '3'
        },
        {
            title: 'Длина лопасти',
            text: '2000мм'
        },
        {
            title: 'Ширина лопасти',
            text: '150мм'
        },
        {
            title: 'Масса',
            text: '17кг'
        },
      ]
    }
  },
})
// npm i pinia @pinia/nuxt