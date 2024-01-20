import { defineStore } from 'pinia'

import * as first from '/img/produce/first.jpg'
import * as second from '/img/produce/second.jpg'

export const useProduceStore = defineStore('produce', {
  state: () => {
    return {
        title: 'Изюминка производства',
        images: [
            { img: first },
            { img: second },
            { img: first },
            { img: second },
        ]
    }
  },
})