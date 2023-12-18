import { defineStore } from 'pinia'

import * as first from '../assets/img/clients/first.png';
import * as second from '../assets/img/clients/second.png';
import * as third from '../assets/img/clients/third.png';

export const useClientsStore = defineStore('clients', {
  state: () => {
    return {
        title: 'Наши клиеты вдохновляют нас.',
        images: [
            { 
                imgPath: first,
                alt: 'Черкизово'
            },
            { 
                imgPath: second, 
                alt: 'Мираторг'
            },
            { 
                imgPath: third,
                alt: 'Лукман'
            },
        ]
    }
  },
})
// npm i pinia @pinia/nuxt