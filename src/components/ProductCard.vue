<script>
export default { 
    props: {
        imgUrl: String,
        title: String,
        circulation: String,
        text: String,
    }
}
</script>
<template>
  <div class="product__card">
    <img :src="imgUrl" alt="" class="product__img">
    <h1 class="product__title">{{ title }}</h1>
    <h2 class="product__circulation">Тираж от {{ circulation }} штук</h2>
    <p class="product__text">{{ text }}</p>
    <a href="#" class="product__btn">Подробнее <img src="../assets/img/products/right-arrow.png" alt="" class="product_btn__icon"></a>
  </div>  
</template>
<style lang="scss" scoped>
.product__card {
  width: 255px;
  display: flex;
  flex-direction: column;  
}

.product__title {
  color: #666;
  font-family: Roboto;
  font-size: 30px;
  margin-top: 30px;
}
.product__circulation {
  color: #B5B5BD;
  font-family: Roboto;
  font-size: 14px;  
  margin-top: 8px;
}
.product__text {
  width: 255px;
  color: #85859B;
  font-family: Roboto;
  font-size: 18px; 
  margin-top: 8px;
}
.product__btn {
  color: #7875FE;
  font-family: Roboto;
  font-size: 20px;
  text-decoration: none;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin-left: 6px;
    width: 20px;
  }
  &:hover {
    img {
      animation: 1s forwards hover;
    }
  }
}


@keyframes hover {
  from {
    margin-left: 8px;
  }  
  to {
    margin-left: 40px;
  }
}

</style>