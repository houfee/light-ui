import Icon from '../pages/icon.vue'
import Button from '../pages/button.vue'
import Link from '../pages/link.vue'
import Loading from '../pages/loading.vue'
import Popup from '../pages/popup.vue'
import Toast from '../pages/toast.vue'
import Picker from '../pages/picker.vue'
import Test from '../pages/test.vue'

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
  // Popup 弹窗组件
  {
    path: '/popup',
    component: Popup
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/picker',
    component: Picker
  },
  {
    path: '/test',
    component: Test
  }
]

export default routes
