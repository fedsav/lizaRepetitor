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

    @media screen {
       @media (min-width: 600px) {
            display: flex;
        }
        @media (min-width: 1200px) {
            margin: 200px;
        } 
    } 

    .thissum__texts {
        margin: 0 15px;
    }

    .thissum__title-bold {
        font-family: 'Montserrat-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;

        @media screen {
            @media (min-width: 600px) {
                font-size: 40px;
            }
            @media (min-width: 1200px) {
                font-size: 70px;
                line-height: 60px;
            }
        } 
    }

    .thissum__title-regular {
        font-family: 'Montserrat-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;

        @media screen {
            @media (min-width: 600px) {
                font-size: 20px;
            }
            @media (min-width: 1200px) {
                margin-top: 20px;
                font-size: 40px;
            }
        } 
    }
    
    .thissum__description {
        font-family: 'Montserrat-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        margin-top: 25px;

        @media screen {
            @media (min-width: 600px) {
                font-size: 30px ;
                line-height: 35px;
            }
            @media (min-width: 1200px) {
                margin-top: 120px;
                font-size: 42px;
                line-height: 50px;
                max-width: 60%;
            }
        } 
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

        @media screen {
            @media (min-width: 600px) {
                min-width: 280px;
                margin: 0 0 0 auto;
            }
            @media (min-width: 1200px) {
                min-width: 400px;
            } 
        }
        .thissum__img {
            width: 100%;
            object-fit: contain;
        }
    }
}
</style>