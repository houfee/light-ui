(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"J+f8":function(e,t,n){"use strict";n.r(t);var a=n("KHd+"),c=Object(a.a)({},function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown"},[n("h2",[e._v("CascadePicker")]),e._v(" "),n("blockquote",[n("p",[e._v("New in 1.2.0+")])]),e._v(" "),n("p",[n("code",[e._v("CascadePicker")]),e._v(" component is used to implement the cascading change between picker columns. What is the effect of cascade? Considering the usage of province-city-area picker, when the province is changed, you may want the city column to display the exact cities of current province, so does the area column. And the "),n("code",[e._v("CascadePicker")]),e._v(" is here to help you handle this.")]),e._v(" "),n("p",[n("strong",[e._v("Notice:")]),e._v(" Cause this component used create-api, so you should read "),n("a",{attrs:{href:"#/en-US/docs/create-api"}},[e._v("create-api")]),e._v(" first.")]),e._v(" "),n("h3",[e._v("Example")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Basic usage")]),e._v(" "),n("p",[e._v("Comparing to "),n("code",[e._v("Picker")]),e._v(", the required structure of props data is different for "),n("code",[e._v("CascadePicker")]),e._v(". The data structure of "),n("code",[e._v("Picker")]),e._v(" is a two-dimensional array, and each column corresponds to an array. As in "),n("code",[e._v("CascadePicker")]),e._v(", we need a tree structure, that each item of first column has a "),n("code",[e._v("children")]),e._v(" property which contains the corresponding data of following columns. Here is an example.")]),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<cube-button @click="showCascadePicker">Cascade Picker</cube-button>\n')])]),e._v(" "),n("pre",[n("code",{staticClass:"language-js"},[e._v("const cascadeData = [\n  {\n    value: 'Fruit',\n    text: 'Fruit',\n    children: [\n      {\n        value: 'Apple',\n        text: 'Apple',\n        children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]\n      },\n      {\n        value: 'Orange',\n        text: 'Orange',\n        children: [{ value: 3, text: 'Three'}, { value: 4, text: 'Four' }]\n      }\n    ]\n  },\n  {\n    value: 'Drink',\n    text: 'Drink',\n    children: [\n      {\n        value: 'Coffee',\n        text: 'Coffee',\n        children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]\n      },\n      {\n        value: 'Tea',\n        text: 'Tea',\n        children: [{ value: 1, text: 'One' }, { value: 3, text: 'Three'}]\n      }\n    ]\n  }\n]\nexport default {\n  mounted () {\n    this.cascadePicker = this.$createCascadePicker({\n      title: 'Cascade Picker',\n      data: cascadeData,\n      selectedIndex: [0, 1, 0],\n      onSelect: this.selectHandle,\n      onCancel: this.cancelHandle\n    })\n  },\n  methods: {\n    showCascadePicker() {\n      this.cascadePicker.show()\n    },\n    selectHandle(selectedVal, selectedIndex, selectedText) {\n      this.$createDialog({\n        type: 'warn',\n        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,\n        icon: 'cubeic-alert'\n      }).show()\n    },\n    cancelHandle() {\n      this.$createToast({\n        type: 'correct',\n        txt: 'Picker canceled',\n        time: 1000\n      }).show()\n    }\n  }\n}\n")])]),e._v(" "),n("p",[e._v("When the first column goes to "),n("code",[e._v("Fruit")]),e._v(", the data of second column are "),n("code",[e._v("Apple")]),e._v(" and "),n("code",[e._v("Orange")]),e._v(". And so on, when the second column goes to on "),n("code",[e._v("Orange")]),e._v(", the data of third column are "),n("code",[e._v("Three")]),e._v(" and "),n("code",[e._v("Four")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Address Picker")]),e._v(" "),n("p",[e._v("For address picker, the only thing you need to do is constructing the cascading data.")]),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<cube-button @click="showAddressPicker">Address Picker</cube-button>\n')])]),e._v(" "),n("pre",[n("code",{staticClass:"language-js"},[e._v("import { provinceList, cityList, areaList } from 'example/data/area'\n\nconst addressData = provinceList\naddressData.forEach(province => {\n  province.children = cityList[province.value]\n  province.children.forEach(city => {\n    city.children = areaList[city.value]\n  })\n})\n\nexport default {\n  mounted () {\n    this.addressPicker = this.$createCascadePicker({\n      title: 'City Picker',\n      data: addressData,\n      onSelect: this.selectHandle,\n      onCancel: this.cancelHandle\n    })\n  },\n  methods: {\n    showAddressPicker() {\n      this.addressPicker.show()\n    },\n    selectHandle(selectedVal, selectedIndex, selectedText) {\n      this.$createDialog({\n        type: 'warn',\n        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,\n        icon: 'cubeic-alert'\n      }).show()\n    },\n    cancelHandle() {\n      this.$createToast({\n        type: 'correct',\n        txt: 'Picker canceled',\n        time: 1000\n      }).show()\n    }\n  }\n}\n")])])]),e._v(" "),n("li",[n("p",[e._v("Instance method "),n("code",[e._v("setData")])]),e._v(" "),n("p",[e._v("You could use "),n("code",[e._v("setData")]),e._v(" to reset the cascading data and selected index of "),n("code",[e._v("CascadePicker")]),e._v(" instance no matter whether the picker is visible.")]),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<cube-button @click="showSetDataPicker">SetData Picker</cube-button>\n')])]),e._v(" "),n("pre",[n("code",{staticClass:"language-js"},[e._v("export default {\n  mounted () {\n    this.setDataPicker = this.$createCascadePicker({\n      title: 'Set Data',\n      onSelect: this.selectHandle,\n      onCancel: this.cancelHandle\n    })\n  },\n  methods: {\n    showSetDataPicker() {\n      // setData when the picker is invisible.\n      this.setDataPicker.setData(cascadeData)\n\n      this.setDataPicker.show()\n      setTimeout(() => {\n        // setData when the picker is visible.\n        this.setDataPicker.setData(addressData, [1, 1, 0])\n      }, 1000)\n    },\n    selectHandle(selectedVal, selectedIndex, selectedText) {\n      this.$createDialog({\n        type: 'warn',\n        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,\n        icon: 'cubeic-alert'\n      }).show()\n    },\n    cancelHandle() {\n      this.$createToast({\n        type: 'correct',\n        txt: 'Picker canceled',\n        time: 1000\n      }).show()\n    }\n  }\n}\n")])])]),e._v(" "),n("li",[n("p",[e._v("Async load data")]),e._v(" "),n("p",[e._v("When the data is too large, it will be really hard to construct the whole cascade data tree at beginning. For this case, you could use the property "),n("code",[e._v("async")]),e._v(" to enable async load data and update the data at the event "),n("code",[e._v("change")]),e._v(". Before the data is updated, we will block the confirm handler temporarily.")]),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<cube-button @click="showAsyncPicker">Async Load Data</cube-button>\n')])]),e._v(" "),n("pre",[n("code",{staticClass:"language-js"},[e._v("import { provinceList, cityList, areaList } from 'example/data/area'\n\nconst asyncData = provinceList\nconst asyncSelectedIndex = [0, 0, 0]\nasyncData[0].children = cityList[asyncData[0].value]\nasyncData[0].children[0].children = areaList[asyncData[0].children[0].value]\n\nexport default {\n  mounted () {\n    this.asyncPicker = this.$createCascadePicker({\n      title: 'Async Load Data',\n      async: true,\n      data: asyncData,\n      selectedIndex: asyncSelectedIndex.slice(),\n      onSelect: this.selectHandle,\n      onCancel: this.cancelHandle,\n      onChange: this.asyncChangeHandle\n    })\n  },\n  methods: {\n    showAsyncPicker() {\n      this.asyncPicker.show()\n    },\n    asyncChangeHandle(i, newIndex) {\n      if (newIndex !== asyncSelectedIndex[i]) {\n        asyncSelectedIndex[i] = newIndex\n        // If the first two column is changed, request the data for rest columns.\n        if (i < 2) {\n          // Mock async load.\n          setTimeout(() => {\n            if (i === 0) {\n              const current = asyncData[newIndex]\n              current.children = current.children || cityList[current.value]\n              current.children[0].children = current.children[0].children || areaList[current.children[0].value]\n              asyncSelectedIndex[1] = 0\n              asyncSelectedIndex[2] = 0\n            }\n\n            if (i === 1) {\n              const current = asyncData[asyncSelectedIndex[0]].children[newIndex]\n              current.children = current.children || areaList[current.value]\n              asyncSelectedIndex[2] = 0\n            }\n            this.asyncPicker.setData(asyncData, asyncSelectedIndex)\n          }, 500)\n        }\n      }\n    },\n    selectHandle(selectedVal, selectedIndex, selectedText) {\n      this.$createDialog({\n        type: 'warn',\n        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,\n        icon: 'cubeic-alert'\n      }).show()\n    },\n    cancelHandle() {\n      this.$createToast({\n        type: 'correct',\n        txt: 'Picker canceled',\n        time: 1000\n      }).show()\n    }\n  }\n}\n")])])])]),e._v(" "),n("h3",[e._v("Props configuration")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Attribute")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Default")]),e._v(" "),n("th",[e._v("Accepted Values")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("data")]),e._v(" "),n("td",[e._v("the cascading data used to init option items")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("selectedIndex")]),e._v(" "),n("td",[e._v("the index of the selected item, corresponding content will be displayed when picker shows")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")]),e._v(" "),n("td",[e._v("[1]")])]),e._v(" "),n("tr",[n("td",[e._v("async<sup>1.8.1</sup>")]),e._v(" "),n("td",[e._v("async load data")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("title")]),e._v(" "),n("td",[e._v("title")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("''")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("subtitle<sup>1.8.1</sup>")]),e._v(" "),n("td",[e._v("subtitle")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("''")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("cancelTxt")]),e._v(" "),n("td",[e._v("the text of the cancel button")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("'取消'")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("confirmTxt")]),e._v(" "),n("td",[e._v("the text of the confirm button")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("'确定'")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("swipeTime")]),e._v(" "),n("td",[e._v("the duration of the momentum animation when user flicks the wheel of the picker, Unit: ms")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("2500")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("alias")]),e._v(" "),n("td",[e._v("configure the alias of "),n("code",[e._v("value")]),e._v(" and "),n("code",[e._v("text")]),e._v(", used as same as the alias of "),n("code",[e._v("Picker")]),e._v(" component")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("{}")]),e._v(" "),n("td",[e._v("{ value: 'id', text: 'name'}")])]),e._v(" "),n("tr",[n("td",[e._v("visible<sup>1.8.1</sup>")]),e._v(" "),n("td",[e._v("whether visible. Bind to "),n("code",[e._v("v-model")])]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true/false")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("maskClosable<sup>1.9.6</sup>")]),e._v(" "),n("td",[e._v("whether hide the component when clicked the mask layer")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true/false")]),e._v(" "),n("td",[e._v("true")])]),e._v(" "),n("tr",[n("td",[e._v("zIndex<sup>1.9.6</sup>")]),e._v(" "),n("td",[e._v("the value of the style z-index")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("100")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("data")]),e._v(" sub configuration")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Attribute")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Default")]),e._v(" "),n("th",[e._v("Example")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("text")]),e._v(" "),n("td",[e._v("the displayed text of each item")]),e._v(" "),n("td",[e._v("String/Number")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("the value of each item")]),e._v(" "),n("td",[e._v("String/Number/Boolean")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("h3",[e._v("Events")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Event Name")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Parameters 1")]),e._v(" "),n("th",[e._v("Parameters 2")]),e._v(" "),n("th",[e._v("Parameters 3")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("select")]),e._v(" "),n("td",[e._v("triggers when clicking the confirm button")]),e._v(" "),n("td",[e._v("selectedVal: Array, values of each columns in current selected item")]),e._v(" "),n("td",[e._v("selectedIndex: Array, indexes of each columns in current selected item")]),e._v(" "),n("td",[e._v("selectedText: Array, texts of each columns in current selected item")])]),e._v(" "),n("tr",[n("td",[e._v("change")]),e._v(" "),n("td",[e._v("triggers when the roller scrolls")]),e._v(" "),n("td",[e._v("index: Number, index of current scrolling roller")]),e._v(" "),n("td",[e._v("selectedIndex: Number, index of selected item in current column")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("cancel")]),e._v(" "),n("td",[e._v("triggers when clicking the cancel button")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td")])])]),e._v(" "),n("h3",[e._v("Instance methods")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Method name")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Parameters 1")]),e._v(" "),n("th",[e._v("Parameters 2")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("show")]),e._v(" "),n("td",[e._v("show")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("hide")]),e._v(" "),n("td",[e._v("hide")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("setData")]),e._v(" "),n("td",[e._v("reset the cascading data and selected index")]),e._v(" "),n("td",[e._v("Array, the cascading data")]),e._v(" "),n("td",[e._v("Array, the indexes of selected item in each column")])])])])])}],!1,null,null,null);t.default=c.exports}}]);