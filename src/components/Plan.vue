<template>
  <section class="wrapper">
    <div class="b-img"></div>
    <div class="plan">
        <h1 class="plan__title">Что пройдем</h1>
        <ul class="plan__list">
            <img src="../assets/plan/spiral.svg" alt="" class="plan__spiral">
            <li class="plan__item">Ботанику</li>
            <li class="plan__item">Зоологию</li>
            <li class="plan__item">Экологию</li>
            <li class="plan__item">Человека</li>
            <li class="plan__item">Клетку</li>
            <li class="plan__item">Биохимию</li>
            <li class="plan__item">Генетику</li>
            <li class="plan__item">Эволюцию</li>
            <li class="plan__item">Эксперименты/Науки (1, 2, 23, 24 задания)</li>
        </ul>
            <img src="../assets/plan/frog.svg" alt="" class="plan__decoration plan__decoration_frog">
            <img src="../assets/plan/dino.svg" alt="" class="plan__decoration  plan__decoration_dino">
            <img src="../assets/plan/flower.svg" alt="" class="plan__decoration plan__decoration_flower ">
            <img src="../assets/plan/earth.svg" alt="" class="plan__decoration  plan__decoration_earth">
            <img src="../assets/plan/molekula.svg" alt="" class="plan__decoration  plan__decoration_molekula">
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wrapper {
    position: relative;
    margin-top: 50px;
    width: 100%;
    background-color: #D69F98;

    @media screen and (min-width: 1200px) {
        padding: 120px;
    }
    
    .b-img {
        position: absolute;
        background-image: url('../assets/plan/m_plan.png');
        background-size:contain;
        background-position:  center;
        min-height: 100%;
        width: 400px;
        
        @media screen and (min-width: 600px) { 
            top: 0;
            background-position: left;
        }
    }
    .plan {
        position: relative;
        margin: 0 auto;
        min-height: 667px;
        max-width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen {
            @media (min-width: 600px) { 
                margin: 0 0 0 auto;
            }
            @media (min-width: 1200px) {
                margin-right: 120px;
                max-width: 600px;
            }
        }


        .plan__title {
            margin: 130px 25px 0 auto;
            font-family: 'Montserrat-ExtraBold';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            color: #D8A1FF;

            @media screen {
                @media (min-width: 600px) {
                    color: #FFFFFF;
                    margin-top: 70px;
                }
                @media (min-width: 1200px)
                 {
                    font-size: 60px;
                 }
            }
        }

        .plan__list {
            position: relative;
            list-style-type: none;
            max-width: 210px;
            margin-top: 83px;

            @media screen and (min-width: 1200px) {
                max-width: 300px;
            }

            .plan__item {
                position: relative;
                font-family: 'Montserrat-Medium';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 29px;
                color: #FFFFFF;
                margin-top: 5px;
                z-index: 2;

                @media screen and (min-width: 1200px) {
                    font-size: 35px;
                    line-height: 40px;
                }
            }
        }

        .plan__spiral {
            position: absolute;
            left: -20px;
            z-index: 1;

            @media screen and (min-width: 600px) {
                display: none;
            }
        }

        .plan__decoration {
            position: absolute;

            @media screen and (min-width: 600px) {
                display: none;
            }

            &_frog {
                top: 283px;
                left: 15px;
            }
            
            &_dino {
                top: 448px;
                left: 37px;
            }

            &_flower {
                top: 234px;
                right: 86px;
            }

            &_earth {
                top: 308px;
                right: 76px;
            }

            &_molekula {
                top: 385px;
                right: 129px;
            }
        }
    }
}
</style>