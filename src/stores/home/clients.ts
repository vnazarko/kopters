import { defineStore } from 'pinia'

import * as first from '@/assets/img/clients/mirn.png';
import * as third from '@/assets/img/clients/third.png';

export const useClientsStore = defineStore('clients', {
  state: () => {
    return {
        title: 'Наши клиеты вдохновляют нас.',
        images: [
            { 
                link: 'https://beloe-zoloto.com/',
                imgPath: first,
                alt: 'Агрохолдинг "Мирный"'
            },
            {   
                link: 'https://xn----8sbmaegpajbahrqg8d.xn--p1ai/',
                imgPath: third,
                alt: 'Лукман'
            },
        ]
    }
  },
})
// npm i pinia @pinia/nuxt