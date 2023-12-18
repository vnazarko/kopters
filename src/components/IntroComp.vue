<script lang="ts">
import HeaderComp from './HeaderComp.vue'

export default {
    name: 'IntroComp',
    components: {
        HeaderComp,
    }, 
    props: {
        img: Object,
        links: Array,
        title: String,
    }
}
</script>
<template>
    <section class="intro">
        <HeaderComp :img="img" :links="links"/>
        <h1 class="intro__title">{{ title }}</h1>
    </section>
</template>
<style lang="sass" scoped>

.intro::before 
    height: 800px
    content: ""
    position: absolute
    top: -10px
    left: -10px
    right: -10px
    bottom: 0
    background-image: url('../assets/img/intro/bg.png')
    background-size: 100%
    filter: blur(5px)
    z-index: -1

.intro__title
    color: #DAD7CD
    text-align: center
    font-family: Unbounded
    font-size: 69px
    font-style: normal
    font-weight: 700
    line-height: normal
    margin-top: 180px

@media (max-width: 1023px) 
    .intro__title
        font-size: 48px
@media (max-width: 1023px) 
    .intro__title
        font-size: 29px
        margin-top: 140px
    .intro::before 
        background-size: cover
        background-repeat: no-repeat
        height: 500px
</style>