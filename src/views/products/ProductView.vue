<script setup lang="ts">
import HeaderComp from '../../components/HeaderComp.vue';
import ProductComp from '../../components/ProductComp.vue';
import FooterComp from '../../components/FooterComp.vue';

import { useHeaderStore } from '../../stores/products/header';
import { useVentStore } from '../../stores/products/vent/vent';
import { useFooterStore } from '../../stores/home/footer';

const headerStore = useHeaderStore();
const vent = useVentStore();
const footerStore = useFooterStore()

</script>
<template>
    <div class="wrapper">
        <div class="container">
            <HeaderComp :img="headerStore.img"
                        :links="headerStore.links"
            />
            <hr>
            <ProductComp :title="vent.title"
                         :img="vent.img"
                         :info="vent.info"
                         :description="vent.description"
            />
            <hr>
            <video controls width="100%" class="video" autoplay muted preload="true">
                <source :src="vent.video.default"/>
            </video>
            <div class="footer-cont">
                <FooterComp :title="footerStore.buy.title"
                            :subtitle="footerStore.buy.subtitle"
                            :footer="footerStore.footer"
                />
            </div>
        </div>
    </div>
</template>
<style lang="sass">
hr 
    width: 600px
    margin-top: 20px

video 
    margin-top: 56px

.footer-cont 
    .buy
        display: none !important
    
@media (max-width: 768px)
    hr
        width: 100%
</style>