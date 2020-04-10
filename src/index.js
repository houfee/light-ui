/* eslint-disable no-unused-vars */
import Icon from './components/icon'
import Button from './components/button'
import LgtButtonGroup from './components/button-group'
import Link from './components/link'
import Loading from './components/loading'
import Popup from './components/popup'
import Style from './common/scss'
import './components/style/icon.scss'

import { processComponentName } from './common/helpers/util'

const components = [
  Icon,
  Button,
  LgtButtonGroup,
  Link,
  Loading,
  Popup
]

const install = function(Vue, config = {}) {
  if (install.installed) return
  install.installed = true
  components.forEach((Component) => {
    Vue.component(Component.name, Component)
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
  install(window.Vue);
}

export { Light }
export default Light
