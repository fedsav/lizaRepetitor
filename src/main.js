import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css' 
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
      },

})

createApp(App).use(vuetify).mount('#app')
