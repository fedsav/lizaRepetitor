<template>
  <section class="contacts" ref="main">
    <h1 class="contacts__title">Контакты</h1>
    <div class="contacts__content">
        <div class="contacts__card contacts__card_y">
            <span class="contacts__info contacts__info_y">Ссылка на мой канал на YouTube, где вы можете ознакомиться с моим стилем преподавания, посмотреть бесплатные уроки и узнать, как учиться эффективно и с удовольствием.</span>
            <a href="https://www.youtube.com/@Lizokrozhkova" class="contacts__link"><img src="../assets/contacts/youtube.svg" alt="" class="contacts__social "></a>
        </div>

        <div class="contacts__card contacts__card_i">
          <a href="https://www.instagram.com/lizok.rozhkova/" class="contacts__link"><img src="../assets/contacts/insta.svg" alt="" class="contacts__social "></a>
          <span class="contacts__info contacts__info_i">Мой inst, где также можно найти интересные посты о биологии и истории, где делаюсь своими буднями.</span>
        </div>

        <div class="contacts__card contacts__card_t">
            <span class="contacts__info contacts__info_t">и telegram, где можно задать любой интересующий тебя вопрос.</span>
            <a href="https://t.me/lizokrozhkova" class="contacts__link"><img src="../assets/contacts/telegr.svg" alt="" class="contacts__social "></a>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const main = ref(null)

defineExpose({
    main,
})
</script>

<style scoped lang="scss">
.contacts {
  margin-top: 50px;
  
  .contacts__title {
    font-family: 'Montserrat-Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    margin-left: 63px;
  }

  .contacts__content {
    margin-top: 61px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .contacts__card {
      width: 100%;
      text-align: left;
      display: flex;
      justify-content: space-evenly;

      &_i {
        margin-top: 95px;
      }

      &_t {
        margin-top: 67px;
      }
    }

    .contacts__info {
      font-family: 'Montserrat-Medium';
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;

      &_y {
        max-width: 230px;
      }

      &_i {
        max-width: 231px;
      }

      &_t {
        max-width: 157px;
      }
    }

    .contacts__link {
      cursor: pointer;
    }
  }
}
</style>