<template>
<section class="reg">
    <h1 class="reg__title">для тебя если</h1>
    <span class="reg__info">ты переходишь в 11 класс</span>
    <span class="reg__info">хочешь сдать на высокие баллы</span>
    <span class="reg__info">ищешь команду единомышленников</span>
    <span class="reg__info">хочешь заниматься в удовольствие</span>
    <div class="reg__toForm">
        <div class="reg__lizaAndGirld"></div>
        <div class="reg__btnContainer">
            <button class="reg__btn" @click="$emit('changeModal')">Запись</button>
            <img src="../assets/register/purpInk.svg" alt="" class="reg__round">
        </div>
    </div>
</section>
</template>

<script setup>
defineProps({
    showModal: Boolean,
})

const emit = defineEmits(['changeModal'])
const changingModal = () => {
    emit ('changeModal')
}
</script>

<style scoped lang="scss">
.reg {
    position: relative;
    width: 100%;
    background-color: #6195D5;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1200px) {
        padding-right: 100px;
    }

    
    .reg__title {
        font-family: 'Montserrat-Italic';
        font-weight: 400;
        font-size: 36px;
        line-height: 44px;
        color: #E5E5E5;
        margin-bottom: 28px;

        @media screen {
            @media (min-width: 600px) {
                font-size: 60px;
                margin-bottom: 100px;
            }
            @media (min-width: 1200px) {
                align-self: flex-end;
            } 
        } 
    }

    .reg__info {
        font-family: 'Montserrat-Light';
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        margin-bottom: 20px;

        @media screen {
            @media (min-width: 600px) { 
                font-size: 25px;
            }
            @media (min-width: 1200px){
                align-self: flex-end;
            }
        } 

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    .reg__toForm {
        width: 100%;
        position: relative;
        bottom: 0px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .reg__lizaAndGirld {
            width: 100%;
            min-height: 500px;
            max-height: 1200px;
            background-image: url('../assets/register/lizaandgirl.png');
            background-size: cover;
            background-position-y: top;

            @media screen {
                @media (min-width: 600px) {
                    background-image: url('../assets/register/lizaandgirl_d.png') !important;
                    background-size: cover !important;
                }
                @media (min-width: 1000px) {
                    background-size: contain !important;
                    min-height: 600px;
                }
            } 
        }

        .reg__btnContainer {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 10px;

            @media screen and (min-width: 1200px) {
                align-self: flex-end;
            }

            .reg__btn {
                font-family: 'Montserrat-Light';
                font-weight: 300;
                font-size: 64px;
                line-height: 78px;
                text-align: center;
                color: #E5E5E5;
                cursor: pointer;
                text-shadow: #006CBB 3px 0px 0px, #006CBB 2.83487px 0.981584px 0px, #006CBB 2.35766px 1.85511px 0px, #006CBB 1.62091px 2.52441px 0px, #006CBB 0.705713px 2.91581px 0px, #006CBB -0.287171px 2.98622px 0px, #006CBB -1.24844px 2.72789px 0px, #006CBB -2.07227px 2.16926px 0px, #006CBB -2.66798px 1.37182px 0px, #006CBB -2.96998px 0.42336px 0px, #006CBB -2.94502px -0.571704px 0px, #006CBB -2.59586px -1.50383px 0px, #006CBB -1.96093px -2.27041px 0px, #006CBB -1.11013px -2.78704px 0px, #006CBB -0.137119px -2.99686px 0px, #006CBB 0.850987px -2.87677px 0px, #006CBB 1.74541px -2.43999px 0px, #006CBB 2.44769px -1.73459px 0px, #006CBB 2.88051px -0.838247px 0px;

                position: absolute;
                top: 20%;
                border: none;
                background-color: transparent;

                @media screen and (min-width: 600px) { 
                    top: 30%;
                    font-size: 60px;
                }
            }
        }
    }

    @media screen and (min-width: 600px) { 
        .reg__round {
            height: 200px;
        }

    }
}
</style>