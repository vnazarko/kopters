<script lang="ts" setup>
import IntroComp from '../components/IntroComp.vue';
import CatalogComp from '../components/CatalogComp.vue';
import FooterComp from '../components/FooterComp.vue';

import { useIntroCatalogStore } from '../stores/catalog/introCatalogPage';
import { useProductsStore } from '../stores/catalog/products';

const introStore = useIntroCatalogStore();
const productsStore = useProductsStore();

</script>
<template>
    <div class="warpper">
        <div class="container">
            <IntroComp :img="introStore.img" 
                       :links="introStore.links"
                       title="Каталог"
            />
            <CatalogComp :use="productsStore.products"
            />
            <FooterComp />
        </div>
    </div>
</template>
<style scoped lang="sass">
@media (max-width: 430px) 
    .footer
        margin-top: 94px
</style>