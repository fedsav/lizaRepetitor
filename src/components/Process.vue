<template>
<section class="format">
    <h1 class="format__title format__title_top">как проходят занят</h1>
    <div class="format__wrap">

        <div class="format__step format__step_one">
            <span class="format__stepTxt">проходим материал по темам блока</span>
            <img src="../assets/process/dotpurp1.svg" alt="" class="format__dot format__dot_purpOne">
            <img src="../assets/process/mob_arr_or1.svg" alt="" class="format__arr format__arr_one">

            <img src="../assets/process/desc_arr_orange.svg" alt="" class="format__arr_d format__arr_d-or">
        </div>
        
        <div class="format__step format__step_two">
            <span class="format__stepTxt">закрепляем заданиями  из егэ</span>
            <img src="../assets/process/dotor1.svg" alt="" class="format__dot format__dot_orr">
            <img src="../assets/process/mob_arr_or2.svg" alt="" class="format__arr format__arr_two">

            <img src="../assets/process/desc_arr_purp.svg" alt="" class="format__arr_d format__arr_d-pu">
        </div>
        
        <div class="format__step format__step_three">
            <span class="format__stepTxt">сдаем устный зачет по блоку</span>
            <img src="../assets/process/dotpurp2.svg" alt="" class="format__dot format__dot_purpTwo">
        </div>
    </div>

    <div class="format__bonuses">
        <p class="format__extra">А также будем проводить <span class="format__extra_italic">лабораторные</span> и опыты, которые важны как для лучшего запоминания, так и для выполнения 23-24 заданий егэ.</p>
        <p class="format__extra">Будем ходить на <span class="format__extra_italic">экскурсии</span>, где вы сможете применять свои знания в реальных условиях.</p>
        <p class="format__extra">Все материалы хранится в одном месте - <span class="format__extra_italic">Notion</span> и вы всегда можете их посмотреть.</p>
    </div>
        
    <h2 class="format__title format__title_bot">проходят занятия</h2>
</section>
</template>

<script setup>

</script>

<style scope lang="scss">
.format {
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    .format__title {
        font-family: 'Montserrat-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;

        &_top {
            margin-left: auto;
        }

        &_bot {
            transform: rotate(-90deg) translate(100%, 0);
            transform-origin: 200px 200px;

            @media screen and (min-width: 600px) {
                display: none;
            } 
        }
    }

    .format__wrap {
        position: relative;
        min-width: 327px;
        min-height: 290px;
        margin: 52px auto 0 auto;

        @media screen and (min-width: 1200px) {
            min-width: 1000px;
            min-height: 600px;
        }

        .format__step {
            position: absolute;

            &_one {
                max-width: 160px;
                text-align: left;
            }

            &_two {
                max-width: 105px;
                top: 42px;
                right: 0px;
                text-align: right;
            }

            &_three {
                top: 230px;
                left: 30px;
                max-width: 113px;

                @media screen and (min-width: 1200px) {
                    max-width: 300px;
                    top: 500px;
                }
            }

            .format__dot {
                position: absolute;
                z-index: -1;

                @media screen and (min-width: 1200px) {
                    width: 70px;
                }

                &_purpOne {
                    top: 1px;
                    left: -7px;
                }

                &_orr {
                    top: -3px;
                    left: -4px;
                }

                &_purpTwo {
                    top: -3px;
                    left: -10px;
                }
            }

            .format__arr {
                position: absolute;
                z-index: -1;

                @media screen and (min-width: 1200px) {
                    display: none;
                }

                &_one {
                    left: 50%;
                    top: 20px;
                }

                &_two {
                    right: 100%;
                }
            }


            //Десктопные стрелки

            .format__arr_d {
                display: none;
                position: absolute;

                @media screen and (min-width: 1200px) {
                    display: block;
                }
            }

            @media screen and (min-width: 1200px) {
                .format__arr_d-or {
                    top: -20px;
                    left: 100px;
                }

                .format__arr_d-pu {
                    right: 0;
                    top: 120px;
                }
            }

            //Конец десктопных стрелок

            .format__stepTxt {
                position: relative;
                font-family: 'Montserrat-Medium';
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 18px;
                z-index: 0;

                @media screen {
                    @media (min-width: 600px) {
                        font-size: 25px;
                    }
                    @media (min-width: 1200px) {
                        font-size: 30px;
                        line-height: 30px;
                    } 
                } 
            }
        }
    }

    .format__bonuses {
        align-self: flex-end;
        max-width: 293px;
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 0 60px;

        @media screen and (min-width: 600px) {
            max-width: 100%;
            flex-direction: row;
            justify-content: center;
        }

        .format__extra {
            margin-top: 25px;
            font-family: 'Montserrat-Medium';
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            text-align: right;

            @media screen {
                @media (min-width: 600px) {
                    font-size: 20px;
                    line-height: 20px;
                    text-align: center;
                    margin-top: 90px;
                }
                @media (min-width: 1200px) {
                    font-size: 40px;
                    line-height: 50px;
                    border: 10px dashed #FF7262;
                    padding: 20px;
                }
            } 

            &_italic {
                font-family: 'Montserrat-Italic';
            }
        }
    }
}
</style>