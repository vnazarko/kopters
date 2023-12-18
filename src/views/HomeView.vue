<script setup lang="ts">
import IntroComp from '../components/IntroComp.vue'
import ProduceComp from '../components/ProduceComp.vue'
import ClientsComp from '../components/ClientsComp.vue'

import { useIntroStore } from '../stores/intro';
import { useProduceStore } from '../stores/produce';
import { useClientsStore } from '../stores/clients';

const introStore = useIntroStore();
const produceStore = useProduceStore();
const clientsStore = useClientsStore();
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
    </div>
  </div>
</template>
