<script lang="ts">
export default {
    props: {
        img: Object,
        links: Array,
    }
}
</script>
<template>
    <header class="header">
        <img :src="img.default" class="logo">

        <nav class="nav">
            <ul class="nav__list">
                <li class="list__item" v-for="(link, index) in links" :key="index">
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style lang="sass" scoped>
.header 
    width: 100%
    display: flex
    justify-content: space-between

.nav__list
    height: 100%
    display: flex
    justify-content: center
    gap: 50px
    align-items: center

.list__item 
    list-style-type: none
    a 
        text-decoration: none
        color: #fff
        font-family: Unbounded
        font-size: 20px 
        font-style: normal
        font-weight: 600
        line-height: normal
        opacity: .7
        transition: all .3s
        &:hover
            opacity: 1
            transition: all .3s

@media (max-width: 1024px) 
    .nav__list 
        gap: 30px
    a
        font-size: 18px !important
    .logo
        width: 90px

@media (max-width: 429px)
    .nav__list
        margin-top: 5px
        flex-direction: column
        align-items: flex-end
        gap: 20px
</style>