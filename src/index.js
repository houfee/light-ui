import {
  Icon,
  Button,
  LgtButtonGroup,
  Link,
  Style
} from './module'
import { processComponentName } from './common/helpers/util'

import './common/icon/cube-icon.scss'

import './components/style/icon.scss'

const components = [
  Icon,
  Button,
  LgtButtonGroup,
  Link
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
