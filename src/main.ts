import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
import lazyRequest from './service'

const app = createApp(App)

registerApp(app)

app.use(router).use(store).mount('#app')

lazyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  showLoading: false
})
