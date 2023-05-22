<template>
  <section class="wrapper" @submit.prevent="sendForm">
        <form action="" class="form"  @submit.prevent="" v-show="!formSend">
            <legend class="form__title">несколько слов о тебе</legend>
            <div class="form__element">
                <label class="form_inputName" for="name">Твое имя:</label>
                <input type="text" class="form__input" name="name" id="name" 
                    v-model="info.name" 
                    @focus.prevent="">
            </div>
    
            <div class="form__element">
                <label class="form_inputName" for="age">Возраст:</label>
                <input type="text" class="form__input" name="age" id="age"
                    v-model="info.age" 
                    @focus.prevent="">
            </div>
    
            <div class="form__element">
                <label class="form_inputName" for="class">Класс:</label>
                <input type="text" class="form__input" name="class" id="class" 
                    v-model="info.whatClass" 
                    @focus.prevent="">
            </div>
    
            <div class="form__element form__element_col">
                <label class="form_inputName" for="forU">Какова ценность этих занятий для тебя?</label>
                <textarea class="form__input form__input_area" rows="2" cols="1" name="forU" id="forU" 
                    v-model="info.lessonsVal" 
                    @focus.prevent="">
                </textarea>
            </div>
    
            <div class="form__element form__element_col">
                <label class="form_inputName" for="knowledge">Какие у тебя ожидания от занятий и какие результаты ты хочешь получить?</label>
                <textarea class="form__input form__input_area" rows="2" cols="1" name="knowledge" id="knowledge" 
                    v-model="info.expectations" 
                    @focus.prevent="">
                </textarea>
            </div>
    
            <div class="form__element form__element_col">
                <label class="form_inputName" for="link">Ссылка на соц. сети/почту, для обратной связи:</label>
                <input type="text" class="form__input" name="link" id="link" 
                    v-model="info.contact" 
                    @focus.prevent="">
            </div>
            <span class="form__req">* Все поля обязательны для заполнения</span>
            <button class="form__submit" @click="emit('changingModal')" ref="btn">Записаться!</button>
        </form>

        <transition>
            <div class="done" v-show="formSend">
                <span class="done__txt">
                    Поздравляю, вы записаны!
                </span>
                <span class="done__txt">
                    Скоро я с вами свяжусь.
                </span>
            </div>
        </transition>
    <button type="submit" class="modal__close" @click="$emit('changeModal')"></button>
  </section>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import axios from 'axios';
import { TOKEN, CHAT_ID, URL } from '../data.js';

defineProps({
    showModal: Boolean,
})

const emit = defineEmits(['changeModal'])
const changingModal = () => {
    emit ('changeModal')
}

// Данные полей

const info = reactive({
  name: '',
  age: '',
  whatClass: '',
  lessonsVal: '',
  expectations: '',
  contact: '',
});

//Валидация
let approved = ref(true);

function validate () {
   let arr = Object.values(info)
   for (let i in arr) {
    if (arr[i] === '') {
        approved = false
    } else {
        approved = true
    }
   }
}

// Отправка
function sendForm(){
    validate()
    if (approved) {

        let message = `<b> Новая заявка! </b>\n\nЗаявку отправил(a) <b>${info.name}</b>. Ему/ей <b>${info.age}</b> лет, учится в <b>${info.whatClass}</b> классе.\n\n<i>Какова ценность этих занятий для тебя?</i> - ${info.lessonsVal}\n\n<i>Какие у тебя ожидания от занятий и какие результаты ты хочешь получить?</i> - ${info.expectations}\n\n<i>Ссылка на соц. сети/почту, для обратной связи:</i> ${info.contact}`
      
        console.log(message);
        
        axios.post(URL, {
          chat_id: CHAT_ID,
          parse_mode: 'HTML',
          text: message,
        })
        
        info.age = ''
        info.name = ''
        info.whatClass = ''
        info.lessonsVal = ''
        info.contact = ''
        info.expectations = ''

        alert('Поздравляю, вы записаны! Скоро я с вами свяжусь!')
    }
}

// Проверка отправки
let formSend = ref(false)

watch ((formSend) => {

}) 

</script>

<style scoped lang="scss">

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.wrapper {
    background-color: rgba(255, 184, 176, 1);
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    position: fixed;
    overflow-y: scroll;
    top: 0;
    z-index: 2;

    .form {
        margin-left: 14px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 230px;
        z-index: 1;

        .form__title {
            font-family: 'Montserrat-Medium';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            margin-bottom: 8px;
        }

        .form__element {
            display: flex;
            gap: 8px;
            justify-content: space-between;
            max-width: 230px;

            &_col {
                flex-direction: column;
            }

            .form_inputName {
                font-family: 'Montserrat-Light';
                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 18px;
            }

            .form__input {
                background-color: transparent;
                border-bottom: 1px solid #000;
                width: 140px;
                font-family: 'Montserrat-Light';

                outline: none;
                text-align: center;
                letter-spacing: 2px;

                &_area {
                    border-top: none;
                    border-right: none;
                    border-left: none;
                    text-align: left;
                    height: 44px;
                    resize: none;
                }
            }
        }

        .form__submit {
            font-family: 'Montserrat-Medium';
            font-weight: 500;
            font-size: 25px;
            line-height: 44px;
            width: 180px;
            cursor: pointer;

            background-color: rgba(201, 201, 201, 0.5);
            border: 2px solid black;
            border-radius: 15px;
            padding: 10px;
        }

        .form__req {
            font-family: 'Montserrat-Italic';
            font-size: 10px;
            line-height: 20px;
        }
    }
    
    .modal__close {
        position: absolute;
        top: 10%;
        right: 10%;
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        background-image: url('../assets/close.svg');
        background-size: cover;
    }

    .done {
        padding-top: 50%;
        position: relative;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgba(255, 184, 176, 1);
        z-index: 2;

        .done__txt {
            max-width: 60%;
            font-family: 'Montserrat-Medium';
            font-weight: 500;
            font-size: 25px;
            line-height: 44px;
        }
    }

    @media screen and (min-width: 600px) { 
        .form__title {
            font-size: 3rem !important;
        }

        .form_inputName {
            font-size: 1.3rem !important;
        }

        .form__req {
            font-size: 0.8rem !important;
        }

        .modal__close {
            height: 60px;
            width: 60px;
        }
    }
}
</style>