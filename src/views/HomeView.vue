<script setup lang="ts">
import IntroComp from '../components/IntroComp.vue'
import ProduceComp from '../components/ProduceComp.vue'

import { useIntroStore } from '../stores/intro';
import { useProduceStore } from '../stores/produce';

const introStore = useIntroStore();
const produceStore = useProduceStore();
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <IntroComp :img="introStore.img" 
                 :links="introStore.links"
                 :title="introStore.title"
      />
      <ProduceComp :title="produceStore.title"
                   :images="produceStore.images" 
      />
    </div>
  </div>
</template>
