<script lang="ts">


interface itemInterface {
    id: number;
    bg: any;
    title: string;
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
        <h2 class="using__text">
            Обеспечьте комфорт в вашем пространстве с нашими промышленными потолочными вентиляторами <b>ВЕРТИКАЛЬ</b>. Идеальное решение для эффективного распределения воздуха. Создайте приятную атмосферу с нашими потолочными вентиляторами.
        </h2>
        <div class="using-container">
            <RouterLink :to="'/using/' + item.id" class="using-container__item item" v-for="(item, index) in use" :key="index" :style="{ 'background-image': 'url(' + item.bg.default + ')' }" loading="lazy">
                <h2 class="item__title">{{ item.title }}</h2>
                <div class="line"></div>
            </RouterLink>
        </div>
    </section>
</template>
<style scoped lang="sass">
.using
    margin-top: 330px
    &__text
        font-size: 19px
        width: 700px
        font-family: Montserrat
        color: #fff
        text-align: center
        margin: 0 auto 40px auto
        line-height: 1.3
        font-weight: 500
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
    text-decoration: none
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
        margin-top: 400px
@media (max-width: 1024px)
    .using
        margin-top: 250px
@media (max-width: 768px) 
    .using
        margin-top: 200px
        &__text
            width: 100%
            font-size: 17px
    .item
        width: 100%
@media (max-width: 430px)
    .using
        margin-top: 200px
</style>