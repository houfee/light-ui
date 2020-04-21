// locale
import Locale from './modules/locale'
/* eslint-disable no-unused-vars */
// 基础组件
import Button from './modules/button'
import ButtonGroup from './modules/button-group'
import Link from './modules/link'
import Loading from './modules/loading'
import Icon from './modules/icon'
// 弹出层
import Popup from './modules/popup'
import Toast from './modules/toast'
import Picker from './modules/picker'
// import Test from './modules/test'
import Style from './common/scss'

// module
import BetterScroll from './modules/better-scroll'
import createAPI from './modules/create-api'

import { processComponentName } from './common/helpers/util'

const components = [
  Locale,
  Button,
  ButtonGroup,
  Link,
  Loading,
  Icon,
  Popup,
  Toast,
  Picker
  // Test
]

const install = function(Vue, config = {}) {
  if (install.installed) return
  install.installed = true
  components.forEach((Component) => {
    Component.install(Vue)
  })
}

const Light = {
  /* eslint-disable no-undef */
  version: __VERSION__,
  install,
  BScroll: BetterScroll,
  createAPI
}

components.forEach((Component) => {
  const name = processComponentName(Component, {
    firstUpperCase: true
  })
  Light[name] = Component
})

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Button,
  ButtonGroup,
  Link,
  Loading,
  Popup,
  Toast,
  Picker,
  // Test,
  BetterScroll,
  createAPI
}

console.log(Light)

export default Light
