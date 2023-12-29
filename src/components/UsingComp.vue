<script lang="ts">
interface itemInterface {
    bg: any,
    title: string
}

export default {
    props: {
        use: Array,
    },
    setup(props) {
        return { use: props.use as itemInterface[] };
    }
}
</script>
<template>
    <section class="using">
        <div class="using-container">
            <div class="using-container__item item" v-for="(item, index) in use" :key="index" :style="{ 'background-image': 'url(' + item.bg.default + ')' }">
                <h1 class="item__title">{{ item.title }}</h1>
                <div class="line"></div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="sass">
.using
    margin-top: 450px
.using-container
    width: 100%
    display: flex
    justify-content: center
    gap: 40px
    flex-wrap: wrap

.item 
    width: calc(50% - 40px)
    height: 490px
    padding: 30px
    display: flex
    align-items: flex-start
    flex-direction: column
    justify-content: flex-end
    &__title
        color: #FFF
        font-family: Unbounded
        font-size: 24px
        font-style: normal
        font-weight: 700
        line-height: normal
    .line 
        width: 73.5px
        height: 5px
        flex-shrink: 0
        background: #4F8058
        margin-top: 15px
        transition: all .3s
    &:hover
        .line 
            width: 200px
            transition: all .3s
@media (max-width: 1200px)
    .using
        margin-top: 470px
@media (max-width: 1024px)
    .using
        margin-top: 250px
@media (max-width: 768px) 
    .using
        margin-top: 250px
    .item
        width: 100%
@media (max-width: 430px)
    .using
        margin-top: 250px
</style>