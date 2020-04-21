import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import Light from '../src/index'

Vue.use(Light)
Vue.use(VueRouter)

Vue.config.productionTip = false
console.log(process.env)

// 需要使用 vConsole 的同学请打开注释即可
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
