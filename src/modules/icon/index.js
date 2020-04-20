
import Icon from '../../components/icon/icon.vue'
import '../../components/style/icon.scss'

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon)
}

export default Icon
