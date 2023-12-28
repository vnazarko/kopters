<script setup lang="ts">
import IntroComp from '../components/IntroComp.vue';
import UsingComp from '../components/UsingComp.vue';
import FooterComp from '../components/FooterComp.vue';

import { useIntroUsingStore } from '../stores/using/introUsingPage';
import { useUsingStore } from '../stores/using/using';
import { useFooterStore } from '../stores/home/footer';

const introStore = useIntroUsingStore();
const usingStore = useUsingStore();
const footerStore = useFooterStore();
</script>
<template>
    <div class="wrapper">
        <div class="container">
            <IntroComp :img="introStore.img" 
                       :links="introStore.links"
                       :title="introStore.title"
            />
            <UsingComp :use="usingStore.use"
            />
            <FooterComp :title="footerStore.buy.title"
                        :subtitle="footerStore.buy.subtitle"
                        :footer="footerStore.footer"
            />
        </div>
    </div>
</template>
<style scoped lang="sass">
@media (max-width: 430px) 
    .footer
        margin-top: 94px
</style>