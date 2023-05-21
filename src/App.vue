<script>
import Aboutme from "./components/Aboutme.vue";
import Privet from "./components/Privet.vue";
import ThisSummer from "./components/ThisSummer.vue";
import Lessons from "./components/Lessons.vue";
import Format from './components/Format.vue';
import Process from './components/Process.vue';
import Plan from './components/Plan.vue';
import Registration from "./components/Registration.vue";
import Contacts from "./components/Contacts.vue";
import Form from "./components/Form.vue";

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: { Privet, Aboutme, ThisSummer, Lessons, Format, Process, Plan, Registration, Contacts, Form, },

  mounted () {
    AOS.init()
    },

    methods: {
    goToSection (value) {
      window.scrollTo({
        top: this.$refs[(value)].main.getBoundingClientRect().y,
        behavior: 'smooth',
      })
    }
  },

  data () {
    return {
      showModal: false,
    }
  }

  }
</script>

<template>
  <main class="main">
    <Privet @goSection="goToSection" :showModal="showModal" @changeModal="showModal = true"/>
    <Aboutme data-aos="fade-up" ref="aboutme"/>
    <ThisSummer data-aos="fade-up"/>
    <Lessons data-aos="fade-up"/>
    <Format data-aos="fade-up"/>
    <Process data-aos="fade-up"/>
    <Plan data-aos="fade-up"/>
    <Registration data-aos="fade-up" :showModal="showModal" @changeModal="showModal = true"/>
    <Contacts data-aos="fade-up" ref="contacts"/>
    <Transition>
      <Form :showModal="showModal" v-show="showModal" @changeModal="showModal = false"/>
    </Transition>
  </main>
</template>

<style scoped>
.main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>