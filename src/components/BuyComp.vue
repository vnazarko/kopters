<script lang="ts">
import { mask } from 'vue-the-mask';
import { ref } from 'vue'

import { sendMessage } from '@/tg/sendMessage';

export default {
    props: {
        title: String,
        subtitle: String,
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
            console.log(modalInputName.value);
        }
        function validatationModal() {
            if (modalInputName.value.length == 0 || modalInputPhone.value.length == 0) {
                console.log('Error');
            } else {
                console.log(modalInputName.value, modalInputPhone.value);
                
            }
            
        }
        const chatId = '847428051';
        const textMessage = 'Привет, пупсик';
        sendMessage(chatId, textMessage);

        return { modalInputName, modalInputPhone, toggleModal, validatationModal }
    }
}
</script>
<template>
    <section class="buy">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
        <div class="buy__buttons">
            <button class="btn" @click="toggleModal('buyModalContainer')">Покупка</button>
            <button class="btn">Контакты</button>
        </div>
        <div id="buyModalContainer">
            <div id="buyModal">
                <div class="close-modal" @click="toggleModal('buyModalContainer')"><span class="material-symbols-outlined">close</span></div>
                <div class="modal-content">
                    <h1 class="modal__title">Оставьте заявку</h1>
                    <h2 class="modal__subtitle">Для этого вам нужно оставить свой номер телефона и свое имя</h2>
                    <form class="modal__form">
                        <input type="text" class="modal__input" v-model="modalInputName">
                        <input type="tel" class="modal__input" v-model="modalInputPhone" v-mask="'+7 (###) ###-##-##'" >
                        <button type="button" class="modal__btn" @click="validatationModal">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="sass" scoped>

.title 
    margin-top: 60px

.subtitle
    margin: 40px auto
    width: 650px
    text-align: center
    color: #DAD7CD
    text-align: center
    font-size: 24px
    font-style: normal
    font-weight: 500
    line-height: 30px
    
.buy__buttons 
    display: flex
    justify-content: center
    gap: 55px

.btn 
    padding: 10px 20px
    border: none
    border-radius: 8px
    font-size: 24px
    font-weight: 700
    opacity: .7
    transition: all 0.3s 
    &:hover
        opacity: 1
        transition: all 0.3s 
    &:first-child
        background: #DAD7CD
    &:last-child
        background: #588157
        color: #fff

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
    height: 700px
    background: #DAD7CD
    position: fixed
    top: 50%
    left: 50%
    padding: 20px
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
</style>