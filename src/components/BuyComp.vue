<script lang="ts">
import { ref } from 'vue'

import { sendMessage } from '../sendMessage/sendTgMessage';
import axios from 'axios';

export default {
    props: {
        title: String,
        subtitle: String,
    },
    setup() {
        let modalInputName = ref('');
        let modalInputPhone = ref('+7');

        const recipient = 'alg.vnazarenko@gmail.com';
        const subject = 'Коптеры';

        function sendEmail() {
            const data = {
                to: recipient,
                subject: subject,
                text: `${modalInputName.value} оставил заявку \n ${modalInputPhone.value}`
            };

            axios.post('http://localhost:5183/send-email', data)
                .then(response => {
                    console.log(response.data); 
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                });
        }

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
                    const textMessage = `${date.getDate()}.${date.getMonth()}, ${date.getHours()}:${date.getMinutes()} \n ${modalInputName.value} оставил заявку на коптер \n Телефон: ${modalInputPhone.value}`;
                    // sendMessage(textMessage);
                    sendEmail();
    
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

        return { modalInputName, modalInputPhone, sendEmail, toggleModal, validatationModal }
    }
}
</script>
<template>
    <section class="buy">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
        <div class="buy__buttons">
            <button class="btn" @click="toggleModal('buyModalContainer')">Покупка</button>
        </div>
        <div id="buyModalContainer">
            <div id="buyModal">
                <div class="close-modal" @click="toggleModal('buyModalContainer')"><span class="material-symbols-outlined">close</span></div>
                <div class="modal-content">
                    <h1 class="modal__title">Оставьте заявку</h1>
                    <h2 class="modal__subtitle">Для этого вам нужно оставить свой номер телефона и свое имя</h2>
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
    cursor: pointer
    transition: all 0.3s 
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

@media (max-width: 768px)
    .subtitle
        font-size: 22px
        width: 100%
        line-height: 23px
    #buyModal
        width: calc( 100% - 30px )
    .modal-content
        width: 350px

@media (max-width: 430px)
    .modal-content
        width: 300px
</style>