import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footer', {
  state: () => {
    return {
      buy: {
        title: 'Купить сейчас',
        subtitle: 'Нужны потолочные вентиляторы? Устали мечтать об идеальной температуре? Наше время пришло. Давайте сделаем эту покупку вместе.'
      },
      footer: [
        {
            title: 'Связаться с нами',
            text: [
                {
                    text: '+7 (111) 111-11 11',
                },
                {
                    text: 'example@mail.ru',
                }
            ]
        },
        {
            title: 'Компания',
            text: [
                {
                    text: '<a class="column__link" href="/catalog">Каталог</a>',
                },
                {
                    text: '<a class="column__link" href="/using">Применение</a>',
                }
            ]
        }
      ]
    }
  },
})
// npm i pinia @pinia/nuxt