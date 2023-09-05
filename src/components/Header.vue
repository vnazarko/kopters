<script></script>
<template>
  <header class="header">
    <div class="container">
      <img src="../assets/img/header/logo.svg" alt="simple" class="header__logo">
      <nav class="header__nav">
        <ul class="nav__list">
          <li class="list__item"><a href="#" class="nav__link">Продукция</a></li>  
          <li class="list__item"><a href="#" class="nav__link">Материалы</a></li>  
          <li class="list__item"><a href="#" class="nav__link">О нас</a></li>  
          <li class="list__item"><a href="#" class="nav__link">Контакты</a></li>  
          <li class="list__item"><a href="#" class="nav__link  link__img"><img src="../assets/img/header/Search.svg" alt="Поиск" class="nav_link__icon"></a></li>  
          <li class="list__item"><a href="#" class="nav__link  link__img"><img src="../assets/img/header/log_in.svg" alt="Войти" class="nav_link__icon"></a></li>  
        </ul>  
      </nav>
    </div>
  </header>
</template>
<style scoped lang="scss">
  .header {
    border-bottom: 1px solid #ddd;
    padding: 28px 0px;
    .container {
      display: flex;
      justify-content: space-between;
    }
  }  
  .header__nav {
    max-width: 674px;
    .nav__list {
      width: 674px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .list__item {
        list-style-type: none;
        .nav__link {
          font-family: Roboto;
          font-size: 20px;
          color: #4C5866;
          text-decoration: none;
          transition: .3s;
          &:hover {
            font-size: 22px;
            transition: all .3s;
          }
        }
      }
    }
  }

@media (max-width: 1199px) {
  .header__logo {
    display: none;
  }
  .link__img {
    display: none;
  }
  .header__nav {
    width: 690px;
  }
  .nav__list {
    width: 690px;
  }
}

@media (max-width: 767px) {
  .header__nav {
    width: 510px;
  }
  .nav__list {
    width: 510px;
  }
  .nav__link {
    font-size: 18px !important;
  }
}
</style>