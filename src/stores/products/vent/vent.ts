import { defineStore } from 'pinia'
import * as img1 from '@/assets/img/product/vent/swiper/1.jpg';
import * as img2 from '@/assets/img/product/vent/swiper/2.jpg';
import * as img3 from '@/assets/img/product/vent/swiper/3.jpg';
import * as img4 from '@/assets/img/product/vent/swiper/4.jpg';
import * as img5 from '@/assets/img/product/vent/swiper/5.jpg';
import * as img6 from '@/assets/img/product/vent/swiper/6.jpg';
import * as img7 from '@/assets/img/product/vent/swiper/7.jpg';
import * as img8 from '@/assets/img/product/vent/swiper/8.jpg';
import * as video from '@/assets/img/product/vent/swiper/video.mp4'

export const useVentStore = defineStore('vent', {
  state: () => {
    return {
      title: 'Потолочный вентилятор',
      img: [ { imgIndex: img1, index: 1 }, { imgIndex: img2, index: 2 }, { imgIndex: img3, index: 3 }, { imgIndex: img4, index: 4 }, {imgIndex: img5, index: 5 }, { imgIndex: img6, index: 6 }, { imgIndex: img7, index: 7 }, { imgIndex: img8, index: 8 } ],
      info: [
        {
            title: 'Рабочее напряжение',
            text: '380В'
        },
        {
            title: 'Можность',
            text: '1100Вт'
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
      ],
      description: 'Большие потолочные вентиляторы создают оптимальные условия в производственных помещениях, складах и сельскохозяйственных объектах. Они равномерно распределяют тепло, исключают застойные зоны воздуха и предотвращают скопление влаги, что обеспечивает чистый и комфортный микроклимат. Эти вентиляторы гарантируют одинаковые условия для животных от пола до потолка, уменьшая стресс и обеспечивая стабильность при любых погодных условиях и давлении. Их бесшумная работа с уровнем шума ниже 50 дБ и специально разработанные лопасти гарантируют эффективное перемешивание воздуха в помещении.',
      video: video
    }
  },
})
// npm i pinia @pinia/nuxt