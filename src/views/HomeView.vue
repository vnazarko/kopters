<script setup lang="ts">
import IntroComp from '../components/IntroComp.vue'
import ProduceComp from '../components/ProduceComp.vue'
import ClientsComp from '../components/ClientsComp.vue'
import FooterComp from '../components/FooterComp.vue'

import { useIntroStore } from '@/stores/home/introHomePage';
import { useProduceStore } from '@/stores/home/produce';
import { useClientsStore } from '@/stores/home/clients';
import { useFooterStore } from '@/stores/home/footer';

const introStore = useIntroStore();
const produceStore = useProduceStore();
const clientsStore = useClientsStore();
const footerStore = useFooterStore();
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <IntroComp :img="introStore.img" 
                 :links="introStore.links"
                 :title="introStore.title"
      />
      <ProduceComp :title="produceStore.title" />
      <ClientsComp :title="clientsStore.title"
                   :images="clientsStore.images" 
      />
      <FooterComp :title="footerStore.buy.title"
                  :subtitle="footerStore.buy.subtitle"
                  :footer="footerStore.footer"
      />
    </div>
  </div>
</template>
../stores/introHomePage