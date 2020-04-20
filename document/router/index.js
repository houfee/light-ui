import Vue from 'vue'
import Router from 'vue-router'

import { getCurrentLang } from '../common/js/utils'
import routes from './routes'
// import EnUSHome from '../components/home/en-US.vue' // 英文文档路由
import ZhCNHome from '../components/home/zh-CN.vue'
// import EnUSIndex from '../components/index/en-US.vue' // 英文文档路由
import ZhCNIndex from '../components/index/zh-CN.vue'
import Example from '../components/example/example.vue'
// viewport chunk added to main chunk, not in dynamic docs chunks
import '../components/viewport/viewport.vue'
Vue.use(Router)

// 英文文档路由
// const EnUSChildren = [
//   {
//     path: '',
//     component: EnUSIndex
//   },
//   {
//     path: 'example',
//     component: Example
//   }
// ].concat(routes['en-US'])

// 中文文档路由
const ZhCNChildren = [
  {
    path: '',
    component: ZhCNIndex
  },
  {
    path: 'example',
    component: Example
  }
].concat(routes['zh-CN'])

export default new Router({
  routes: [
    {
      path: '/',
      redirect: function () {
        // const defaultLang = getCurrentLang()
        const defaultLang = 'zh-CN' || getCurrentLang() // 只存在中文路由
        return `/${defaultLang}`
      }
    },
     // 英文文档路由
    // {
    //   path: '/en-US',
    //   component: EnUSHome,
    //   children: EnUSChildren
    // },
    {
      path: '/zh-CN',
      component: ZhCNHome,
      children: ZhCNChildren
    }
  ]
})
