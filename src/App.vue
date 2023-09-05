<script>
import Header from "./components/Header.vue"
export default {
  components: {
    Header,
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
</style>
