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
                <div class="img-cont">
                    <img src="../assets/img/produce/first.jpg" class="img small">
                    <div class="img-cont__info">Собственное производство</div>
                </div>
                <div class="img-cont">
                    <img src="../assets/img/produce/second.jpg" style="margin-top: 20px" class="img big">
                    <div class="img-cont__info">Надежная автоматика</div>
                </div>
            </div>
            <div class="column">
                <div class="img-cont">
                    <img src="../assets/img/produce/second.jpg" class="img big">
                    <div class="img-cont__info">Высокое качество продукции</div>
                </div>
                <div class="img-cont">
                    <img src="../assets/img/produce/first.jpg" style="margin-top: 20px" class="img small">
                    <div class="img-cont__info">Порошковая окраска</div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="sass" scoped>
.title
    margin-top: 450px
.img-container
    display: flex
    flex-direction: row 
    justify-content: center
    gap: 20px
    margin-top: 60px

.img-cont
    position: relative
    &__info
        position: absolute
        bottom: 0px
        left: 0px
        padding: 20px
        font-family: Unbounded
        font-size: 20px
        background-color: rgba(0, 0, 0, .6)
        width: 100%
        color: #fff
        border-bottom-left-radius: 40px 
        border-bottom-right-radius: 40px 
        height: 0px
        opacity: 0
        transition: .3s
    &:hover 
        .img-cont__info 
            height: 60px 
            opacity: 1
            transition: all .3s

.small, .big 
    width: 472px
    object-fit: cover
    border-radius: 40px
    opacity: .6
.big 
    height: 600px
.small
    height: 300px


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