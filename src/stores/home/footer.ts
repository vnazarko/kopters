import { defineStore } from 'pinia';

export const useFooterStore = defineStore('footer', {
  state: () => ({
    buy: {
      title: 'Купить сейчас',
      subtitle:
        'Нужны потолочные вентиляторы? Устали мечтать об идеальной температуре? Наше время пришло. Давайте потолочные вентиляторы <b>ВЕРТИКАЛЬ</b> помогут вам.',
    },
    footer: [
      {
        title: 'Связаться с нами',
        text: [
          {
            text: '8(8652)92-93-26',
          },
          {
            text: 'ООО "ВЕРТИКАЛЬ"',
          },
        ],
      },
      {
        title: 'Компания',
        text: [
          {
            text: '<a class="column__link" href="/catalog">Каталог</a>',
          },
          {
            text: '<a class="column__link" href="/using">Применение</a>',
          },
        ],
      },
    ],
  }),
});



