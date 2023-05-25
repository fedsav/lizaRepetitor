<template>
  <section class="hello">
    <header class="hello__header">
        <a class="hello__text" @click.prevent="goSection('aboutme')" href="/">обо мне</a>
        <a class="hello__text" @click.prevent="$emit('changeModal')" href="/">запись</a>
        <a class="hello__text" @click.prevent="goSection('contacts')" href="/">контакты</a>
    </header>
    <div class="hello__privet">
        <img src="../assets/hello/privet.svg" alt="" class="hello__img">
    </div>
    <div class="hello__bio1">Учитель днем, репетитор вечером и исследователь вечно</div>
    <div class="hello__bio2">Ключевой <span class="hello__italic">ценностью</span> для меня является передача биологических знаний, развитие навыков, способностей и личностных качеств обучающихся</div>
    <div class="hello__liza">
    </div>
  </section>
</template>

<script>
export default {
  name: "Privet",
  emits: ['changeModal'],

  methods: {
    goSection(val) {
      this.$emit("go-section", val);
    },
  },
};
</script>

<style scoped lang="scss">


.hello {
    min-height: 667px;
    min-width: 100%;
    box-sizing: border-box;
    position: relative;

    .hello__header {
        margin-top: 16px;
        display: flex;
        justify-content: end;
        gap: 20px;

        @media screen {
          @media (min-width: 600px) {
            gap: 35px;
          }
          @media (min-width: 1200px) {
            gap: 100px;
          }
        }
    }

    .hello__text {
        font-family: 'Montserrat-Medium';
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        cursor: pointer;

        @media screen and (min-width: 600px) { 
          font-size: 1.8rem;
        }
        
        &:last-child {
            margin-right: 30px;
        }
    }

    .hello__img {
        margin: 77px 0 0 23px;
        position: relative;
        z-index: 2;

        @media screen and (min-width: 1200px) {
          height: 300px;
        } 
    }

    .hello__bio1 {
        margin: 38px 0 0 21px;
        height: 54px;
        width: 198px;
        position: relative;
        z-index: 2;
    }

    .hello__bio2 {
        margin: 91px 0 0 21px;
        height: 198px;
        width: 147px;
        position: relative;
        z-index: 2;
    }

    .hello__bio1, .hello__bio2 {
        font-family: 'Montserrat-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        text-align: left;
    }

    .hello__italic {
        font-family: 'Montserrat-Italic';
        font-style: italic;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
    }
    @media screen and (min-width: 600px) { 

      .hello__bio1, .hello__bio2, .hello__italic {
        font-size: 2rem;
        width: 50%;
        line-height: 2rem;
      }
    }

    .hello__liza {
        background-image: url('../assets/hello/m_liza.png');
        background-repeat: no-repeat;
        height: 476px;
        width: 264px; 
        position: absolute;
        top: 191px;
        right: 0;
        z-index: 1;
        object-fit: contain;

        @media screen and (min-width: 1200px) {
          background-image: url('../assets/hello/d_liza.png');
          background-size: cover;
          height: 600px;
          width: 600px;
        }
    }
}


</style>