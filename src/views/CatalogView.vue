<script lang="ts" setup>
import IntroComp from '../components/IntroComp.vue';
import CatalogComp from '../components/CatalogComp.vue';
import FooterComp from '../components/FooterComp.vue';

import { useIntroCatalogStore } from '../stores/catalog/introCatalogPage';
import { useProductsStore } from '../stores/catalog/products';
import { useFooterStore } from '../stores/home/footer';

const introStore = useIntroCatalogStore();
const productsStore = useProductsStore();
const footerStore = useFooterStore();

</script>
<template>
    <div class="warpper">
        <div class="container">
            <IntroComp :img="introStore.img" 
                       :links="introStore.links"
                       :title="introStore.title"
            />
            <CatalogComp :use="productsStore.products"
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