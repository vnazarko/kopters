<script setup lang="ts">
import HeaderComp from '../../components/HeaderComp.vue';
import ProductComp from '../../components/ProductComp.vue';
import FooterComp from '../../components/FooterComp.vue';
import Preloader from '../../components/Preloader.vue';

import { useHeaderStore } from '../../stores/products/header';
import { useProductsStore } from '../../stores/catalog/products';
import { useFooterStore } from '../../stores/home/footer';

import { useRouter } from 'vue-router';
const router = useRouter();

const headerStore = useHeaderStore();
const products = useProductsStore();
const footerStore = useFooterStore()

const id = router.currentRoute.value.params.id;
const product = products.products[Number(id) - 1].product;

window.scrollTo(0, 0);
</script>
<template>
    <h1 class="seo">большой потолочный вентилятор ВЕРТИКАЛЬ для производства</h1>
    <h1 class="seo">большой потолочный вентилятор</h1>
    <h1 class="seo">большой потолочный вентилятор промышленный</h1>
    <h1 class="seo">большой потолочный вентилятор для животноводства</h1>
    <h1 class="seo">большой потолочный вентилятор для производства</h1>
    <h1 class="seo">большой потолочный вентилятор для козлятников</h1>
    <h1 class="seo">большой потолочный вентилятор для коровников</h1>
    <h1 class="seo">большой потолочный вентилятор для спортзала</h1>
    <h1 class="seo">большой потолочный вентилятор для жилых помещений</h1>
    <h1 class="seo">потолочный вентилятор</h1>
    <h1 class="seo">потолочный вентилятор промышленный</h1>
    <h1 class="seo">потолочный вентилятор для животноводства</h1>
    <h1 class="seo">потолочный вентилятор для производства</h1>
    <h1 class="seo">потолочный вентилятор для козлятников</h1>
    <h1 class="seo">потолочный вентилятор для коровников</h1>
    <h1 class="seo">потолочный вентилятор для спортзала</h1>
    <h1 class="seo">потолочный вентилятор для жилых помещений</h1>
    <h1 class="seo">потолочный большой вентилятор</h1>
    <h1 class="seo">промышленный вентилятор</h1>
    <h1 class="seo">вентиляция</h1>
    <h1 class="seo">система вентиляции</h1>
    <h1 class="seo">вентиляционное оборудование</h1>
    <h1 class="seo">промвентиляция</h1>
    <h1 class="seo">вентилятор вытяжной промышленный</h1>
    <h1 class="seo">вентилятор осевой промышленный</h1>
    <h1 class="seo">промышленный вентилятор купить</h1>
    <h1 class="seo">вентилятор +для вытяжки промышленный</h1>
    <h1 class="seo">вытяжной вентилятор промышленный купить</h1>
    <h1 class="seo">вентилятор осевой вытяжной промышленный</h1>
    <h1 class="seo">промышленные радиальные вентиляторы</h1>
    <h1 class="seo">осевой вентилятор промышленный купить</h1>
    <h1 class="seo">ремонт промышленных вентиляторов</h1>
    <h1 class="seo">вентилятор промышленной вентиляции</h1>
    <h1 class="seo">двигатель вентилятора промышленного</h1>
    <h1 class="seo">вентиляторы охлаждения промышленный</h1>
    <h1 class="seo">вентиляторы потолочные промышленные</h1>
    <h1 class="seo">вентиляторы мощные промышленные</h1>
    <h1 class="seo">промышленный вентилятор 380</h1>
    <h1 class="seo">вентилятор электрический промышленный</h1>
    <h1 class="seo">промышленный вентилятор цена</h1>
    <h1 class="seo">тепловые вентиляторы промышленные</h1>
    <h1 class="seo">вентиляторы воздуха промышленные</h1>
    <h1 class="seo">м промышленный вентилятор</h1>
    <h1 class="seo">большие промышленные вентиляторы</h1>
    <h1 class="seo">вентилятор характеристики промышленных</h1>
    <h1 class="seo">купить вентилятор промышленный +для вытяжки</h1>
    <h1 class="seo">промышленные крышные вентиляторы</h1>
    <h1 class="seo">лопасти вентилятора промышленные</h1>
    <h1 class="seo">промышленные вентиляторы производство</h1>
    <h1 class="seo">промышленные вентиляторы +для помещений</h1>
    <h1 class="seo">промышленные приточно вытяжные вентиляторы</h1>
    <h1 class="seo">работа промышленные вентиляторы</h1>
    <h1 class="seo">промышленные вентиляторы авито</h1>
    <h1 class="seo">промышленные системы вентилятор</h1>
    <h1 class="seo">оборудование промышленные вентиляторы</h1>
    <h1 class="seo">вентилятор промышленный ballu bif 8b</h1>
    <h1 class="seo">установка промышленного вентилятора</h1>
    <h1 class="seo">промышленные вентиляторы спб</h1>
    <h1 class="seo">типы промышленных вентиляторов</h1>
    <h1 class="seo">производители промышленных вентиляторов</h1>
    <h1 class="seo">промышленные вентиляторы россия</h1>
    <h1 class="seo">размеры промышленных вентиляторов</h1>
    <h1 class="seo">вентилятор осевой промышленный 380</h1>
    <h1 class="seo">характеристики промышленных осевых вентиляторов</h1>
    <h1 class="seo">вентилятор промышленный bif 4b</h1>
    <h1 class="seo">электродвигатель промышленного вентилятора</h1>
    <h1 class="seo">подключение промышленного вентилятора</h1>
    <h1 class="seo">промышленные вентиляторы 380в</h1>
    <h1 class="seo">промышленный вентилятор 150</h1>
    <h1 class="seo">вентилятор промышленный воронеж</h1>
    <h1 class="seo">вентилятор промышленный ballu bif 4b</h1>
    <h1 class="seo">вытяжной вентилятор мощный промышленный</h1>
    <h1 class="seo">осевой вентилятор +для вентиляции промышленный</h1>
    <h1 class="seo">промышленные вентиляторы виды</h1>
    <h1 class="seo">вентилятор промышленный вр</h1>
    <h1 class="seo">производительность вентиляторов промышленных</h1>
    <h1 class="seo">промышленные вентиляторы екатеринбург</h1>
    <h1 class="seo">промышленные вентиляторы купить спб</h1>
    <h1 class="seo">воздушные вентиляторы промышленные</h1>
    <h1 class="seo">изготовление промышленных вентиляторов</h1>
    <h1 class="seo">крышный вентилятор +для вытяжки промышленный</h1>
    <h1 class="seo">промышленный вентилятор б +у</h1>
    <h1 class="seo">вентилятор промышленный завод</h1>
    <h1 class="seo">вентиляторы промышленного назначения</h1>
    <h1 class="seo">вентиляторы промышленный бу</h1>
    <h1 class="seo">промышленные вентиляторы москва</h1>
    <h1 class="seo">улитка вентилятор +для вытяжки промышленная</h1>
    <h1 class="seo">вентилятор +для промышленных холодильников</h1>
    <h1 class="seo">вентилятор осевой промышленный +для зерносушилки riello</h1>
    <h1 class="seo">вентилятор промышленный устройство</h1>
    <h1 class="seo">промышленный вентилятор master</h1>
    <h1 class="seo">промышленные вентиляторы новосибирск</h1>
    <h1 class="seo">промышленный вентилятор 100</h1>
    <h1 class="seo">вентилятор промышленный купить авито</h1>
    <h1 class="seo">вентиляторы +для промышленных печей</h1>
    <h1 class="seo">каталог промышленных вентиляторов</h1>
    <h1 class="seo">осевые вентиляторы +для вытяжной вентиляции промышленные</h1>
    <h1 class="seo">потолочный вентилятор промышленный купить</h1>
    <h1 class="seo">промышленные вентиляторы +в самаре</h1>
    <h1 class="seo">промышленные вентиляторы краснодар</h1>
    <h1 class="seo">промышленный калорифер водяной +с вентилятором</h1>
    <h1 class="seo">монтаж промышленных вентиляторов</h1>
    <h1 class="seo">промышленный вентилятор ballu bif 12d нс 1161829</h1>
    <h1 class="seo">промышленный вентилятор балу</h1>
    <h1 class="seo">промышленный вентилятор минск</h1>
    <h1 class="seo">вентилятор +для вытяжки промышленный канальный</h1>
    <h1 class="seo">вентилятор радиальный промышленный купить</h1>
    <h1 class="seo">кухонные вентиляторы промышленные</h1>
    <h1 class="seo">принцип работы промышленного вентилятора</h1>
    <h1 class="seo">вентилятор кондиционера промышленный</h1>
    <h1 class="seo">+как разобрать вентилятор промышленный</h1>
    <h1 class="seo">схема промышленного вентилятора</h1>
    <h1 class="seo">вентилятор осевой промышленный 380 800 ватт</h1>
    <h1 class="seo">вентилятор промышленный аренда</h1>
    <h1 class="seo">вентиляторы промышленные купить бу</h1>
    <h1 class="seo">вентиляторы промышленные технические</h1>
    <h1 class="seo">где купить вентилятор промышленный</h1>
    <h1 class="seo">вентилятор вытяжной промышленный 2.2</h1>
    <h1 class="seo">вентилятор осевой вытяжной промышленный купить</h1>
    <h1 class="seo">вентилятор +от отопления промышленный</h1>
    <h1 class="seo">вентилятор промышленный напольный ballu</h1>
    <h1 class="seo">вентиляторы промышленные ростов +на дону</h1>
    <h1 class="seo">вентиляционные вентиляторы промышленные</h1>
    <h1 class="seo">промышленные вентиляторы иркутск</h1>





    <div class="wrapper">
        <div class="container">
            <HeaderComp :img="headerStore.img"
                        :links="headerStore.links"
            />
            <hr>
            <ProductComp :title="product.title"
                         :img="product.img"
                         :info="product.info"
                         :description="product.description"
            />
            <hr>
            <video controls width="100%" class="video" autoplay muted preload="true">
                <source :src="product.video.default"/>
            </video>
            <div class="footer-cont">
                <FooterComp :title="footerStore.buy.title"
                            :subtitle="footerStore.buy.subtitle"
                            :footer="footerStore.footer"
                />
            </div>
        </div>
    </div>
    <Preloader/>
</template>
<style lang="sass">
hr 
    width: 600px
    margin-top: 20px

video 
    margin-top: 56px

.footer-cont 
    margin-top: -70px
    .buy
        display: none !important
    
@media (max-width: 768px)
    hr
        width: 100%
@media (max-width: 430px)
    .footer-cont 
        margin-top: -350px
</style>