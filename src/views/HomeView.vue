<script setup lang="ts">
import IntroComp from '../components/IntroComp.vue'

import { useIntroStore } from '../stores/intro';
const introStore = useIntroStore();
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <IntroComp :img="introStore.img" 
                 :links="introStore.links"
                 :title="introStore.title"
      />
    </div>
  </div>
</template>
