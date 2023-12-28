<script scoped lang="ts">
import { ref } from 'vue'
import { mask } from 'vue-the-mask';

import { sendMessage } from '@/tg/sendMessage';

export default {
    props: {
        title: String,
        img: Object,
        info: Array
    },
    directives: {
        mask
    },
    setup() {
        let modalInputName = ref('');
        let modalInputPhone = ref('');;

        function toggleModal(id) {
            let modal = document.getElementById(id);
            modal.classList.toggle('active');
        }
        function validatationModal() {
            let infoElem = document.getElementById('modalInfo');
            let errorText = 'Ой! Вы неверно указали данные';
            let sucsessText = 'Отправлено! Ожидайте звонка'

            if (modalInputName.value.length == 0 || modalInputPhone.value.length == 0) {
                infoElem.textContent = errorText
            } else {
                infoElem.textContent = sucsessText;
                
                const date = new Date();
                const textMessage = `${date.getDate()}.${date.getMonth()}, ${date.getHours()}:${date.getMinutes()} \n ${modalInputName.value} оставил заявку на коптер \n Телефон: ${modalInputPhone.value}`;
                sendMessage(textMessage);

                document.getElementById('buyModalContainer').classList.remove('active');
            }
            
        }

        return { modalInputName, modalInputPhone, toggleModal, validatationModal }
    }
}
</script>
<template>
    <section class="product">
        <h1 class="title">{{ title }}</h1>
        <main class="product__main">
            <div class="product__col">
                <img :src="img.default" class="product__img">
            </div>
            <div class="product__col">
                <h1 class="col__title">Характеристики</h1>
                <div class="col__info" v-for="(item, index) in info" :key="index">
                    <p class="info__title">{{ item.title }}</p>
                    <p class="info__text">{{ item.text }}</p>
                </div>
                <button class="col__btn" @click="toggleModal('buyModalContainer')">Оставить заявку</button>
            </div>
        </main>
        <div id="buyModalContainer">
            <div id="buyModal">
                <div class="close-modal" @click="toggleModal('buyModalContainer')"><span class="material-symbols-outlined">close</span></div>
                <div class="modal-content">
                    <h1 class="modal__title">Оставьте заявку</h1>
                    <h2 class="modal__subtitle">Для этого вам нужно оставить свой номер телефона и свое имя</h2>
                    <form class="modal__form">
                        <input type="text" class="modal__input" v-model="modalInputName" placeholder="Имя">
                        <input type="tel" class="modal__input" v-model="modalInputPhone" v-mask="'+7 (###) ###-##-##'" placeholder="Телефон">
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
    font-size: 20px
    font-style: normal
    font-weight: 700
    line-height: normal
    text-align: center
    margin-bottom: 36px

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
    margin-top: 13px
    border-radius: 8px
    transition: .3s
    cursor: pointer
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
</style>