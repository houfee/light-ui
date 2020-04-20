import ButtonGroup from '../../components/button-group/button-group.vue'

ButtonGroup.install = function (Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup