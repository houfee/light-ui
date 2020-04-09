(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{AEKp:function(e,t,v){"use strict";v.r(t);var _=v("KHd+"),n=Object(_.a)({},function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"markdown"},[v("h2",[e._v("DatePicker 组件")]),e._v(" "),v("blockquote",[v("p",[e._v("1.7.0 新增")])]),e._v(" "),v("p",[e._v("日期选择器，可用于日期选择，选择粒度的灵活配置，如年月日、时分秒、年月日时分秒、年月等。")]),e._v(" "),v("p",[v("strong",[e._v("注：")]),e._v(" 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 "),v("a",{attrs:{href:"#/zh-CN/docs/create-api"}},[e._v("create-api")]),e._v("。")]),e._v(" "),v("h3",[e._v("示例")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("基本用法")]),e._v(" "),v("p",[e._v("通过 "),v("code",[e._v("$createDatePicker")]),e._v(" 创建一个组件实例，配置 "),v("code",[e._v("min")]),e._v("、"),v("code",[e._v("max")]),e._v(" 设定选择的日期范围，还可以通过 "),v("code",[e._v("value")]),e._v(" 设置当前选择的日期。")]),e._v(" "),v("pre",[v("code",{staticClass:"language-html"},[e._v('<cube-button @click="showDatePicker">Date Picker</cube-button>\n')])]),e._v(" "),v("pre",[v("code",{staticClass:"language-js"},[e._v("export default {\n  methods: {\n    showDatePicker() {\n      if (!this.datePicker) {\n        this.datePicker = this.$createDatePicker({\n          title: 'Date Picker',\n          min: new Date(2008, 7, 8),\n          max: new Date(2020, 9, 20),\n          value: new Date(),\n          onSelect: this.selectHandle,\n          onCancel: this.cancelHandle\n        })\n      }\n\n      this.datePicker.show()\n    },\n    selectHandle(date, selectedVal, selectedText) {\n      this.$createDialog({\n        type: 'warn',\n        content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,\n        icon: 'cubeic-alert'\n      }).show()\n    },\n    cancelHandle() {\n      this.$createToast({\n        type: 'correct',\n        txt: 'Picker canceled',\n        time: 1000\n      }).show()\n    }\n  }\n}\n")])])]),e._v(" "),v("li",[v("p",[e._v("列的配置")]),e._v(" "),v("p",[v("code",[e._v("DatePicker")]),e._v(" 有一个非常灵活的能力，就是可以配置列，总共是年、月、日、时、分、秒六种的列，你可以通过 "),v("code",[e._v("startColumn")]),e._v(" 和 "),v("code",[e._v("columnCount")]),e._v(" 来配置起始列和列数，比如默认的”年月日“选择，是从“年”开始的“三列”，而时分秒，则是从“时”开始的“三列”。")]),e._v(" "),v("pre",[v("code",{staticClass:"language-html"},[e._v('<cube-button @click="showTimePicker">Time Picker</cube-button>\n')])]),e._v(" "),v("pre",[v("code",{staticClass:"language-js"},[e._v("export default {\n  methods: {\n    showTimePicker() {\n      if (!this.timePicker) {\n        this.timePicker = this.$createDatePicker({\n          title: 'Time Picker',\n          min: [8, 0, 0],\n          max: [20, 59, 59],\n          value: new Date(),\n          startColumn: 'hour',\n          onSelect: this.selectHandle,\n          onCancel: this.cancelHandle\n        })\n      }\n\n      this.timePicker.show()\n    },\n    selectHandle(date, selectedVal, selectedText) {\n      this.$createDialog({\n        type: 'warn',\n        content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,\n        icon: 'cubeic-alert'\n      }).show()\n    },\n    cancelHandle() {\n      this.$createToast({\n        type: 'correct',\n        txt: 'Picker canceled',\n        time: 1000\n      }).show()\n    }\n  }\n}\n")])])]),e._v(" "),v("li",[v("p",[e._v("年月日时分秒选择器")]),e._v(" "),v("p",[e._v("同理，如果想要年月日时分秒选择器，则是以“年”开始的六列。")]),e._v(" "),v("pre",[v("code",{staticClass:"language-html"},[e._v('<cube-button @click="showDateTimePicker">Date Time Picker</cube-button>\n')])]),e._v(" "),v("pre",[v("code",{staticClass:"language-js"},[e._v("export default {\n  methods: {\n    showDateTimePicker() {\n      if (!this.dateTimePicker) {\n        this.dateTimePicker = this.$createDatePicker({\n          title: 'Date Time Picker',\n          min: new Date(2008, 7, 8, 8, 0, 0),\n          max: new Date(2020, 9, 20, 20, 59, 59),\n          value: new Date(),\n          columnCount: 6,\n          onSelect: this.selectHandle,\n          onCancel: this.cancelHandle\n        })\n      }\n\n      this.dateTimePicker.show()\n    },\n    selectHandle(date, selectedVal, selectedText) {\n      this.$createDialog({\n        type: 'warn',\n        content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,\n        icon: 'cubeic-alert'\n      }).show()\n    },\n    cancelHandle() {\n      this.$createToast({\n        type: 'correct',\n        txt: 'Picker canceled',\n        time: 1000\n      }).show()\n    }\n  }\n}\n")])])]),e._v(" "),v("li",[v("p",[e._v("日期格式")]),e._v(" "),v("p",[e._v("你还可以通过 "),v("code",[e._v("format")]),e._v(" 属性配置日期格式。")]),e._v(" "),v("pre",[v("code",{staticClass:"language-html"},[e._v('<cube-button @click="showFormatPicker">Use format</cube-button>\n')])]),e._v(" "),v("pre",[v("code",{staticClass:"language-js"},[e._v("export default {\n  methods: {\n    showFormatPicker() {\n      if (!this.formatPicker) {\n        this.formatPicker = this.$createDatePicker({\n          title: 'Use format',\n          min: new Date(2008, 7, 8),\n          max: new Date(2020, 9, 20),\n          value: new Date(),\n          format: {\n            year: 'YY年',\n            month: 'MM月',\n            date: '第 D 日'\n          },\n          onSelect: this.selectHandle,\n          onCancel: this.cancelHandle\n        })\n      }\n\n      this.formatPicker.show()\n    },\n    selectHandle(date, selectedVal, selectedText) {\n      this.$createDialog({\n        type: 'warn',\n        content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,\n        icon: 'cubeic-alert'\n      }).show()\n    },\n    cancelHandle() {\n      this.$createToast({\n        type: 'correct',\n        txt: 'Picker canceled',\n        time: 1000\n      }).show()\n    }\n  }\n}\n")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("columnOrder")]),e._v(" <sup>1.12.14</sup>")]),e._v(" "),v("p",[e._v('针对日期展示格式顺序不是 "年-月-日 小时-分钟-秒" 的场景，可以通过 '),v("code",[e._v("columnOrder")]),e._v(" 来修改展示顺序。例如日期展示顺序为 “月-日-年”，可配置 "),v("code",[e._v("columnOrder")]),e._v(" 值为 "),v("code",[e._v("['month', 'date', 'year']")])]),e._v(" "),v("pre",[v("code",{staticClass:"language-html"},[e._v('<cube-button @click="showChangeOrderPicker">Date Picker(Change order)</cube-button>\n')])]),e._v(" "),v("pre",[v("code",{staticClass:"language-js"},[e._v("export default {\n  methods: {\n    showChangeOrderPicker() {\n       if (!this.changeOrderPicker) {\n         this.changeOrderPicker = this.$createDatePicker({\n           title: 'Date Picker',\n           min: new Date(2008, 7, 8),\n           max: new Date(2020, 9, 20),\n           value: new Date(),\n           columnOrder: ['month', 'date', 'year'],\n           onSelect: this.selectHandle,\n           onCancel: this.cancelHandle\n         })\n       }\n       this.changeOrderPicker.show()\n     }\n  }\n}\n")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("$updateProps")])]),e._v(" "),v("p",[e._v("通过"),v("code",[e._v("$updateProps")]),e._v("方法，可以修改用 createAPI 创建的组件实例的属性。比如 "),v("code",[e._v("DatePicker")]),e._v("中，我们可以修改 "),v("code",[e._v("value")]),e._v(" 属性的值改变当前选择的日期。")]),e._v(" "),v("pre",[v("code",{staticClass:"language-html"},[e._v('<cube-button @click="showUpdatePropsPicker">Use $updateProps</cube-button>\n')])]),e._v(" "),v("pre",[v("code",{staticClass:"language-js"},[e._v("export default {\n  methods: {\n    showUpdatePropsPicker() {\n      if (!this.updatePropsPicker) {\n        this.updatePropsPicker = this.$createDatePicker({\n          title: 'Use $updateProps',\n          min: new Date(2008, 7, 8),\n          max: new Date(2020, 9, 20),\n          value: new Date(),\n          onSelect: this.selectHandle,\n          onCancel: this.cancelHandle\n        })\n      }\n\n      this.updatePropsPicker.show()\n      setTimeout(() => {\n        this.updatePropsPicker.$updateProps({\n          title: 'updated',\n          value: new Date(2010, 9, 1)\n        })\n      }, 1000)\n    },\n    selectHandle(date, selectedVal, selectedText) {\n      this.$createDialog({\n        type: 'warn',\n        content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,\n        icon: 'cubeic-alert'\n      }).show()\n    },\n    cancelHandle() {\n      this.$createToast({\n        type: 'correct',\n        txt: 'Picker canceled',\n        time: 1000\n      }).show()\n    }\n  }\n}\n")])])])]),e._v(" "),v("h3",[e._v("Props 配置")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("可选值")]),e._v(" "),v("th",[e._v("默认值")]),e._v(" "),v("th",[e._v("示例")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("min")]),e._v(" "),v("td",[e._v("可选范围的最小值")]),e._v(" "),v("td",[e._v("Date, Array")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("new Date(2010, 1, 1)")]),e._v(" "),v("td",[e._v("new Date(2008, 7, 8)")])]),e._v(" "),v("tr",[v("td",[e._v("max")]),e._v(" "),v("td",[e._v("可选范围的最大值")]),e._v(" "),v("td",[e._v("Date, Array")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("new Date(2020, 12, 31)")]),e._v(" "),v("td",[e._v("new Date(2020, 9, 20)")])]),e._v(" "),v("tr",[v("td",[e._v("value")]),e._v(" "),v("td",[e._v("当前选择的日期")]),e._v(" "),v("td",[e._v("Date, Array")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("可选范围的最小值")]),e._v(" "),v("td",[e._v("new Date()")])]),e._v(" "),v("tr",[v("td",[e._v("startColumn")]),e._v(" "),v("td",[e._v("起始列")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("year/month/date/hour/minute/second")]),e._v(" "),v("td",[e._v("year")]),e._v(" "),v("td",[e._v("hour")])]),e._v(" "),v("tr",[v("td",[e._v("columnCount")]),e._v(" "),v("td",[e._v("列数")]),e._v(" "),v("td",[e._v("Number")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("3")]),e._v(" "),v("td",[e._v("6")])]),e._v(" "),v("tr",[v("td",[e._v("format<sup>1.8.0+</sup>")]),e._v(" "),v("td",[e._v("日期格式")]),e._v(" "),v("td",[e._v("Object")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("{ year: 'YYYY', month: 'M', date: 'D', hour: 'hh', minute: 'mm', second: 'ss' }")]),e._v(" "),v("td",[e._v("{ year: 'YY年', month: 'MM月', date: '第 D 日' }")])]),e._v(" "),v("tr",[v("td",[e._v("title")]),e._v(" "),v("td",[e._v("标题")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("''")]),e._v(" "),v("td",[e._v("'时间选择'")])]),e._v(" "),v("tr",[v("td",[e._v("subtitle<sup>1.8.1</sup>")]),e._v(" "),v("td",[e._v("副标题")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("''")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("cancelTxt")]),e._v(" "),v("td",[e._v("取消按钮文案")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("'取消'")]),e._v(" "),v("td",[e._v("'返回'")])]),e._v(" "),v("tr",[v("td",[e._v("confirmTxt")]),e._v(" "),v("td",[e._v("确定按钮文案")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("'确定'")]),e._v(" "),v("td",[e._v("'选择'")])]),e._v(" "),v("tr",[v("td",[e._v("swipeTime")]),e._v(" "),v("td",[e._v("快速滑动选择器滚轮时，惯性滚动动画的时长，单位：ms")]),e._v(" "),v("td",[e._v("Number")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("2500")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("visible<sup>1.8.1</sup>")]),e._v(" "),v("td",[e._v("显示状态，是否可见。"),v("code",[e._v("v-model")]),e._v("绑定值")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("true/false")]),e._v(" "),v("td",[e._v("false")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("maskClosable<sup>1.9.6</sup>")]),e._v(" "),v("td",[e._v("点击蒙层是否隐藏")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("true/false")]),e._v(" "),v("td",[e._v("true")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("zIndex<sup>1.9.6</sup>")]),e._v(" "),v("td",[e._v("样式 z-index 的值")]),e._v(" "),v("td",[e._v("Number")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("100")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("columnOrder<sup>1.12.14</sup>")]),e._v(" "),v("td",[e._v("列的展示顺序")]),e._v(" "),v("td",[e._v("Array")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("['year', 'month', 'date', 'hour', 'minute', 'second']")]),e._v(" "),v("td",[e._v("-")])])])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("format")]),e._v(" 子配置项")])]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("默认值")]),e._v(" "),v("th",[e._v("示例")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("year")]),e._v(" "),v("td",[e._v("年的格式，"),v("code",[e._v("YYYY")]),e._v(" 代表完整年份，"),v("code",[e._v("YY")]),e._v(" 仅年份后两位")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[v("code",[e._v("YYYY")])]),e._v(" "),v("td",[v("code",[e._v("YY年")])])]),e._v(" "),v("tr",[v("td",[e._v("month")]),e._v(" "),v("td",[e._v("月的格式，"),v("code",[e._v("M")]),e._v(" 不补 0，"),v("code",[e._v("MM")]),e._v(" 补 0")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[v("code",[e._v("M")])]),e._v(" "),v("td",[v("code",[e._v("MM月")])])]),e._v(" "),v("tr",[v("td",[e._v("date")]),e._v(" "),v("td",[e._v("日的格式，"),v("code",[e._v("D")]),e._v(" 不补 0，"),v("code",[e._v("DD")]),e._v(" 补 0")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[v("code",[e._v("D")])]),e._v(" "),v("td",[v("code",[e._v("第 D 日")])])]),e._v(" "),v("tr",[v("td",[e._v("hour")]),e._v(" "),v("td",[e._v("时的格式，"),v("code",[e._v("h")]),e._v(" 不补 0，"),v("code",[e._v("hh")]),e._v(" 补 0")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[v("code",[e._v("hh")])]),e._v(" "),v("td",[v("code",[e._v("h点")])])]),e._v(" "),v("tr",[v("td",[e._v("minute")]),e._v(" "),v("td",[e._v("分的格式，"),v("code",[e._v("m")]),e._v(" 不补 0，"),v("code",[e._v("mm")]),e._v(" 补 0")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[v("code",[e._v("mm")])]),e._v(" "),v("td",[v("code",[e._v("mm分")])])]),e._v(" "),v("tr",[v("td",[e._v("second")]),e._v(" "),v("td",[e._v("秒的格式，"),v("code",[e._v("s")]),e._v(" 不补 0，"),v("code",[e._v("ss")]),e._v(" 补 0")]),e._v(" "),v("td",[e._v("String")]),e._v(" "),v("td",[v("code",[e._v("ss")])]),e._v(" "),v("td",[v("code",[e._v("ss秒")])])])])]),e._v(" "),v("h3",[e._v("事件")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("事件名")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("参数1")]),e._v(" "),v("th",[e._v("参数2")]),e._v(" "),v("th",[e._v("参数3")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("select")]),e._v(" "),v("td",[e._v("点击确认按钮触发此事件")]),e._v(" "),v("td",[e._v("date: 当前选中日期，Date 类型")]),e._v(" "),v("td",[e._v("selectedVal: 当前选中项每一列的值，Array 类型")]),e._v(" "),v("td",[e._v("selectedText: 当前选中项每一列的文案，Array 类型")])]),e._v(" "),v("tr",[v("td",[e._v("cancel")]),e._v(" "),v("td",[e._v("点击取消按钮触发此事件")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td",[e._v("-")]),e._v(" "),v("td")]),e._v(" "),v("tr",[v("td",[e._v("change")]),e._v(" "),v("td",[e._v("滚轴滚动后触发此事件")]),e._v(" "),v("td",[e._v("index: 当前滚动列次序，Number 类型")]),e._v(" "),v("td",[e._v("selectedIndex: 当前列选中项的索引，Number 类型")]),e._v(" "),v("td")])])]),e._v(" "),v("h3",[e._v("实例方法")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("方法名")]),e._v(" "),v("th",[e._v("说明")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("show")]),e._v(" "),v("td",[e._v("显示")])]),e._v(" "),v("tr",[v("td",[e._v("hide")]),e._v(" "),v("td",[e._v("隐藏")])])])])])}],!1,null,null,null);t.default=n.exports}}]);