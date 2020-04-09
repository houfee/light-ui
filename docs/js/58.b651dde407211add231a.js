(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{Wh2l:function(e,t,v){"use strict";v.r(t);var n=v("KHd+"),_=Object(n.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"markdown"},[v("h2",[e._v("Form")]),e._v(" "),e._m(0),e._v(" "),v("p",[e._v("表单，包含各种输入组件以及对应的校验；我们可以通过数据驱动的方式来生成完成表单。")]),e._v(" "),v("h3",[e._v("示例")]),e._v(" "),v("ul",[e._m(1),e._v(" "),v("li",[v("p",[e._v("自定义使用")]),e._v(" "),v("p",[e._v("你可以选择使用自己自定义的组件甚至通过插槽来自定义结构和行为。")]),e._v(" "),v("pre",[v("code",{staticClass:"language-html"},[e._v('<cube-form :model="model" @validate="validateHandler" @submit="submitHandler">\n  <cube-form-group>\n    <cube-form-item :field="fields[0]"></cube-form-item>\n    <cube-form-item :field="fields[1]"></cube-form-item>\n    <cube-form-item :field="fields[2]">\n      <cube-button @click="showDatePicker">'+e._s(e.model.dateValue||"Please select date")+'</cube-button>\n      <date-picker ref="datePicker" :min="[2008, 8, 8]" :max="[2020, 10, 20]" @select="dateSelectHandler"></date-picker>\n    </cube-form-item>\n  </cube-form-group>\n  <cube-form-group>\n    <cube-button type="submit">Submit</cube-button>\n  </cube-form-group>\n</cube-form>\n')])]),e._v(" "),e._m(2),e._v(" "),e._m(3)])]),e._v(" "),v("h3",[e._v("Props 配置")]),e._v(" "),v("h4",[e._v("CubeForm")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),v("h4",[e._v("CubeFormGroup")]),e._v(" "),e._m(6),e._v(" "),v("h4",[e._v("CubeFormItem")]),e._v(" "),e._m(7),e._v(" "),v("h3",[e._v("事件")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),v("h3",[e._v("实例方法")]),e._v(" "),e._m(10)])},[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("blockquote",[v("p",[e._v("1.7.0 新增")]),e._v(" "),v("p",[e._v("从 1.8.0 开始支持blur 时才触发校验以及 debounce，同 Validator 一样也开始支持异步校验。")])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("li",[v("p",[e._v("默认配置使用")]),e._v(" "),v("p",[e._v("一个完整的包含所有的内置表单相关组件。")]),e._v(" "),v("pre",[v("code",{staticClass:"language-html"},[e._v('<cube-form\n  :model="model"\n  :schema="schema"\n  :immediate-validate="false"\n  :options="options"\n  @validate="validateHandler"\n  @submit="submitHandler"\n  @reset="resetHandler"></cube-form>\n')])]),e._v(" "),v("pre",[v("code",{staticClass:"language-js"},[e._v("export default {\n  data() {\n    return {\n      validity: {},\n      valid: undefined,\n      model: {\n        checkboxValue: false,\n        checkboxGroupValue: [],\n        inputValue: '',\n        radioValue: '',\n        rateValue: 0,\n        selectValue: 2018,\n        switchValue: true,\n        textareaValue: '',\n        uploadValue: []\n      },\n      schema: {\n        groups: [\n          {\n            legend: '基础',\n            fields: [\n              {\n                type: 'checkbox',\n                modelKey: 'checkboxValue',\n                props: {\n                  option: {\n                    label: 'Checkbox',\n                    value: true\n                  }\n                },\n                rules: {\n                  required: true\n                },\n                messages: {\n                  required: 'Please check this field'\n                }\n              },\n              {\n                type: 'checkbox-group',\n                modelKey: 'checkboxGroupValue',\n                label: 'CheckboxGroup',\n                props: {\n                  options: ['1', '2', '3']\n                },\n                rules: {\n                  required: true\n                }\n              },\n              {\n                type: 'input',\n                modelKey: 'inputValue',\n                label: 'Input',\n                props: {\n                  placeholder: '请输入'\n                },\n                rules: {\n                  required: true\n                },\n                // validating when blur\n                trigger: 'blur'\n              },\n              {\n                type: 'radio-group',\n                modelKey: 'radioValue',\n                label: 'Radio',\n                props: {\n                  options: ['1', '2', '3']\n                },\n                rules: {\n                  required: true\n                }\n              },\n              {\n                type: 'select',\n                modelKey: 'selectValue',\n                label: 'Select',\n                props: {\n                  options: [2015, 2016, 2017, 2018, 2019, 2020]\n                },\n                rules: {\n                  required: true\n                }\n              },\n              {\n                type: 'switch',\n                modelKey: 'switchValue',\n                label: 'Switch',\n                rules: {\n                  required: true\n                }\n              },\n              {\n                type: 'textarea',\n                modelKey: 'textareaValue',\n                label: 'Textarea',\n                rules: {\n                  required: true\n                },\n                // debounce validate\n                // if set to true, the default debounce time will be 200(ms)\n                debounce: 100\n              }\n            ]\n          },\n          {\n            legend: '高级',\n            fields: [\n              {\n                type: 'rate',\n                modelKey: 'rateValue',\n                label: 'Rate',\n                rules: {\n                  required: true\n                }\n              },\n              {\n                type: 'upload',\n                modelKey: 'uploadValue',\n                label: 'Upload',\n                events: {\n                  'file-removed': (...args) => {\n                    console.log('file removed', args)\n                  }\n                },\n                rules: {\n                  required: true,\n                  uploaded: (val, config) => {\n                    return Promise.all(val.map((file, i) => {\n                      return new Promise((resolve, reject) => {\n                        if (file.uploadedUrl) {\n                          return resolve()\n                        }\n                        // fake request\n                        setTimeout(() => {\n                          if (i % 2) {\n                            reject(new Error())\n                          } else {\n                            file.uploadedUrl = 'uploaded/url'\n                            resolve()\n                          }\n                        }, 1000)\n                      })\n                    })).then(() => {\n                      return true\n                    })\n                  }\n                },\n                messages: {\n                  uploaded: '上传失败'\n                }\n              }\n            ]\n          },\n          {\n            fields: [\n              {\n                type: 'submit',\n                label: 'Submit'\n              },\n              {\n                type: 'reset',\n                label: 'Reset'\n              }\n            ]\n          }\n        ]\n      },\n      options: {\n        scrollToInvalidField: true,\n        layout: 'standard' // classic fresh\n      }\n    }\n  },\n  methods: {\n    submitHandler(e) {\n      e.preventDefault()\n      console.log('submit', e)\n    },\n    validateHandler(result) {\n      this.validity = result.validity\n      this.valid = result.valid\n      console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)\n    },\n    resetHandler(e) {\n      console.log('reset', e)\n    }\n  }\n}\n")])]),e._v(" "),v("p",[v("code",[e._v("model")]),e._v(" 就是整个表单需要的数据源，"),v("code",[e._v("schema")]),e._v(" 就是生成表单所定义的模式，"),v("code",[e._v("immediate-validate")]),e._v(" 如果为 true 则初始时立即做校验，"),v("code",[e._v("options")]),e._v(" 则是配置选项。")]),e._v(" "),v("p",[v("code",[e._v("submit")]),e._v(" 校验成功后提交事件，"),v("code",[e._v("validate")]),e._v(" 每次有数据校验更新的事件，"),v("code",[e._v("reset")]),e._v(" 则是重置事件。")])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("pre",[v("code",{staticClass:"language-js"},[e._v("// province, city, area\n// select component\nconst PCA = {\n  props: {\n    value: {\n      type: Array,\n      default() {\n        return []\n      }\n    }\n  },\n  data() {\n    return {\n      selected: []\n    }\n  },\n  render(createElement) {\n    return createElement('cube-button', {\n      on: {\n        click: this.showPicker\n      }\n    }, this.selected.length ? this.selected.join(' ') : 'placeholder')\n  },\n  mounted() {\n    this.picker = this.$createCascadePicker({\n      title: 'PCA Select',\n      data: cityData,\n      selectedIndex: this.value,\n      onSelect: this.selectHandler\n    })\n  },\n  methods: {\n    showPicker() {\n      this.picker.show()\n    },\n    selectHandler(selectedVal, selectedIndex, selectedTxt) {\n      this.selected = selectedTxt\n      this.$emit('input', selectedVal)\n    }\n  }\n}\nexport default {\n  data() {\n    return {\n      validity: {},\n      valid: undefined,\n      model: {\n        inputValue: '',\n        pcaValue: [],\n        dateValue: ''\n      },\n      fields: [\n        {\n          type: 'input',\n          modelKey: 'inputValue',\n          label: 'Input',\n          props: {\n            placeholder: '请输入'\n          },\n          rules: {\n            required: true\n          }\n        },\n        {\n          component: PCA,\n          modelKey: 'pcaValue',\n          label: 'PCASelect',\n          rules: {\n            required: true\n          },\n          messages: {\n            required: '请选择'\n          }\n        },\n        {\n          modelKey: 'dateValue',\n          label: 'Date',\n          rules: {\n            required: true\n          }\n        }\n      ]\n    }\n  },\n  methods: {\n    submitHandler(e) {\n      console.log('submit')\n    },\n    validateHandler(result) {\n      this.validity = result.validity\n      this.valid = result.valid\n      console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)\n    },\n    showDatePicker() {\n      this.$refs.datePicker.show()\n    },\n    dateSelectHandler(selectedVal) {\n      this.model.dateValue = new Date(selectedVal[0], selectedVal[1] - 1, selectedVal[2]).toDateString()\n    }\n  },\n  components: {\n    DatePicker\n  }\n}\n")])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("p",[e._v("可以通过 "),v("code",[e._v("component")]),e._v(" 指定实现了 "),v("code",[e._v("v-model")]),e._v(" 的自定义组件，例如示例中的 "),v("code",[e._v("PCA")]),e._v(" 组件；也可以通过使用插槽自定义结构行为，比如示例中的日期选择。")])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("可选值")]),e._v(" "),v("th",[e._v("默认值")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("model")]),e._v(" "),v("td",[e._v("数据源")]),e._v(" "),v("td",[e._v("Object")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("{}")])]),e._v(" "),v("tr",[v("td",[e._v("schema")]),e._v(" "),v("td",[e._v("生成表单依赖的模式")]),e._v(" "),v("td",[e._v("Object")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("{}")])]),e._v(" "),v("tr",[v("td",[e._v("immediateValidate")]),e._v(" "),v("td",[e._v("初始化时是否立即校验")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("true/false")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("action")]),e._v(" "),v("td",[e._v("表单 Form action 的值")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("undefined")])]),e._v(" "),v("tr",[v("td",[e._v("options")]),e._v(" "),v("td",[e._v("配置项")]),e._v(" "),v("td",[e._v("Object")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("{<br>scrollToInvalidField: false,<br> layout: 'standard' // or: classic")])]),e._v(" "),v("tr",[v("td",[e._v("submitAlwaysValidate<sup>1.12.36+</sup>")]),e._v(" "),v("td",[e._v("提交表单时是否总校验所有字段")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("true/false")]),e._v(" "),v("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ul",[v("li",[v("p",[v("code",[e._v("schema")]),e._v(" 子配置项")]),e._v(" "),v("p",[e._v("模式用于定义表单中的各个字段，可以选择是否分组。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("无分组")]),e._v(" "),v("p",[e._v("直接包含 "),v("code",[e._v("fields")]),e._v(" 即可：")]),e._v(" "),v("pre",[v("code",{staticClass:"language-js"},[e._v("{\n  fields: [\n    {\n      type: 'input',\n      modelKey: 'inputValue',\n      label: 'Input'\n    },\n    // ...\n  ]\n}\n")])])]),e._v(" "),v("li",[v("p",[e._v("有分组")]),e._v(" "),v("p",[e._v("可以设置 "),v("code",[e._v("groups")]),e._v("：")]),e._v(" "),v("pre",[v("code",{staticClass:"language-js"},[e._v("{\n  groups: [\n    {\n      legend: 'Group 1'\n      fields: [\n        {\n          type: 'input',\n          modelKey: 'inputValue',\n          label: 'Input'\n        },\n        // ...\n      ]\n    },\n    {\n      legend: 'Group 2'\n      fields: [\n        {\n          type: 'input',\n          modelKey: 'inputValue',\n          label: 'Input'\n        },\n        // ...\n      ]\n    }\n  ]\n}\n")])])])]),e._v(" "),v("p",[e._v("不管有没有分组，我们都需要使用 "),v("code",[e._v("fields")]),e._v(" 定义表单字段，其中每一项可以有如下属性：")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("可选值")]),e._v(" "),v("th",[e._v("默认值")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("type")]),e._v(" "),v("td",[e._v("字段类型")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("默认内置的可选类型组件有："),v("code",[e._v("button")]),e._v(", "),v("code",[e._v("checkbox")]),e._v(", "),v("code",[e._v("checkbox-group")]),e._v(", "),v("code",[e._v("input")]),e._v(", "),v("code",[e._v("radio")]),e._v(", "),v("code",[e._v("radio-group")]),e._v(", "),v("code",[e._v("rate")]),e._v(", "),v("code",[e._v("select")]),e._v(", "),v("code",[e._v("switch")]),e._v(", "),v("code",[e._v("textarea")]),e._v(", "),v("code",[e._v("upload")]),e._v("；以及特殊的 "),v("code",[e._v("submit")]),e._v(" 和 "),v("code",[e._v("reset")]),e._v("，它们两个会被转换为对应类型的 "),v("code",[e._v("button")])]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("component")]),e._v(" "),v("td",[e._v("字段使用的自定义组件，替换 type，该组件组件实现 "),v("code",[e._v("v-model")])]),e._v(" "),v("td",[e._v("Object/String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("modelKey")]),e._v(" "),v("td",[e._v("在表单的 "),v("code",[e._v("model")]),e._v(" 数据源对象中所对应的 key 名字")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("label")]),e._v(" "),v("td",[e._v("字段的标签值")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("props")]),e._v(" "),v("td",[e._v("type 对应的组件或者自定义组件 component 所需要的 props")]),e._v(" "),v("td",[e._v("Object")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("events<sup>1.8.0+</sup>")]),e._v(" "),v("td",[e._v("type 对应的组件或者自定义组件 component 的事件回调")]),e._v(" "),v("td",[e._v("Object")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("rules")]),e._v(" "),v("td",[e._v('字段的校验规则，参见 <a href="#/zh-CN/docs/validator#cube-Props-anchor">Validator</a>')]),e._v(" "),v("td",[e._v("Object")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("trigger<sup>1.8.0+</sup>")]),e._v(" "),v("td",[e._v("如果设置为 'blur' 那么则会在离焦后校验")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("blur/change")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("debounce<sup>1.8.0+</sup>")]),e._v(" "),v("td",[e._v("控制校验节奏，值为时间，单位 ms。如果 trigger 设置为 blur 则此项配置不生效")]),e._v(" "),v("td",[e._v("Number/Boolean")]),e._v(" "),v("td",[e._v(">= 0，如果设置为 true，那么时间就是 200(ms)")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("messages")]),e._v(" "),v("td",[e._v('字段的校验消息，参见 <a href="#/zh-CN/docs/validator#cube-Props-anchor">Validator</a>')]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("key<sup>1.12.36+</sup>")]),e._v(" "),v("td",[e._v("字段的唯一key，尤其适用在 schema 更新的场景中")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])])])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("options")]),e._v(" 子配置项")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("可选值")]),e._v(" "),v("th",[e._v("默认值")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("scrollToInvalidField")]),e._v(" "),v("td",[e._v("是否默认滚动到第一个无效字段位置")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("true/false")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("layout")]),e._v(" "),v("td",[e._v("表单何种布局方式")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("standard/classic/fresh")]),e._v(" "),v("td",[e._v("standard")])])])])])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("可选值")]),e._v(" "),v("th",[e._v("默认值")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("legend")]),e._v(" "),v("td",[e._v("分组名字")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("''")])]),e._v(" "),v("tr",[v("td",[e._v("fields")]),e._v(" "),v("td",[e._v("该组内所包含的字段集合")]),e._v(" "),v("td",[e._v("Array")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("[]")])])])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("可选值")]),e._v(" "),v("th",[e._v("默认值")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("field")]),e._v(" "),v("td",[e._v("字段数据")]),e._v(" "),v("td",[e._v("Object")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("table",[v("thead",[v("tr",[v("th",[e._v("事件名")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("参数1")]),e._v(" "),v("th",[e._v("参数2")]),e._v(" "),v("th",[e._v("参数3")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("submit")]),e._v(" "),v("td",[e._v("表单校验通过后触发此事件，如果只有同步校验，则不会阻止默认行为，而如果包含了异步校验，则默认就会阻止默认行为")]),e._v(" "),v("td",[e._v("e - 事件对象")]),e._v(" "),v("td",[e._v("model 值")]),e._v(" "),v("td",[e._v("只包含存在的字段的 model 值<sup>1.12.30+</sup>")])]),e._v(" "),v("tr",[v("td",[e._v("reset")]),e._v(" "),v("td",[e._v("表单重置事件")]),e._v(" "),v("td",[e._v("e - 事件对象")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("validate")]),e._v(" "),v("td",[e._v("表单校验事件")]),e._v(" "),v("td",[e._v("参数结构如下：<br>{<br>validity,<br> valid,<br> invalid,<br> dirty,<br> firstInvalidFieldIndex<br>}")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("valid")]),e._v(" "),v("td",[e._v("表单校验成功触发")]),e._v(" "),v("td",[e._v("validity 校验结果")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("invalid")]),e._v(" "),v("td",[e._v("表单校验失败触发")]),e._v(" "),v("td",[e._v("validity 校验结果")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ul",[v("li",[v("p",[v("code",[e._v("validate")]),e._v(" 事件的参数")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("validity")]),e._v(" "),v("td",[e._v("校验结果")]),e._v(" "),v("td",[e._v("Object")])]),e._v(" "),v("tr",[v("td",[e._v("valid")]),e._v(" "),v("td",[e._v("校验合法，如果还没校验则为 undefined，一旦校验则为 true 或 false")]),e._v(" "),v("td",[e._v("Boolean/Undefined")])]),e._v(" "),v("tr",[v("td",[e._v("invalid")]),e._v(" "),v("td",[e._v("校验不合法，如果还没校验则为 undefined，一旦校验则为 true 或 false")]),e._v(" "),v("td",[e._v("Boolean")])]),e._v(" "),v("tr",[v("td",[e._v("dirty")]),e._v(" "),v("td",[e._v("表单处于 dirty 状态，也就意味着数据源发生了变化")]),e._v(" "),v("td",[e._v("Boolean")])]),e._v(" "),v("tr",[v("td",[e._v("firstInvalidFieldIndex")]),e._v(" "),v("td",[e._v("第一个校验不合法的字段索引值")]),e._v(" "),v("td",[e._v("Number")])])])]),e._v(" "),v("ul",[v("li",[v("p",[e._v("校验结果 "),v("code",[e._v("validity")]),e._v(" 对象")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("valid")]),e._v(" "),v("td",[e._v("校验是否合法")]),e._v(" "),v("td",[e._v("Boolean/Undefined")])]),e._v(" "),v("tr",[v("td",[e._v("result")]),e._v(" "),v("td",[e._v("校验结果，类似于：<br>{<br> required: {<br>  valid: false,<br>  invalid: true,<br>  message: 'Required.'<br> }<br>}")]),e._v(" "),v("td",[e._v("Object")])]),e._v(" "),v("tr",[v("td",[e._v("dirty")]),e._v(" "),v("td",[e._v("数据是否是已经更新过的")]),e._v(" "),v("td",[e._v("Boolean")])])])])])])])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("table",[v("thead",[v("tr",[v("th",[e._v("方法名")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("返回值")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("submit")]),e._v(" "),v("td",[e._v("提交表单")]),e._v(" "),v("td",[e._v("skipValidate, 默认 false，如果为 true 代表不校验 直接 submit<sup>1.12.2+</sup>")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("reset")]),e._v(" "),v("td",[e._v("重置表单")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("validate(cb)")]),e._v(" "),v("td",[e._v("校验表单")]),e._v(" "),v("td",[e._v("cb: 校验完成后回调函数，主要用于异步校验场景，调用参数为 valid 的值")]),e._v(" "),v("td",[e._v("如果支持 Promise 的话返回值是 Promise 对象（只有 resolved 状态，值为 valid），否则 undefined")])])])])}],!1,null,null,null);t.default=_.exports}}]);