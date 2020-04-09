import {
  Icon,
  Button,
  LgtButtonGroup,
  Link,
  Loading,
  Popup,
  Style
} from './module'
import { processComponentName } from './common/helpers/util'

// cube 组件的icon样式，现在使用elementui的icon，全部替换调
// import './common/icon/cube-icon.scss'

import './components/style/icon.scss'

const components = [
  Icon,
  Button,
  LgtButtonGroup,
  Link,
  Loading,
  Popup
]

const install = function(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach((Component) => {
    // ignore radio
    // if (Component === Radio) {
    //   return
    // }
    Component.install(Vue)
  })
}

const Light = {
  /* eslint-disable no-undef */
  version: __VERSION__,
  install
  // BScroll: BetterScroll,
  // createAPI
}

components.forEach((Component) => {
  const name = processComponentName(Component, {
    firstUpperCase: true
  })
  Light[name] = Component
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default Light
