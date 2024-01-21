import { defineStore } from 'pinia'
import * as img1 from '/img/product/vent/swiper/1.jpg';
import * as img2 from '/img/product/vent/swiper/2.jpg';
import * as img3 from '/img/product/vent/swiper/3.jpg';
import * as img4 from '/img/product/vent/swiper/4.jpg';
import * as img5 from '/img/product/vent/swiper/5.jpg';
import * as img6 from '/img/product/vent/swiper/6.jpg';
import * as img7 from '/img/product/vent/swiper/7.jpg';
import * as img8 from '/img/product/vent/swiper/8.jpg';
import * as video from '/img/product/vent/swiper/video.mp4'

export const useVentStore = defineStore('vent', {
  state: () => {
    return {
      title: 'Потолочный вентилятор',
      img: [ { imgIndex: img1, index: 1 }, { imgIndex: img2, index: 2 }, { imgIndex: img3, index: 3 }, { imgIndex: img4, index: 4 }, {imgIndex: img5, index: 5 }, { imgIndex: img6, index: 6 }, { imgIndex: img7, index: 7 }, { imgIndex: img8, index: 8 } ],
      info: [
        {
            title: 'Рабочее напряжение',
            text: '50Гц - 380В'
        },
        {
            title: 'Можность',
            text: '1100Вт'
        },
        {
            title: 'Кол-во об.',
            text: '85 об/мин'
        },
        {
            title: 'Диаметр лопастей',
            text: '4700мм'
        },
        {
            title: 'Шум',
            text: '< 60dB'
        },
        {
            title: 'Масса',
            text: '54кг'
        },
      ],
      description: 'Большие потолочные вентиляторы <b>ВЕРТИКАЛЬ</b> создают оптимальные условия в производственных помещениях, складах и сельскохозяйственных объектах. Они равномерно распределяют тепло, исключают застойные зоны воздуха и предотвращают скопление влаги, что обеспечивает чистый и комфортный микроклимат.',
      video: video
    }
  },
})
// npm i pinia @pinia/nuxt