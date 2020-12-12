import { createApp } from 'vue'
import App from './App.vue'

const init = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const module = await import('vue-automatic-router')
  const router = await module.default
  createApp(App)
    .use(router)
    .mount('#app')
}

init().catch(() => {
  console.log('Cannot start the app')
})
