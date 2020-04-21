import Test from '../../components/test/test.vue'
import addPicker from './api'
import Locale from '../../common/locale'

Test.install = function (Vue) {
  Vue.component(Test.name, Test)
  Locale.install(Vue)
  addPicker(Vue, Test)
}

export default Test
