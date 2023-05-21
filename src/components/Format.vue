<template>
  <section class="format">
    <h1 class="format__title">Формат обучения</h1>
    <div class="format__description">
        <span class="format__txt">2 раза в неделю</span>
        <span class="format__txt">по 1,5 часа</span>
        <span class="format__txt">1500 рублей занятие</span>
    </div>
    <div class="format__image"></div>
    <span class="format__location">центр Москвы - метро Чистые пруды </span>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.format {
    margin-top: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .format__title {
        font-family: 'Montserrat-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
    }

    .format__description {
        align-self: flex-start;
        margin: 6px 20px 0 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 334px;

        .format__txt {
            font-family: 'Montserrat-Medium';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            margin-top: 2px;
            text-align: left;
        }
    }

    .format__image {
        margin-top: 55px;
        min-width: 100%;
        min-height: 300px;
        background-image: url('../assets/format.png');
        background-size: cover;
    }

    .format__location {
        font-family: 'Montserrat-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        margin-top: 36px;
    }
}
</style>