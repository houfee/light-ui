import Icon from '../pages/icon.vue'
import Button from '../pages/button.vue'
import Link from '../pages/link.vue'
import Loading from '../pages/loading.vue'
import Popup from '../pages/popup.vue'
const routes = [
  // Basic 基础组件
  {
    path: '/icon',
    component: Icon
  },
  {
    path: '/button',
    component: Button
  },
  {
    path: '/link',
    component: Link
  },
  {
    path: '/loading',
    component: Loading
  },
  {
    path: '/popup',
    component: Popup
  }
]

export default routes
