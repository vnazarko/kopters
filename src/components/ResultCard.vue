<script>
export default {
    props: {
        imgUrl: String,
        title: String,
    }
}
</script>
<template>
  <div class="result__card">
    <img :src="imgUrl" alt="" class="result_card__img">
    <div class="result_card__text-block">
      <h2 class="result_card__num">{{ title }}</h2>
      <p class="result_card__text">Результат вашего обучения</p>  
    </div>
  </div>  
</template>
<style scoped>
.result__card {
  width: 350px;
  height: 118px;
  padding-top: 19px;
  border-top: 1px solid #c0c0c0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.result_card__text-block {
  width: 160px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
}
.result_card__num {
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  color: #666;
  margin-bottom: 14px;
}
.result_card__text {
  color: #85859B;
  font-family: Roboto;
  font-size: 18px;
}

@media (max-width: 1199px) {
  .result__card {
    width: 160px;
    display: flex;
    flex-direction: column !important;
  }  
}
</style>