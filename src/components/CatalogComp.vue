<script lang="ts">
import { RouterLink } from 'vue-router'

interface itemInterface {
    id: number,
    bg: any,
    title: string,
    path: string,
}

export default {
    props: {
        products: Array,
    },
    setup(props) {
        return {
            products: props.products as itemInterface[],
        }
    }
}
</script>
<template>
    <section class="catalog">
        <div class="catalog-container">
            <RouterLink class="catalog-container__item item" v-for="(item, index) in products" :key="index" :style="{ 'background-image': 'url(' + item.bg.default + ')' }" :to="'/catalog/' + item.id" loading="lazy">
                <h2 class="item__title">{{ item.title }}</h2>
                <div class="line"></div>
            </RouterLink>
        </div>
    </section>
</template>
<style scoped lang="sass">
.catalog
    margin-top: 470px
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
    border-radius: 8px
    background-repeat: no-repeat
    background-size: cover
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
        &-container 
            gap: 20px
    .item
        width: 340px
        height: 340px
@media (max-width: 1024px)
    .catalog
        margin-top: 270px
    .item
            width: 100% !important
@media (max-width: 768px) 
    .catalog
        width: 100%
@media (max-width: 430px)
    .catalog
        margin-top: 250px
</style>