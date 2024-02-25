<script scoped lang="ts">
import { ref } from 'vue'
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

import { sendMessage } from '../sendMessage/sendTgMessage';

interface sliderInterface {
    imgIndex: any;
    index: number;
}
interface itemInterface {
    title: string,
    text: string
}

export default {
    components: {
        Swiper, SwiperSlide
    },
    props: {
        title: String,
        img: Array,
        info: Array,
        description: String,
    },
    setup(props) {
        let modalInputName = ref('');
        let modalInputPhone = ref('+7');

        let activeTab = ref('tab1');

        const setActiveTab = () => {
            activeTab.value = activeTab.value === 'tab1' ? 'tab2' : 'tab1';
        };

        // const recipient = 'alg.vnazarenko@gmail.com';
        // const subject = 'Коптеры';

        // function sendEmail() {
        //     const data = {
        //         to: recipient,
        //         subject: subject,
        //         text: `${modalInputName.value} оставил заявку \n ${modalInputPhone.value}`
        //     };

        //     axios.post('http://127.0.4.70:58804/send-email', data)
        //         .then(response => {
        //             console.log(response.data); 
        //         })
        //         .catch(error => {
        //             console.error('Ошибка:', error);
        //         });
        // }

        function toggleModal(id: string) {
            let modal = document.getElementById(id);
            if (modal) {
                modal.classList.toggle('active');
            } else {
                return false
            }
        }
        function validatationModal() {
            let infoElem = document.getElementById('modalInfo');
            let errorText = 'Ой! Вы неверно указали данные';
            let sucsessText = 'Отправлено! Ожидайте звонка'
            if (infoElem) {
                if (modalInputName.value.length == 0 || modalInputPhone.value.length == 0) {
                    infoElem.textContent = errorText
                } else {
                    infoElem.textContent = sucsessText;
                    
                    const date = new Date();
                    const textMessage = `${date.getDate()}.${date.getMonth() + 1}, ${date.getHours()}:${date.getMinutes()} \n ${modalInputName.value} оставил заявку на коптер \n Телефон: ${modalInputPhone.value}`;
                    sendMessage(textMessage);
                    // sendEmail();
    
                    const modalCont = document.getElementById('buyModalContainer')
                    if (modalCont) {
                        modalCont.classList.remove('active');
                    } else {
                        return false
                    }
                }
            } else {
                return false
            }
            
        }

        return { modalInputName, modalInputPhone, activeTab, setActiveTab, toggleModal, validatationModal, info: props.info as itemInterface[] , img: props.img as sliderInterface[], modules: [Pagination, Autoplay, Navigation] };
    }
}
</script>
<template>
    <section class="product">
        <h1 class="title">{{ title }}</h1>
        <main class="product__main">
            <div class="product__col">
                <Swiper :modules="modules" :slides-per-view="1" space-between="20" :loop="true" :speed="1000" :pagination="{ clickable: true }" navigation :autoplay="{ delay: 2000 }">
                    <SwiperSlide :src="imgIndex.default" v-for="{imgIndex, index} in img" :key="index"><img :src="imgIndex.default" class="product__img" loading="lazy"></SwiperSlide>
                </Swiper>
            </div>
            <div class="product__col">
                <h2 class="col__title"><span @click="setActiveTab" :class="{ 'active' : activeTab === 'tab1' }" >Характеристики</span> | <span @click="setActiveTab" :class="{ 'active' : activeTab === 'tab2' }" >Описание</span></h2>
                <div class="col__info" v-for="(item, index) in info" :key="index" v-show="activeTab == 'tab1' ">
                    <p class="info__title">{{ item.title }}</p>
                    <p class="info__text">{{ item.text }}</p>
                </div>
                <div class="col__info" v-show="activeTab === 'tab2' ">
                    <p class="col__description" v-html="description"></p>
                </div>
                <button class="col__btn" @click="toggleModal('buyModalContainer')">Оставить заявку</button>
            </div>
        </main>
        <div id="buyModalContainer">
            <div id="buyModal">
                <div class="close-modal" @click="toggleModal('buyModalContainer')"><span class="material-symbols-outlined">close</span></div>
                <div class="modal-content">
                    <h2 class="modal__title">Оставьте заявку</h2>
                    <h3 class="modal__subtitle">Для этого вам нужно оставить номер телефона и имя</h3>
                    <form class="modal__form">
                        <input type="text" class="modal__input" v-model="modalInputName" placeholder="Имя">
                        <input type="tel" class="modal__input" v-model="modalInputPhone" maxlength="12" placeholder="Телефон">
                        <p class="modal__error" id="modalInfo"></p>
                        <button type="button" class="modal__btn" @click="validatationModal">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="sass" scoped>
.product 
    margin-bottom: 58px
.title
    font-size: 32px
    margin-top: 56px

.product__main
    width: 100%
    display: flex
    justify-content: space-between
    margin-top: 64px

.product__col
    width: 490px

.product__img
    width: 100%
    height: 503px
    object-fit: cover
    border-radius: 8px
    
.col__title
    color: #FFF
    font-family: Unbounded
    font-size: 25px
    font-style: normal
    font-weight: 700
    line-height: normal
    text-align: center
    margin-bottom: 36px
    display: flex
    justify-content: space-between
    align-items: center
    span 
        opacity: .7
        cursor: pointer
        width: 100%
        font-size: 20px
        &:hover 
            opacity: 1
        &:first-child
            text-align: left
        &:last-child
            text-align: right
    .active 
        opacity: 1
        cursor: auto

.col__info
    width: 100%
    display: flex
    justify-content: space-between
    border-top: 1px solid #DAD7CD
    border-bottom: 1px solid #DAD7CD
    padding: 19px 0

.info__title, .info__text
    color: #FFF
    font-family: Montserrat
    font-size: 20px
    font-style: normal
    font-weight: 500
    line-height: normal

.info__text
    font-weight: 700

.col__description 
    color: #DAD7CD 
    font-size: 19px
    font-family: Montserrat 
    font-weight: 500
    height: 345px

.col__btn 
    color: #000
    text-align: center
    font-family: Montserrat
    font-size: 18px
    font-style: normal
    font-weight: 700
    line-height: normal
    opacity: .7
    width: 100%
    padding: 10px 0
    margin-top: 8px
    border-radius: 8px
    transition: .3s
    cursor: pointer
    border: none
    &:hover
        opacity: 1
        transition: all 0.3s 
    &:first-child
        background: #DAD7CD

#buyModalContainer
    display: none
    width: 100vw
    height: 100vh
    background-color: rgba(0, 0, 0, 0.4)
    position: fixed
    top: 0
    left: 0
    z-index: 9999

#buyModal 
    width: 600px
    background: #DAD7CD
    position: fixed
    top: 50%
    left: 50%
    padding: 20px 20px 68px 20px
    transform: translate(-50%, -50%)
    border-radius: 40px

.material-symbols-outlined
    font-size: 48px
    width: 100%
    display: flex
    justify-content: flex-end
    opacity: .4
    transition: .3s
    cursor: pointer
    &:hover 
        opacity: 1
        transition: all .3s

.active 
    display: block !important

.modal-content 
    width: 58%
    margin: 0 auto

.modal__title 
    font-family: Unbounded
    color: #588157
    text-align: center

.modal__subtitle
    font-family: Unbounded
    color: #588157
    text-align: center
    font-size: 16px
    margin-top: 20px
    width: 100%

.modal__form
    width: 100%
    display: flex
    flex-direction: column
    margin-top: 30px

.modal__input
    margin-top: 10px
    background: none
    border: 2px solid #588157
    padding: 15px
    border-radius: 15px
    font-size: 16px
    font-family: Unbounded
    &::placeholder
        font-size: 16px
        font-family: Unbounded

.modal__error 
    font-family: Unbounded
    margin-top: 15px
    margin-bottom: 20px

.modal__btn
    background: #588157
    border: none
    padding: 15px
    border-radius: 15px
    color: #DAD7CD
    font-family: Unbounded
    font-size: 16px 
    cursor: pointer
    &:focus 
        box-shadow: 0px 5px 10px 2px rgba(88, 129, 87, 0.2) inset


@media (max-width: 1200px)
    .product__col
        width: 330px
@media (max-width: 768px)
    .col__description
        height: auto
    .product__main
        flex-direction: column
    .product__col
        width: 100%
        &:last-child
            margin-top: 20px
    #buyModal
        width: calc( 100% - 30px )
    .modal-content
        width: 350px

@media (max-width: 430px)
    .modal-content
        width: 300px
    .col__title
        span 
            font-size: 16px !important
</style>