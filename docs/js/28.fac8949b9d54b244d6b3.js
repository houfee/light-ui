(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{nBbF:function(e,t,n){"use strict";n.r(t);var a=n("KHd+"),v=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown"},[n("h2",[e._v("ScrollNav")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("ScrollNav component. You can use it to sticky your navigation bar and content.")]),e._v(" "),n("h3",[e._v("Example")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Basic usage - Default")]),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<cube-scroll-nav @change="changeHandler">\n  <cube-scroll-nav-panel\n    v-for="item in data"\n    :key="item.name"\n    :label="item.name">\n    <ul>\n      <li v-for="food in item.foods">\n        <div>\n          <img :src="food.icon">\n          <p>'+e._s(e.food.name)+"</p>\n        </div>\n      </li>\n    </ul>\n  </cube-scroll-nav-panel>\n</cube-scroll-nav>\n")])]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6)]),e._v(" "),n("li",[n("p",[e._v("Side Style")]),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<cube-scroll-nav\n  :side="true"\n  :data="data"\n  :current="current"\n  @change="changeHandler"\n  @sticky-change="stickyChangeHandler">\n  <ul class="prepend-header" slot="prepend">\n    <li>11</li>\n    <li>22</li>\n    <li>333</li>\n  </ul>\n  <cube-scroll-nav-panel\n    v-for="item in data"\n    :key="item.name"\n    :label="item.name"\n    :title="item.name">\n    <ul>\n      <li v-for="food in item.foods">\n        <div>\n          <img :src="food.icon">\n          <p>'+e._s(e.food.name)+"</p>\n        </div>\n      </li>\n    </ul>\n  </cube-scroll-nav-panel>\n</cube-scroll-nav>\n")])]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12)])]),e._v(" "),n("h3",[e._v("Props")]),e._v(" "),n("h4",[e._v("CubeScrollNav")]),e._v(" "),e._m(13),e._v(" "),n("h4",[e._v("CubeScrollNavPanel")]),e._v(" "),e._m(14),e._v(" "),n("h3",[e._v("Slot")]),e._v(" "),e._m(15),e._v(" "),n("h3",[e._v("Events")]),e._v(" "),e._m(16),e._v(" "),n("h3",[e._v("Instance methods")]),e._v(" "),e._m(17)])},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("blockquote",[n("p",[e._v("New in 1.10.0+")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-js"},[e._v("import goodsData from 'example/data/goods-list.json'\n\nconst goods = goodsData.goods\n\nexport default {\n  data() {\n    return {\n      data: goods\n    }\n  },\n  methods: {\n    changeHandler(label) {\n      console.log('changed to:', label)\n    }\n  }\n}\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("code",[e._v("goods")]),e._v(":")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-js"},[e._v('"goods": [\n  {\n    "name": "热销榜",\n    "type": -1,\n    "foods": [\n      {\n        "name": "皮蛋瘦肉粥",\n        // ...\n        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",\n        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"\n      },\n      // ...\n    ]\n  },\n  // ...\n]\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("code",[e._v("cube-scroll-nav")]),e._v(" should contains "),n("code",[e._v("cube-scroll-nav-panel")]),e._v(" which is the navigation target panel content.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("code",[e._v("cube-scroll-nav-panel")]),e._v(" required Prop: "),n("code",[e._v("label")]),e._v("(the key of panel).")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("code",[e._v("change")]),e._v(" event will be triggered when navigation active item changed.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-js"},[e._v("import goodsData from 'example/data/goods-list.json'\n\nconst goods = goodsData.goods\n\nexport default {\n  components: {\n    CubePage\n  },\n  data() {\n    return {\n      data: goods,\n      current: goods[3].name\n    }\n  },\n  methods: {\n    changeHandler(label) {\n      console.log('changed to:', label)\n    },\n    stickyChangeHandler(current) {\n      console.log('sticky-change', current)\n    }\n  }\n}\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If set "),n("code",[e._v("side")]),e._v(" to "),n("code",[e._v("true")]),e._v(" then the navigation bar will be at the side position.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("code",[e._v("data")]),e._v(" is the data source, it will be passed to "),n("code",[e._v("cube-scroll")]),e._v(" component, if the "),n("code",[e._v("data")]),e._v(" updated then "),n("code",[e._v("cube-scroll")]),e._v(" will be auto refreshed.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("code",[e._v("current")]),e._v(" is the default navigation value(label of panel), if set this value then the target panel will be auto scrolled to the top of container.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("code",[e._v("sticky-change")]),e._v(" event will be triggered when the navigation bar's sticky state changed. The parameter is one of "),n("code",[e._v("''")]),e._v(", "),n("code",[e._v("'cube-scroll-nav-bar'")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You can use "),n("code",[e._v("prepend")]),e._v(" slot to insert your own content before the main content.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Attribute")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Accepted Values")]),e._v(" "),n("th",[e._v("Default")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("data")]),e._v(" "),n("td",[e._v("optional, data source")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("side")]),e._v(" "),n("td",[e._v("If set to "),n("code",[e._v("true")]),e._v(" then the navigation bar will be at the side position")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true/false")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("current")]),e._v(" "),n("td",[e._v("the default navigation value(label of panel)")]),e._v(" "),n("td",[e._v("String/Number")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("''")])]),e._v(" "),n("tr",[n("td",[e._v("speed")]),e._v(" "),n("td",[e._v("speed of navigating to target panel")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("300")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Attribute")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Accepted Values")]),e._v(" "),n("th",[e._v("Default")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("label")]),e._v(" "),n("td",[e._v("required, the key of panel")]),e._v(" "),n("td",[e._v("String/Number")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("title")]),e._v(" "),n("td",[e._v("the title of panel, can be a HTML string value")]),e._v(" "),n("td",[e._v("String/Number")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("default equal to "),n("code",[e._v("label")]),e._v(" Prop")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Scope Parameters")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("default")]),e._v(" "),n("td",[e._v("default panel content")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("prepend")]),e._v(" "),n("td",[e._v("prepend content")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("bar")]),e._v(" "),n("td",[e._v("navigation bar content, you should use "),n("code",[e._v("cube-scroll-nav-bar")]),e._v(" component to define your own navigation bar content")]),e._v(" "),n("td",[e._v("labels: the collection of all panel labels<br>txts: the collection of all panel titles<br>current: current active navigation value(label of panel)")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Event Name")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Parameters")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("change")]),e._v(" "),n("td",[e._v("triggers when navigation active item changed")]),e._v(" "),n("td",[e._v("active - active navigation value(label of panel)")])]),e._v(" "),n("tr",[n("td",[e._v("sticky-change")]),e._v(" "),n("td",[e._v("triggers when the navigation bar's sticky state changed")]),e._v(" "),n("td",[e._v("current - if navigation bar is fixed then this value will be 'cube-scroll-nav-bar', otherwise this value will be ''")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Method name")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("refresh")]),e._v(" "),n("td",[e._v("You can call this method when content updated")])])])])}],!1,null,null,null);t.default=v.exports}}]);