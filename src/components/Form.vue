<template>
  <section class="wrapper" @submit.prevent="sendForm">
    <transition>
        
        <form action="" class="form"  @submit.prevent="" v-if="!formSend">
            <legend class="form__title">несколько слов о тебе</legend>
            <div class="form__element">
                <label class="form_inputName" for="name">Твое имя:</label>
                <input type="text" class="form__input form__input_normal" name="name" id="name" 
                    v-model="info.name" 
                    @focus.prevent="">
            </div>
    
            <div class="form__element">
                <label class="form_inputName" for="age">Возраст:</label>
                <input type="text" class="form__input form__input_normal" name="age" id="age"
                    v-model="info.age"  
                    @focus.prevent="">
            </div>
    
            <div class="form__element">
                <label class="form_inputName" for="class">Класс:</label>
                <input type="text" class="form__input form__input_normal" name="class" id="class" 
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
                <input type="text" class="form__input form__input_normal" name="link" id="link" 
                    v-model="info.contact"  
                    @focus.prevent="">
            </div>
            <span class="form__req">* Все поля обязательны для заполнения</span>
            <button class="form__submit" @click="emit('changingModal')" ref="btn" :disabled="!approved">Записаться!</button>
        </form>

        <div class="done" v-else>
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
import { ref, reactive } from 'vue';
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
let approved = false;

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

//Очистка
function clear () {
    for (let key in info) {
        info[key] = ''
    }
}

// Отправка
let formSend = ref(false);

function sendForm() {
    validate()
    if (approved) {

        let message = `<b> Новая заявка! </b>\n\nЗаявку отправил(a) <b>${info.name}</b>. Ему/ей <b>${info.age}</b> лет, учится в <b>${info.whatClass}</b> классе.\n\n<i>Какова ценность этих занятий для тебя?</i> - ${info.lessonsVal}\n\n<i>Какие у тебя ожидания от занятий и какие результаты ты хочешь получить?</i> - ${info.expectations}\n\n<i>Ссылка на соц. сети/почту, для обратной связи:</i> ${info.contact}`
        
        axios.post(URL, {
          chat_id: CHAT_ID,
          parse_mode: 'HTML',
          text: message,
        })
        clear ()
        formSend = true
    }
}
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
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

        @media screen and (min-width: 1200px) {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-template-areas: 
            'title title'
            'normal normal'
            'area area';
            align-items: center;
        }


        .form__title {
            font-family: 'Montserrat-Medium';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            margin-bottom: 8px;
            grid-area: title;

            @media screen {
                @media  (min-width: 600px) {
                    font-size: 42px;
                }
                @media (min-width: 1200px) {
                    font-size: 60px;
                    min-width: 700px;
                } 
            } 
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

                @media screen {
                    @media (min-width: 600px) {
                        font-size: 22px;
                    }
                    @media (min-width: 1200px) {
                        font-size: 26px;
                        line-height: 30px;
                    }
                } 
            }

            .form__input {
                background-color: transparent;
                border-bottom: 1px solid #000;
                border-radius: 0px;
                width: 140px;
                font-family: 'Montserrat-Light';

                outline: none;
                text-align: center;
                letter-spacing: 2px;

                @media screen and (min-width: 1200px) {
                    width: 250px;
                }

                &_area {
                    border-top: none;
                    border-right: none;
                    border-left: none;
                    text-align: left;
                    height: 44px;
                    resize: none;
                    grid-area: area;
                }

                &_normal {
                    grid-area: normal;
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

            
            border: 2px solid black;
            border-radius: 15px;
            padding: 10px;

            &:disabled {
                background-color: rgba(201, 201, 201, 0.5);
            }

            &:enabled {
                background-color: rgba(142, 250, 91, 0.5);
            }
        }

        .form__req {
            font-family: 'Montserrat-Italic';
            font-size: 10px;
            line-height: 20px;

            @media screen and (min-width: 600px) {
                font-size: 0.8rem;
            }
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

        @media screen and (min-width: 600px) {
            height: 60px;
            width: 60px;
        }
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


        .done__txt {
            max-width: 60%;
            font-family: 'Montserrat-Medium';
            font-weight: 500;
            font-size: 25px;
            line-height: 44px;
        }
    }
}
</style>