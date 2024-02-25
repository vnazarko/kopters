<script lang="ts">
interface imgInterface {
    imgPath: any,
    alt: string
    link: string
}

export default {
    name: 'ClientsComp',
    props: {
        title: String,
        images: Array
    },
    setup(props) {
        return {
            images: props.images as imgInterface[],
        }
    }
}
</script>
<template>
    <section class="clients">
        <h1 class="title">{{ title }}</h1>
        <div class="img-container">
            <a :href="img.link" class="img-link" v-for="(img, index) in images" :key="index" target="_blank">
                <img :src="img.imgPath.default" :alt="img.alt" class="img" loading="lazy">
            </a>
        </div>
    </section>
</template>
<style lang="sass" scoped>
.clients
    position: relative

.title
    width: 600px
    margin: 100px auto 40px auto

.img 
    width: 227px
    height: 115px
    object-fit: contain

.img-container 
    width: 100%
    display: flex
    justify-content: space-around
@media (max-width: 1023px) 
    .img
        width: 180px

@media (max-width: 767px) 
    .title
        margin: 100px 420px 40px -80px
        
@media (max-width: 550px) 
    .img-container
        flex-direction: column
        justify-content: center
        align-items: center
    .img 
        width: 320px
        margin: 20px 120px
@media (max-width: 429px)
    .img-container 
        position: absolute
        right: auto
        left: auto
    .title
        width: 100%
        margin: 100px auto 40px auto
    .img
        margin: 20px 40px
</style>