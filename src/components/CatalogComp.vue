<script lang="ts">
import * as kopter from '../assets/img/product/vent/swiper/1.jpg'

export default {
    data() {
        return {
            products: [
            {
                bg: kopter,
                title: 'Потолочные вентиляторы',
                path: '/vent'
            },
          ]
        }
    },
}
</script>
<template>
    <section class="catalog">
        <div class="catalog-container">
            <a class="catalog-container__item item" v-for="(item, index) in products" :key="index" :style="{ 'background-image': 'url(' + item.bg.default + ')' }" :href="item.path">
                <h1 class="item__title">{{ item.title }}</h1>
                <div class="line"></div>
            </a>
        </div>
    </section>
</template>
<style scoped lang="sass">
.catalog
    margin-top: 450px
.catalog-container
    width: 100%
    display: flex
    justify-content: flex-start
    gap: 40px
    flex-wrap: wrap

.item 
    width: 490px
    height: 490px
    padding: 30px
    display: flex
    align-items: flex-start
    flex-direction: column
    justify-content: flex-end
    background-position: center
    text-decoration: none
    &__title
        color: #FFF
        font-family: Unbounded
        font-size: 24px
        font-style: normal
        font-weight: 700
        line-height: normal
        text-decoration: none
    .line 
        width: 73.5px
        height: 5px
        flex-shrink: 0
        background: #4F8058
        margin-top: 15px
        transition: all .3s
    &:hover
        .line 
            width: 200px
            transition: all .3s
@media (max-width: 1200px)
    .catalog
        margin-top: 470px
@media (max-width: 1024px)
    .catalog
        margin-top: 250px
@media (max-width: 768px) 
    .catalog
        margin-top: 250px
    .catalog
        width: 100%
@media (max-width: 430px)
    .catalog
        margin-top: 250px
</style>