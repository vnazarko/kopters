import { defineStore } from 'pinia'

import * as small from '../assets/img/produce/small.png'
import * as big from '../assets/img/produce/big.png'

export const useProduceStore = defineStore('produce', {
  state: () => {
    return {
        title: 'Изюминка производства',
        images: [
            { img: small },
            { img: big },
            { img: big },
            { img: small },
        ]
    }
  },
})