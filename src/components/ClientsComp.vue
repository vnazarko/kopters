<script lang="ts">
export default {
    name: 'ClientsComp',
    props: {
        title: String,
        images: Array
    }
}
</script>
<template>
    <section class="clients">
        <h1 class="title">{{ title }}</h1>
        <div class="img-container">
            <img :src="img.imgPath.default" :alt="img.alt" class="img" v-for="(img, index) in images" :key="index">
        </div>
    </section>
</template>
<style lang="sass" scoped>
.clients
    position: relative

.title
    width: 600px
    margin: 100px auto 40px auto

.img-container 
    width: 100%
    display: flex
    justify-content: space-between

@media (max-width: 1023px) 
    .img
        width: 180px

@media (max-width: 767px) 
    .title
        margin: 100px 420px 40px -80px
    .img-container 
        margin: 0px 420px 0px -60px
@media (max-width: 550px) 
    .img-container
        flex-direction: column
    .img 
        width: 320px
        margin: 20px 120px
@media (max-width: 429px)
    .img-container 
        position: absolute
        rigth: auto
        left: auto
    .title
        width: 100%
        margin: 100px auto 40px auto
    .img
        margin: 20px 40px
</style>