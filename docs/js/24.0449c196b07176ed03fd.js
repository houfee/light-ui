(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{iKB7:function(t,e,n){"use strict";n.r(e);var v=n("KHd+"),o=Object(v.a)({},function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown"},[n("h2",[t._v("Radio")]),t._v(" "),n("blockquote",[n("p",[t._v("New in 1.4.0+")])]),t._v(" "),n("p",[t._v("Radio component. You could set the options and the position of the radio's icon.")]),t._v(" "),n("h3",[t._v("Example")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Basic usage")]),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v('<cube-radio-group v-model="selected" :options="options" />\n')])]),t._v(" "),n("pre",[n("code",{staticClass:"language-js"},[t._v("export default {\n  data() {\n    return {\n      selected: '',\n      options: ['Option1', 'Option2']\n    }\n  }\n}\n")])]),t._v(" "),n("p",[t._v("The value of "),n("code",[t._v("options")]),t._v(" is an array. The default "),n("code",[t._v("selected")]),t._v(" value is  "),n("code",[t._v("''")]),t._v(", which means no option will be selected by defaut. If you clicked one radio option, the "),n("code",[t._v("selected")]),t._v(" will be set as the value of this option.")])]),t._v(" "),n("li",[n("p",[t._v("Configure the label, value, disabled state of options and icon style.")]),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v('<cube-radio-group v-model="selected2" :options="options2" position="right" :hollow-style="true" />\n')])]),t._v(" "),n("pre",[n("code",{staticClass:"language-js"},[t._v("export default {\n  data() {\n    return {\n      selected2: 3,\n      options2: [\n        {\n          label: 'Option1',\n          value: 1\n        },\n        {\n          label: 'Option2',\n          value: 2\n        },\n        {\n          label: 'Option3',\n          value: 3,\n          disabled: true\n        }\n      ]\n    }\n  }\n}\n")])]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("options")]),t._v(" value can be an array which has some object items. You can set "),n("code",[t._v("label")]),t._v(" and "),n("code",[t._v("value")]),t._v(" in each item, and use "),n("code",[t._v("disabled")]),t._v(" to configure whether the radio item's state is disabled.")]),t._v(" "),n("p",[t._v("If the "),n("code",[t._v("position")]),t._v(" is set as "),n("code",[t._v("'right'")]),t._v(", the radio's icon will be posited at the right of the label. Set "),n("code",[t._v("hollow-style=true")]),t._v(" to use hollow-out style.")])]),t._v(" "),n("li",[n("p",[t._v("Horizontal order")]),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v('<cube-radio-group v-model="selected3" :options="options3" :horizontal="true" />\n')])]),t._v(" "),n("pre",[n("code",{staticClass:"language-js"},[t._v("export default {\n  data() {\n    return {\n      selected3: '3',\n      options3: [\n        {\n          label: '1',\n          value: '1'\n        },\n        {\n          label: '2',\n          value: '2'\n        },\n        {\n          label: '3',\n          value: '3',\n          disabled: true\n        }\n      ]\n    }\n  }\n}\n")])]),t._v(" "),n("p",[t._v("You can use "),n("code",[t._v("horizontal")]),t._v(" to configure the style to horizontal layout.")])]),t._v(" "),n("li",[n("p",[t._v("Use slot")]),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v('<cube-radio-group>\n  <cube-radio\n    v-for="(option, index) in options4"\n    :key="index"\n    :option="option"\n    v-model="selected4">\n    <img :src="option.src" />\n  </cube-radio>\n</cube-radio-group>\n')])]),t._v(" "),n("pre",[n("code",{staticClass:"language-js"},[t._v("export default {\n  data() {\n    return {\n      selected4: '1',\n      options4: [\n        {\n          label: '1',\n          value: '1',\n          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'\n        },\n        {\n          label: '2',\n          value: '2',\n          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'\n        },\n        {\n          label: '3',\n          value: '3',\n          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg',\n          disabled: true\n        }\n      ]\n    }\n  }\n}\n")])])]),t._v(" "),n("li",[n("p",[t._v("Set column number<sup>1.12.28</sup>")]),t._v(" "),n("p",[t._v("You can use "),n("code",[t._v("colNum")]),t._v(" to control the display columns")]),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v('<cube-radio-group v-model="selected5" :options="options5" :col-num="colNum" />\n')])]),t._v(" "),n("pre",[n("code",{staticClass:"language-js"},[t._v("export default {\n  data() {\n    return {\n      selected5: '2',\n      options5: [\n        {\n          label: '1',\n          value: '1'\n        },\n        {\n          label: '2',\n          value: '2'\n        },\n        {\n          label: '3',\n          value: '3',\n          disabled: true\n        },\n        {\n          label: '4',\n          value: '4'\n        },\n        {\n          label: '5',\n          value: '5'\n        },\n        {\n          label: '6',\n          value: '6',\n          disabled: true\n        },\n        {\n          label: '7',\n          value: '7'\n        },\n        {\n          label: '8',\n          value: '8'\n        }\n      ],\n      colNum: 3\n    }\n  }\n}\n")])])])]),t._v(" "),n("h3",[t._v("Props configuration")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Attribute")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Accepted Values")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("options")]),t._v(" "),n("td",[t._v("the array of radio options")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("position")]),t._v(" "),n("td",[t._v("icon position")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("left/right")]),t._v(" "),n("td",[t._v("left")])]),t._v(" "),n("tr",[n("td",[t._v("colNum<sup>1.12.28</sup>")]),t._v(" "),n("td",[t._v("column number")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("1")])]),t._v(" "),n("tr",[n("td",[t._v("horizontal")]),t._v(" "),n("td",[t._v("whether use horizontal layout")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true/false")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("hollowStyle")]),t._v(" "),n("td",[t._v("whether is hollow-out style")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true/false")]),t._v(" "),n("td",[t._v("false")])])])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("options")]),t._v(" sub configuration")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Attribute")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("label")]),t._v(" "),n("td",[t._v("the text of label")]),t._v(" "),n("td",[t._v("String")])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("the value of radio item")]),t._v(" "),n("td",[t._v("String/Number")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("whether the radio item is disabled")]),t._v(" "),n("td",[t._v("Boolean")])])])]),t._v(" "),n("p",[t._v("Note: Each item of "),n("code",[t._v("options")]),t._v(" can be an string, Which means both the "),n("code",[t._v("label")]),t._v(" and "),n("code",[t._v("value")]),t._v(" will be set as this string.")]),t._v(" "),n("h3",[t._v("cube-radio Props configuration")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Attribute")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Accepted Values")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("option")]),t._v(" "),n("td",[t._v("option value")]),t._v(" "),n("td",[t._v("Object/String")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("position")]),t._v(" "),n("td",[t._v("icon position")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("left/right")]),t._v(" "),n("td",[t._v("left")])]),t._v(" "),n("tr",[n("td",[t._v("hollow-style")]),t._v(" "),n("td",[t._v("whether is hollow-out style")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true/false")]),t._v(" "),n("td",[t._v("false")])])])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("option")]),t._v(" sub configuration")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Attribute")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("label")]),t._v(" "),n("td",[t._v("the text of label")]),t._v(" "),n("td",[t._v("String")])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("the value of radio item")]),t._v(" "),n("td",[t._v("String/Number")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("whether the radio item is disabled")]),t._v(" "),n("td",[t._v("Boolean")])])])]),t._v(" "),n("h3",[t._v("Events")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Event Name")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Parameters")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("input")]),t._v(" "),n("td",[t._v("triggers when the binding value changes")]),t._v(" "),n("td",[t._v("the value of the chosen radio")])])])])])}],!1,null,null,null);e.default=o.exports}}]);