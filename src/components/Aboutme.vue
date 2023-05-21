<template>
  <section class="aboutme" ref="main">
    <header class="aboutme__heading">
        <span class="aboutme__title">Обо мн<span class="aboutme__e">е</span></span>
        <img src="../assets/aboutme/aboutme.png" alt="" class="aboutme__img">
    </header>
    <article class="aboutme__achievements">
        <div class="aboutme__experience ">
                <img src="../assets/aboutme/roundOR.svg" alt="" class="aboutme__bigdot aboutme__bigdot-OR">
            <span class="aboutme__proff">Репетитор 4 года</span>
            <span class="aboutme__description">готовлю к егэ по биологии </span>
        </div>
        <div class="aboutme__experience aboutme__experience-right">
            <img src="../assets/aboutme/roundPURP.svg" alt="" class="aboutme__bigdot aboutme__bigdot-PU">
            <span class="aboutme__proff">Веду ютуб канал</span>
            <span class="aboutme__description">где делюсь своими знаниями в области  обучения и биологии, а также просто делюсь своими мыслями на регулярной основе</span>
        </div>
        <div class="aboutme__experience ">
            <img src="../assets/aboutme/roundOR.svg" alt="" class="aboutme__bigdot aboutme__bigdot-OR">
            <span class="aboutme__proff">Учитель в частной школе</span>
            <span class="aboutme__description">работаю учителем биологии в 5-7 классах</span>
        </div>
        <div class="aboutme__experience aboutme__experience-right">
             <img src="../assets/aboutme/roundPURP.svg" alt="" class="aboutme__bigdot aboutme__bigdot-PU">
            <span class="aboutme__proff">Веду биолабораторию</span>
            <span class="aboutme__description">каждую неделю по пятницам творим с ребеатми чудеса, познавая мир через призму естественнонаучного знания</span>
        </div>
        <div class="aboutme__experience ">
            <img src="../assets/aboutme/roundOR.svg" alt="" class="aboutme__imgOR aboutme__bigdot aboutme__bigdot-OR">
            <span class="aboutme__proff">Работала в  музее</span>
            <span class="aboutme__description">в зоологическом музеи МГУ 2 года, где проводила экскурсии , мастер-классы и интерактивные занятия</span>
        </div>
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const main = ref(null)

defineExpose({
    main,
})
</script>

<style scoped lang='scss'>
.aboutme {
    position: relative;
    overflow: hidden;

    .aboutme__heading {
        margin-top: 50px;
        display: flex;
        justify-content: end;

        .aboutme__title {
            position: relative;
            left: 25px;
            margin-top: 37px;
            font-family: 'Montserrat-Medium';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            z-index: 2;
        }

        .aboutme__e {
            color: #D8A1FF;
            z-index: 2;
        }

        .aboutme__img {
            height: 192px;
            width: 192px;
            object-fit: cover;
            margin-right: 19px;
            z-index: 1;
        }
    }

    .aboutme__achievements {
        margin: 30px 28px 0 28px;
        display: flex;
        flex-direction: column;
        gap: 23px;

        .aboutme__experience { 
            display: flex;
            flex-direction: column;
            gap: 6px;
            position: relative;
            z-index: 2;

            .aboutme__bigdot {
                position: absolute;
                z-index: 1;
                top: -25px;
            }

            .aboutme__bigdot-OR {
                left: -50px;
            }

            .aboutme__bigdot-PU {
                right: -50px;         
            }

            .aboutme__proff {
                font-family: 'Montserrat-Medium';
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 18px;
                z-index: 2;
            }
    
            .aboutme__description {
                font-family: 'Montserrat-Medium';
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
                z-index: 2;
            }
        }

        .aboutme__experience-right {
            text-align: right;
        }

    }
}

</style>