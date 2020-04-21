(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{LOW5:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),i=Object(o.a)({},function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown"},[n("h2",[t._v("Tip")]),t._v(" "),n("p",[n("code",[t._v("Tip")]),t._v(", used to popup tip bubble box.")]),t._v(" "),n("h3",[t._v("Example")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Basic usage")]),t._v(" "),n("p",[t._v("By adding "),n("code",[t._v("ref")]),t._v(" to "),n("code",[t._v("Tip")]),t._v(", you can get the reference to the component and invoke "),n("code",[t._v("show")]),t._v(" or "),n("code",[t._v("hide")]),t._v(" methods which are exposed by "),n("code",[t._v("Tip")]),t._v(" to control the show or hide state of the component.")]),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v('<div class="tip" @click="showTip">\n  <cube-tip ref="tip"></cube-tip>\n</div>\n')])]),t._v(" "),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("export default {\n  methods: {\n    showTip () {\n      this.$refs.tip.show()\n    }\n  }\n}\n")])])]),t._v(" "),n("li",[n("p",[t._v("The position of the small triangle and the bubble box")]),t._v(" "),n("p",[t._v("You can configure the direction of the small triangle by "),n("code",[t._v("direction")]),t._v(" and configure the position of the bubble box by "),n("code",[t._v("style")]),t._v(". Normally, the direction of the small triangle is opposite to the position of the bubble box.")]),t._v(" "),n("pre",[n("code",{staticClass:"language-html"},[t._v('<p class="tip-eg">\n  <span>CubeUI</span>\n  <cube-tip\n      ref="tip"\n      :direction="direction"\n      :style="tipStyle"\n      @close="close"\n      @click="clickHandler">\n    <div>Awesome!</div>\n  </cube-tip>\n  </p>\n</div>\n<cube-button @click="showTip(\'bottom\')">top</cube-button>\n<cube-button @click="showTip(\'top\')">bottom</cube-button>\n<cube-button @click="showTip(\'right\')">left</cube-button>\n<cube-button @click="showTip(\'left\')">right</cube-button>\n')])]),t._v(" "),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("export default {\n  data() {\n    return {\n      direction: '',\n      tipStyle: ''\n    }\n  },\n  methods: {\n    showTip(direction) {\n      this.direction = direction\n      this.$refs.tip.show()\n\n      switch (direction) {\n        case 'top':\n          this.tipStyle = 'left: 100px; top: 100px;'\n          break\n        case 'bottom':\n          this.tipStyle = 'left: 100px; top: 20px;'\n          break\n        case 'left':\n          this.tipStyle = 'left: 200px; top: 60px;'\n          break\n        case 'right':\n          this.tipStyle = 'left: 5px; top: 60px;'\n          break\n      }\n    },\n    close() {\n      console.log('click close button')\n    },\n    clickHandler() {\n      console.log('click tip area')\n    }\n  }\n}\n")])])])]),t._v(" "),n("h3",[t._v("Props configuration")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Attribute")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Accepted Values")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("direction")]),t._v(" "),n("td",[t._v("the direction of the small triangle")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("top/bottom/left/right")]),t._v(" "),n("td",[t._v("left")])]),t._v(" "),n("tr",[n("td",[t._v("offsetLeft")]),t._v(" "),n("td",[t._v("the distance between the small triangle and the left part of x axis")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("offsetTop")]),t._v(" "),n("td",[t._v("the distance between the small triangle and the origin of y axis")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("offsetRight")]),t._v(" "),n("td",[t._v("the distance between the small triangle and the right part of x axis")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("offsetBottom")]),t._v(" "),n("td",[t._v("the distance between the small triangle and the bottom part of y axis")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("0")])])])]),t._v(" "),n("h3",[t._v("Slot")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("name")]),t._v(" "),n("th",[t._v("description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("-")]),t._v(" "),n("td",[t._v("the content shown inside the tip component")])])])]),t._v(" "),n("h3",[t._v("Events")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Event Name")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Parameters")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("close")]),t._v(" "),n("td",[t._v("the event that exposed when clicking the close button of tips, which will hide at the same time")]),t._v(" "),n("td",[t._v("None")])]),t._v(" "),n("tr",[n("td",[t._v("clicked")]),t._v(" "),n("td",[t._v("the event that exposed when clicking the content of tips, which will hide at the same time")]),t._v(" "),n("td",[t._v("None")])])])])])}],!1,null,null,null);e.default=i.exports}}]);