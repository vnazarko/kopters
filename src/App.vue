<script>
import Header from "./components/Header.vue"
import ResultCard from './components/ResultCard.vue'
import ProductCard from "./components/ProductCard.vue"
export default {
  components: {
    Header,
    ResultCard,
    ProductCard,
  },

  data() {
    return {
      dataForResult: [
        {
          imgUrl: "/src/assets/img/result/first.png",
          title: "V.1",
        },
        {
          imgUrl: "/src/assets/img/result/second.png",
          title: "V.2",
        },
        {
          imgUrl: "/src/assets/img/result/third.png",
          title: "V.3",
        }
      ],
      dataForProduct: [
        {
          imgUrl: "/src/assets/img/products/1st.png",
          title: "Упаковка",
          circulation: "50",
          text: "Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.",
        },
        {
          imgUrl: "/src/assets/img/products/2nd.png",
          title: "Пакеты",
          circulation: "200",
          text: "С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.",
        },
        {
          imgUrl: "/src/assets/img/products/3rd.png",
          title: "Кейсы",
          circulation: "30",
          text: "Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.",
        },
        {
          imgUrl: "/src/assets/img/products/4th.png",
          title: "Другие изделия",
          circulation: "100",
          text: "Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.",
        }
      ],
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <Header/>

    <section class="intro">
      <div class="container">
        <div class="intro__text-block">
          <h1 class="intro__title">Простые вещи. Из бумаги</h1>
          <p class="intro__text">Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками. </p>
          <a href="#" class="intro__btn">Каталог</a>
        </div>
        <img src="../src/assets/img/intro/bg.png" alt="" class="intro__bg">
      </div>
    </section>

    <section class="result">
      <div class="container">
        <div class="result__cards">
          <ul class="list-cards">
            <li class="result_cards__item" v-for="(data, index) in dataForResult" :key="index">
              <ResultCard :imgUrl="data.imgUrl" :title="data.title"/>
            </li>
          </ul>
        </div>
        <div class="result__main">
          <img src="../src/assets/img/result/main.png" alt="" class="result_main__img">
          <div class="result__text-block">
            <h1 class="result__title">Максимальная белизна</h1>
            <p class="result__text">Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением. <br><br>
              <span>Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.</span></p>
          </div>
        </div>
      </div>
    </section>

    <section class="product">
      <div class="container">
        <ul class="product__list">
          <li class="product_list__item" v-for="(info, index) in dataForProduct" :key="index">
            <ProductCard :imgUrl="info.imgUrl" :title="info.title" :circulation="info.circulation" :text="info.text"/>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.intro {
  max-width: 100%;
  padding-top: 65px;
  .container {
    display: flex;
    justify-content: space-between;
  }
}

.intro__text-block {
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .intro__title {
    font-family: Roboto;
    font-size: 50px;
    color: #4C5866;
  }
  .intro__text {
    font-size: 18px;
    font-family: Roboto;
    color: #85859B;
    margin-top: 30px;
  }
  .intro__btn {
    font-size: 20px;
    font-family: Roboto;
    color: #7875FE;
    border: 1px solid #7875FE;
    text-decoration: none;
    margin-top: 30px;
    width: 255px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    &:hover {
      background-color: #7875FE;
      color: #fff;
      transition: all .3s;
    }
  }
}

@media (max-width: 1199px) {
  .intro__bg {
    content: url("./assets/img/intro/bg610.png");
  }
}
@media (max-width: 767px) {
  .intro__bg {
    display: none;
  }
}

// result

.result {
  padding: 90px 0px;
  background: #EBEBEB;
}
.result__cards {
  max-width: 100%;
}

.list-cards {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.result_cards__item {
  list-style-type: none;
}

.result__main {
  width: 100%;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.result__text-block {
  width: 350px;
  height: 445px;
  display: flex;
  flex-direction: column;
}
.result__title {
  color: #666;
  font-family: Roboto;
  font-size: 40px;
  margin-bottom: 30px;
}
.result__text {
  font-family: Roboto;
  font-size: 18px;
  color: #85859B;
}

@media (max-width: 1199px) {
  .result__main {
    position: relative;
    top: 40px;
    align-items: flex-start;
  }

  .result_main__img {
    width: 330px;
    height: 256px;
  }

  .intro__text {
    line-height: 170% !important;
  }
}

@media (max-width: 767px) {
  .result__main {
    flex-direction: column;
  }
  .result__text-block {
    width: 100%;
  }
}

// products

.product {
  padding: 90px 0px;
}

.product__list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.product_list__item {
  list-style-type: none;
}
</style>
