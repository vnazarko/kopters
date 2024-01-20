<script setup lang="ts">
import * as logo from '/logo.png'

import IntroComp from '../../components/IntroComp.vue';
import FooterComp from '../../components/FooterComp.vue';
import Preloader from '../../components/Preloader.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

import { useUsingStore } from '../../stores/using/using';
const indystries = useUsingStore();

const id = router.currentRoute.value.params.id;
const industry = indystries.use[Number(id) - 1];

window.scrollTo(0,0)

const introInfo = {
    img: logo,
    links: [
        {
          name: 'Применение',
          path: '/using'
        },
        {
          name: 'Каталог',
          path: '/catalog'
        }
    ],
}

const text = industry.text.split('<br/>')
console.log(text);

</script>
<template>
    <div class="wrapper">
        <div class="container">
            <div class="introIndustry">
                <IntroComp :img="introInfo.img"
                        :links="introInfo.links"
                        :title="industry.titlePage" 
                />
                <section class="industry">
                    <p class="industry__text" v-for="(textPart, index) in text" :key="index" v-html="textPart"></p>
                </section>
                <FooterComp />
            </div>
        </div>
    </div>
    <Preloader />
</template>
<style lang="sass">
.introIndustry 
    .intro__title
        font-size: 50px
        height: 200px
.industry
    margin-top: 400px

.industry__text
    margin-top: 20px
    font-family: Montserrat 
    color: #DAD7CD
    font-size: 20px
    font-style: normal
    font-weight: 500
    line-height: 30px     

@media (max-width: 1200px)
    .introIndustry
        .intro__title
            font-size: 40px
            margin-top: 170px
    .industry
        margin-top: 370px
@media (max-width: 1024px)
    .introIndustry
        .intro__title
            font-size: 30px
            margin-top: 110px
    .industry
        margin-top: 150px
@media (max-width: 768px)
    .introIndustry
        .intro__title
            font-size: 30px
            margin-top: 110px
    .industry
        margin-top: 140px
        &__text
            font-size: 18px
@media (max-width: 430px)
    .introIndustry
        .intro__title
            font-size: 20px
            margin-top: 110px
</style>