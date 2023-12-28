<script lang="ts">
import BuyComp from "./BuyComp.vue"

export default {
    props: {
        title: String,
        subtitle: String,
        footer: Array
    },
    components: {
        BuyComp
    }
}
</script>
<template>
    <footer class="footer">
        <hr>
        <BuyComp :title="title"
                 :subtitle="subtitle"
        />
        <div class="footer__main">
            <div class="footer__column" v-for="(column, index) in footer" :key="index">
                <h3 class="column__title">{{ column.title }}</h3>
                <div class="column__text" v-for="text in column.text" :key="text.id" v-html="text.text"></div>
            </div>
        </div>
        <hr>
    </footer>
</template>
<style lang="sass">
.footer 
    margin-top: 120px
    padding-bottom: 50px

hr 
    width: 600px
    margin: 0 auto

.footer__main
    width: 100%
    display: flex
    justify-content: space-between
    margin-top: 55px
    margin-bottom: 76px

.column__title 
    color: #FFF
    text-align: center
    font-family: Montserrat
    font-size: 24px
    font-style: normal
    font-weight: 700
    line-height: normal
    margin-bottom: 20px

.column__text
    color: #FFF
    text-align: center
    font-family: Montserrat
    font-size: 20px
    font-style: normal
    font-weight: 500
    line-height: normal
    text-align: left
    .column__link
        text-decoration: none
        color: #fff


@media (max-width: 1200px) 
    hr
        width: 100% 
        margin: 0
</style>