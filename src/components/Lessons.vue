<template>
  <section class="lessons">
    <div class="lessons__wrapper">

      <div class="lessons__options">
        <span class="lessons__question">что занятия дадут тебе?</span>
        <img src="../assets/lessons/options.png" alt="" class="lessons__img">
      </div>
  
        <div class="lessons__item lessons__item_practice">
          <span class="lessons__point">Практику</span>
          <img src="../assets/lessons/oarr1.svg" alt="" class="lessons__arrow_m">
          <img src="" alt="" class="lessons__arrow_d">
        </div>
  
        <div class="lessons__item lessons__item_atmosphere">
          <span class="lessons__point">Атмосферу</span>
          <img src="../assets/lessons/oarr2.svg" alt="" class="lessons__arrow_m">
          <img src="" alt="" class="lessons__arrow_d">
        </div>
  
        <div class="lessons__item lessons__item_knowledge">
          <span class="lessons__point">Знания</span>
          <img src="../assets/lessons/oarr3.svg" alt="" class="lessons__arrow_m">
          <img src="" alt="" class="lessons__arrow_d">
        </div>
  
        <div class="lessons__item lessons__item_team">
          <span class="lessons__point ">Команду</span>
          <img src="../assets/lessons/oarr4.svg" alt="" class="lessons__arrow_m">
          <img src="" alt="" class="lessons__arrow_d">
        </div>
  
        <div class="lessons__item lessons__item_motivation" >
          <span class="lessons__point ">Мотивацию</span>
          <img src="../assets/lessons/oarr5.svg" alt="" class="lessons__arrow_m">
          <img src="" alt="" class="lessons__arrow_d">
        </div>
  
        <div class="lessons__item lessons__item_confidence" >
          <span class="lessons__point ">Уверенность</span>
          <img src="../assets/lessons/oarr6.svg" alt="" class="lessons__arrow_m">
          <img src="" alt="" class="lessons__arrow_d">
        </div>
    </div>

    <div class="carouselWrapper">
      <v-carousel
      cycle
      color="#FFFFFF00"
      height="300"
      hide-delimiters
      show-arrows="hover"
      class="carousel"
    >
    
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          height="100%"
          color="transparent"
        >
          <div class="d-flex flex-column fill-height justify-center align-center">
            <div class="text-h3 carousel__title">
              {{ slide.title }} 
            </div>
            <div class="text-body-1 carousel__info">
              {{ slide.info }}
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    </div>
  </section>
</template>

<script setup>

const slides = [
  {title: 'Команду', info: 'на целый год мы станем большим комьюнити, в котором будет делиться своими результатами, подбадривать и учиться вместе'},
  {title: 'Практику', info: 'решение реальных заданий егэ, проведение лабораторных занятий'},
  {title: 'Атмосферу', info: 'после занятий вы сможете разрядиться: поиграть в настолки, попить чай/какао, пообщаться или пройтись по центру'},
  {title: 'Знания', info: 'вся информация необходимая для егэ, а также для жизни'},
  {title: 'Мотивацию', info: 'поддержка, понимание куда движемся и как, а также различные педагогические приемы будут способствовать развитию как внешней, так и внутренней мотивации к обучению.'},
  {title: 'Уверенность', info: 'обратная связь, разнообразие форм обучение, а также все выше перечисленные пункты будут помогать в развитии уверенности'},
]
</script>

<style scoped lang="scss">
.lessons {
  background-color: rgba(216, 161, 255, 0.59);
  position: relative;
  padding-bottom: 30px;

  @media screen and (min-width: 1200px) {
    padding: 120px;
    display: flex;
    align-items: center;
  }

  .lessons__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;

    .lessons__options {
      position: relative;
      display: flex;
      justify-content: center;
      margin: 200px 66px;
      max-width: 375px;
  
      .lessons__question {
        position: absolute;
        top: 32%;
        max-width: 160px;
        font-family: 'Montserrat-ExtraBold';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        color: #F6F6F6;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
  
      .lessons__img {
        max-width: 100%;
        object-fit:contain;
      }
    }
     
    .lessons__item {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;

      &_practice {
        left: 23px;
        top: 119px;
       }
      
      &_atmosphere {
        left: 113px;
        top: 62px;
       }

      &_knowledge {
        left: 273px;
        top: 109px;
       }

      &_team {
          flex-direction: column-reverse;
          left: 16px;
          top: 420px;
      }

      &_motivation {
        flex-direction: column-reverse;
        left: 151px;
        top: 460px;
      }

      &_confidence {
        flex-direction: column-reverse;
        left: 255px;
        top: 430px;
       }
  
      .lessons__point {
        font-family: 'Montserrat-ExtraBold';
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
      }

      .lessons__arrow_d {
        display: none;
      }
    }
  }

  @media screen {
    .carousel {
      @media screen and (min-width: 600px) { 
          max-width: 70%;
          margin: 0 auto;
      }

    }
  } 
  .carouselWrapper {
    margin: 0 auto;

    @media screen and (min-width: 1200px) {
      width: 70%;
   }

    .carousel__title {
      color: #ffffff;

      @media screen and (min-width: 1280px) {
        font-size: 70px !important;
     }
    }
  
    .carousel__info {
      margin-top: 20px;
      max-width: 70%;
      text-align: center;
      color: #ffffff;

      @media screen and (min-width: 1280px) {
        font-size: 24px !important;
        line-height: 30px;
     }
    }
  }
}


</style>