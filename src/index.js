// locale
import Locale from './modules/locale'
/* eslint-disable no-unused-vars */
import Button from './modules/button'
import ButtonGroup from './modules/button-group'
import Link from './modules/link'
import Loading from './modules/loading'
import Popup from './modules/popup'
import Icon from './modules/icon'
import Style from './common/scss'

import { processComponentName } from './common/helpers/util'

const components = [
  Locale,
  Button,
  ButtonGroup,
  Link,
  Loading,
  Popup,
  Icon
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

export {
  Button,
  ButtonGroup,
  Link,
  Loading,
  Popup
}

export default Light
