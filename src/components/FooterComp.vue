<script lang="ts">
import BuyComp from "./BuyComp.vue"
import { useFooterStore } from '../stores/home/footer';

interface ColumnInterface {
  title: string;
  text: { text: string }[];
}

export default {
    components: {
        BuyComp
    },
    setup() {
        const store = useFooterStore();

        return {
            title: store.buy.title as string,
            subtitle: store.buy.subtitle as string,
            footer: store.footer as ColumnInterface[]
        }
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
            <div v-for="(column, columnIndex) in footer" :key="columnIndex" class="footer__column">
                <h3 class="column__title">{{ column.title }}</h3>
                <div class="column__text" v-for="(text, textIndex) in column.text" :key="textIndex" v-html="text.text"></div>
              </div>
        </div>
        <hr>
    </footer>
</template>
<style lang="sass">
.footer 
    margin-top: 40px
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
        width: 100% !important
        margin: 0

@media (max-width: 430px) 
    .footer
        margin-top: 400px
    .footer__main
        flex-direction: column
    .column__title
        margin-top: 30px
    .column__text 
        margin-top: 10px
</style>