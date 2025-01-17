import './main.postcss'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { router } from './router'

// import icons data generated by PurgeIcons
import '@purge-icons/generated'

import App from './App.vue'
import { messages } from './messages'

const app = createApp(App)

const i18n = createI18n({
  locale: 'en',
  messages,
})

app.use(i18n)
app.use(router)

app.mount('#app')
