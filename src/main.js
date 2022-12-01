import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import elementui from '@/plug/elementui'
Vue.use(elementui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
