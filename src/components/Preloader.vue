<script lang="ts" setup>
import { onMounted } from 'vue';
onMounted(()=> {

    const preloader = document.querySelector('.preloader-container');
        
    if (preloader) {
        preloader.classList.add('loader');
        setTimeout(() => {
            preloader.classList.remove('loader')
        }, 1000)
    }
})

</script>
<template>
    <div class="preloader-container">
        <div class="preloader">
            <img src="/img/intro/logo.svg" alt="Загрузка" class="preloader__icon">
        </div>
    </div>
</template>
<style lang="sass" scoped>
.preloader 
    width: 100vw
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    background: #3A5A40
    overflow: hidden
    transition: .3s
    &__icon
        animation: spin 1.5s ease-in infinite reverse

.preloader-container
    height: 0
    transition: .8s
    position: fixed
    top: 0
    left: 0
    transition: .3s
    overflow: hidden
    z-index: 9999

.loader 
    height: 100vh
    transition: .8s

@keyframes spin
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(360deg)
</style>