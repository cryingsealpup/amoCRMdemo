import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia()
const app = createApp(App)
pinia.use(createPersistedState({
    storage: sessionStorage,
  }))
const vuetify = createVuetify({
    components,
    directives,
  })


app.use(pinia)
app.use(vuetify)
app.mount('#app')
