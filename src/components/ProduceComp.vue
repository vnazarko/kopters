<script lang="ts">
export default {
    name: 'ProduceComp',
    props: {
        title: String,
    }
}
</script>
<template>
    <section class="produce">
        <h1 class="title">{{ title }}</h1>
        <div class="img-container">
            <div class="column">
                <img src="../assets/img/produce/small.png" class="img">
                <img src="../assets/img/produce/big.png" class="img">
            </div>
            <div class="column">
                <img src="../assets/img/produce/big.png" class="img">
                <img src="../assets/img/produce/small.png" class="img">
            </div>
        </div>
    </section>
</template>
<style lang="sass" scoped>
.title
    margin-top: 400px

.img-container
    display: flex
    flex-direction: row 
    justify-content: center
    gap: 20px
    margin-top: 60px

.img:first-child
    margin-bottom: 20px

@media (max-width: 1200px)
    .img 
        width: 350px

@media (max-width: 1023px)
    .title 
        margin-top: 250px

@media (max-width: 767px)
    .img 
        width: 250px  

@media (max-width: 550px)
    .img-container 
        flex-direction: column
    .img 
        width: 100%
</style>