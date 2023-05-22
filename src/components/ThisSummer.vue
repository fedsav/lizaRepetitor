<template>
  <section class="thissum">
    <div class="thissum__texts">
        <h1 class="thissum__title-bold">а этим летом...</h1>
        <h2 class="thissum__title-regular">и последующий год</h2>
        <div class="thissum__description">хочу пригласить тебя присоединиться ко мне на курсах подготовки <span class="thissum__description thissum__description_orange">к ЕГЭ по биологии</span> в 2024 году.</div>
    </div>
    <div class="thissum__picture-box">
        <img src="../assets/thissummer/IMG_1110-PhotoRoom.png" alt="" class="thissum__img">
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.thissum {
    position: relative;
    margin-top: 85px;

    .thissum__texts {
        margin: 0 15px;
    }

    .thissum__title-bold {
        font-family: 'Montserrat-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
    }

    .thissum__title-regular {
        font-family: 'Montserrat-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
    }
    
    .thissum__description {
        font-family: 'Montserrat-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        margin-top: 25px;
        .thissum__description_orange {
            color: #FF7262;
        }
    }
    
    .thissum__picture-box {
        display: flex;
        align-items: center;
        padding-top: 42px;
        max-width: 550px;
        margin: 0 auto;
        .thissum__img {
            width: 100%;
            object-fit: contain;
        }
    }

    
}

@media screen and (min-width: 600px) { 
    .thissum {
        display: flex;

        .thissum__texts {
            max-width: 50%;
            padding-left: 30px;

        }

        .thissum__title-bold {
            font-size: 40px !important;
        }
        .thissum__title-regular {
            font-size: 20px;
        }

        .thissum__description  {
            font-size: 30px !important;
            line-height: 35px;

            
        }

        .thissum__picture-box {
            max-width: 1280px;
            margin: 0 0 0 auto;
        }
    }
}

</style>