(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{pCG1:function(e,t,n){"use strict";n.r(t);var i=n("KHd+"),c=Object(i.a)({},function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown"},[n("h2",[e._v("Swipe")]),e._v(" "),n("blockquote",[n("p",[e._v("New in 1.5.0+")])]),e._v(" "),n("p",[e._v("The Swipe component, which provides a WeChat list left slip function, makes it easy to do some functional operations on the list items.")]),e._v(" "),n("h3",[e._v("Example")]),e._v(" "),n("p",[n("code",[e._v("Swipe")]),e._v(" demo code is "),n("a",{attrs:{href:"https://github.com/didi/cube-ui/tree/master/example/pages/swipe"}},[e._v("here")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Basic Usage")]),e._v(" "),n("p",[e._v("The common scenario of "),n("code",[e._v("Swipe")]),e._v(" component is to match "),n("code",[e._v("Scroll")]),e._v(" components. It can not only scroll vertically, but also slide out some buttons to do list items. Of course, "),n("code",[e._v("Swipe")]),e._v(" components can also be used separately.")]),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<template>\n <div class="swipe-wrapper">\n    <cube-scroll>\n      <cube-swipe\n          @item-click="onItemClick"\n          @btn-click="onBtnClick"\n          :data="swipeData">\n      </cube-swipe>\n    </cube-scroll>\n  </div>\n</template>\n')])]),e._v(" "),n("pre",[n("code",{staticClass:"language-js"},[e._v("export default {\n  data() {\n    return {\n      swipeData: [{\n        item: {\n          text: '测试1',\n          value: 1\n        },\n        btns: [\n          {\n            action: 'clear',\n            text: '不再关注',\n            color: '#c8c7cd'\n          },\n          {\n            action: 'delete',\n            text: '删除',\n            color: '#ff3a32'\n          }\n        ]\n      }, {\n        item: {\n          text: '测试2',\n          value: 2\n        },\n        btns: [\n          {\n            action: 'clear',\n            text: '不再关注',\n            color: '#c8c7cd'\n          },\n          {\n            action: 'delete',\n            text: '删除',\n            color: '#ff3a32'\n          }\n        ]\n      }, {\n        item: {\n          text: '测试3',\n          value: 3\n        },\n        btns: [\n          {\n            action: 'clear',\n            text: '不再关注',\n            color: '#c8c7cd'\n          },\n          {\n            action: 'delete',\n            text: '删除',\n            color: '#ff3a32'\n          }\n        ]\n      }]\n    }\n  },\n  methods: {\n    onItemClick(item) {\n      console.log('click item:', item)\n    },\n    onBtnClick(btn, index) {\n      if (btn.action === 'delete') {\n        this.$createActionSheet({\n          title: '确认要删除吗',\n          active: 0,\n          data: [\n            {content: '删除'}\n          ],\n          onSelect: () => {\n            this.swipeData.splice(index, 1)\n          }\n        }).show()\n      }\n    }\n  }\n}\n")])]),e._v(" "),n("p",[e._v("If the "),n("code",[e._v("Swipe")]),e._v(" component uses a default slot, you need to pass the data structure shown in the example.")])]),e._v(" "),n("li",[n("p",[e._v("Custom slots")]),e._v(" "),n("p",[e._v("In fact, our more common requirement is the need for a display of the content of a custom list, so the "),n("code",[e._v("Swipe")]),e._v(" component also supports the use of slots.")]),e._v(" "),n("p",[e._v("The default slot can be used with the "),n("code",[e._v("cube-swipe-item")]),e._v(" component to realize the loop of the list. A custom slot is very flexible, but it also need to manually write some logic, for example if you want to customize the list when deleted animation, need to use "),n("code",[e._v("transition-group")]),e._v(" to manage each need to manually activate the "),n("code",[e._v("swipe-item")]),e._v(" contraction, as shown in the example code.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("1.11+")]),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<template>\n  <div class="swipe-wrapper">\n    <cube-scroll>\n      <cube-swipe>\n        <transition-group name="swipe" tag="ul">\n          <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">\n            <cube-swipe-item\n                ref="swipeItem"\n                :btns="data.btns"\n                :index="index"\n                @btn-click="onBtnClick">\n              <div @click="onItemClick(data.item, index)" class="item-inner">\n                <div class="icon">\n                  <img width="60" height="60" :src="data.item.imgurl">\n                </div>\n                <div class="text">\n                  <h2 class="item-name" v-html="data.item.name"></h2>\n                  <p class="item-desc" v-html="data.item.desc"></p>\n                </div>\n              </div>\n            </cube-swipe-item>\n          </li>\n        </transition-group>\n      </cube-swipe>\n    </cube-scroll>\n  </div>\n</template>\n')])]),e._v(" "),n("pre",[n("code",{staticClass:"language-js"},[e._v("export default {\n  data() {\n    return {\n      swipeData: [\n        {\n          item: {\n            id: '3646653877',\n            name: '还不是因为你长得不好看',\n            desc: '伤感：歌词再狠，也抵不过现实伤人',\n            imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'\n          },\n          btns: [\n            {\n              action: 'clear',\n              text: '不再关注',\n              color: '#c8c7cd'\n            },\n            {\n              action: 'delete',\n              text: '删除',\n              color: '#ff3a32'\n            }\n          ]\n        },\n        {\n          item: {\n            id: '1789676645',\n            name: '秋水浮萍任飘渺',\n            desc: '『武侠配乐』快意恩仇江湖情',\n            imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'\n          },\n          btns: [\n            {\n              action: 'clear',\n              text: '不再关注',\n              color: '#c8c7cd'\n            },\n            {\n              action: 'delete',\n              text: '删除',\n              color: '#ff3a32'\n            }\n          ]\n        },\n        {\n          item: {\n            id: '3649034125',\n            name: '念葳蕊',\n            desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',\n            imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'\n          },\n          btns: [\n            {\n              action: 'clear',\n              text: '不再关注',\n              color: '#c8c7cd'\n            },\n            {\n              action: 'delete',\n              text: '删除',\n              color: '#ff3a32'\n            }\n          ]\n        },\n      ]\n    }\n  },\n  methods: {\n    onItemClick(item) {\n      console.log('click item:', item)\n    },\n    onBtnClick(btn, index) {\n      if (btn.action === 'delete') {\n        this.$createActionSheet({\n          title: '确认要删除吗',\n          active: 0,\n          data: [\n            {content: '删除'}\n          ],\n          onSelect: () => {\n            this.swipeData.splice(index, 1)\n          }\n        }).show()\n      } else {\n        this.$refs.swipeItem[index].shrink()\n      }\n    }\n  }\n}\n")])])]),e._v(" "),n("li",[n("p",[e._v("Before 1.11")]),e._v(" "),n("p",[e._v("You need to handle CubeSwipeItem "),n("code",[e._v("active")]),e._v(" event "),n("code",[e._v("onItemActive")]),e._v(":")]),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<template>\n  <div class="swipe-wrapper">\n    <cube-scroll>\n      <cube-swipe>\n        <transition-group name="swipe" tag="ul">\n          <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">\n            <cube-swipe-item\n                ref="swipeItem"\n                :btns="data.btns"\n                :index="index"\n                @btn-click="onBtnClick"\n                @active="onItemActive">\n              <div @click="onItemClick(data.item, index)" class="item-inner">\n                <div class="icon">\n                  <img width="60" height="60" :src="data.item.imgurl">\n                </div>\n                <div class="text">\n                  <h2 class="item-name" v-html="data.item.name"></h2>\n                  <p class="item-desc" v-html="data.item.desc"></p>\n                </div>\n              </div>\n            </cube-swipe-item>\n          </li>\n        </transition-group>\n      </cube-swipe>\n    </cube-scroll>\n  </div>\n</template>\n')])]),e._v(" "),n("pre",[n("code",{staticClass:"language-js"},[e._v("export default {\n  data() {\n    return {\n      swipeData: [\n        {\n          item: {\n            id: '3646653877',\n            name: '还不是因为你长得不好看',\n            desc: '伤感：歌词再狠，也抵不过现实伤人',\n            imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'\n          },\n          btns: [\n            {\n              action: 'clear',\n              text: '不再关注',\n              color: '#c8c7cd'\n            },\n            {\n              action: 'delete',\n              text: '删除',\n              color: '#ff3a32'\n            }\n          ]\n        },\n        {\n          item: {\n            id: '1789676645',\n            name: '秋水浮萍任飘渺',\n            desc: '『武侠配乐』快意恩仇江湖情',\n            imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'\n          },\n          btns: [\n            {\n              action: 'clear',\n              text: '不再关注',\n              color: '#c8c7cd'\n            },\n            {\n              action: 'delete',\n              text: '删除',\n              color: '#ff3a32'\n            }\n          ]\n        },\n        {\n          item: {\n            id: '3649034125',\n            name: '念葳蕊',\n            desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',\n            imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'\n          },\n          btns: [\n            {\n              action: 'clear',\n              text: '不再关注',\n              color: '#c8c7cd'\n            },\n            {\n              action: 'delete',\n              text: '删除',\n              color: '#ff3a32'\n            }\n          ]\n        },\n      ]\n    }\n  },\n  created() {\n    this.activeIndex = -1\n  },\n  methods: {\n    onItemClick(item) {\n      console.log('click item:', item)\n    },\n    onBtnClick(btn, index) {\n      if (btn.action === 'delete') {\n        this.$createActionSheet({\n          title: '确认要删除吗',\n          active: 0,\n          data: [\n            {content: '删除'}\n          ],\n          onSelect: () => {\n            this.swipeData.splice(index, 1)\n          }\n        }).show()\n      } else {\n        this.$refs.swipeItem[index].shrink()\n      }\n    },\n    onItemActive(index) {\n      if (index === this.activeIndex) {\n        return\n      }\n      if (this.activeIndex !== -1) {\n        const activeItem = this.$refs.swipeItem[this.activeIndex]\n        activeItem.shrink()\n      }\n      this.activeIndex = index\n    }\n  }\n}\n")])])])])])]),e._v(" "),n("h3",[e._v("Props configuration")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("cube-swipe")]),e._v(" configuration")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Attribute")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Accepted Values")]),e._v(" "),n("th",[e._v("Default")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("data")]),e._v(" "),n("td",[e._v("For "),n("code",[e._v("swipe")]),e._v(" list rendered data, when you need to use the built-in default slot, this parameter will be passed. Every item in the array is an Object type, including "),n("code",[e._v("item")]),e._v(" and "),n("code",[e._v("btns")]),e._v(". These two parameters are described in "),n("code",[e._v("cube-swipe-item")]),e._v(". If a custom slot is used, this value may not be passed.")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("autoShrink")]),e._v(" "),n("td",[e._v("Decide whether to automatically shrink the slider when the button is clicked, If you use a custom slot, you can pass this value directly to the "),n("code",[e._v("cube-swipe-item")]),e._v(".")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("cube-swipe-item")]),e._v(" 配置")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Attribute")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Accepted Values")]),e._v(" "),n("th",[e._v("Default")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("item")]),e._v(" "),n("td",[e._v("Data for "),n("code",[e._v("swipe-item")]),e._v(" list item rendering, when you need to use the built-in default slot, this parameter must be transmitted, and there are 2 fields, "),n("code",[e._v("value")]),e._v(" and "),n("code",[e._v("text")]),e._v(", representing the value of the data item and the displayed copy respectively, but if you use custom slot, you can not pass this value.")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("{}")])]),e._v(" "),n("tr",[n("td",[e._v("btns")]),e._v(" "),n("td",[e._v("For "),n("code",[e._v("swipe-item")]),e._v(" list item rendering button array, each item of the array is a Object type. It contains at least 2 fields, "),n("code",[e._v("text")]),e._v(" and "),n("code",[e._v("color")]),e._v(", which represent the copy and color of the button respectively.")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("index")]),e._v(" "),n("td",[e._v("The index value of the current "),n("code",[e._v("swpie-item")]),e._v(" in the entire list, must be passed.")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-1")])]),e._v(" "),n("tr",[n("td",[e._v("autoShrink")]),e._v(" "),n("td",[e._v("Decide whether to automatically shrink the slider when the button is clicked.")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("h3",[e._v("Events")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("cube-swipe")]),e._v(" event")])]),e._v(" "),n("p",[e._v("When you use a custom slot, you can listen directly to the events on the "),n("code",[e._v("cube-swipe-item")]),e._v(".")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Event Name")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Parameters 1")]),e._v(" "),n("th",[e._v("Parameters 2")]),e._v(" "),n("th",[e._v("Parameters 3")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("item-click")]),e._v(" "),n("td",[e._v("Triggered when the list item is clicked")]),e._v(" "),n("td",[e._v("Clicked list item")]),e._v(" "),n("td",[e._v("The Index of the clicked list item in the list")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("btn-click")]),e._v(" "),n("td",[e._v("Triggered when the button is clicked")]),e._v(" "),n("td",[e._v("Clicked button")]),e._v(" "),n("td",[e._v("The index of the clicked button in the list")]),e._v(" "),n("td",[e._v("the list item<sup>1.9.7</sup>")])])])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("cube-swipe-item")]),e._v(" event")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Event Name")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Parameters 1")]),e._v(" "),n("th",[e._v("Parameters 2")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("item-click")]),e._v(" "),n("td",[e._v("Triggered when the list item is clicked")]),e._v(" "),n("td",[e._v("Clicked list item")]),e._v(" "),n("td",[e._v("The Index of the clicked list item")])]),e._v(" "),n("tr",[n("td",[e._v("btn-click")]),e._v(" "),n("td",[e._v("Triggered when the button is clicked")]),e._v(" "),n("td",[e._v("Clicked button")]),e._v(" "),n("td",[e._v("The index of the clicked button in the list")])]),e._v(" "),n("tr",[n("td",[e._v("active")]),e._v(" "),n("td",[e._v("Triggered when you start sliding one of the list item")]),e._v(" "),n("td",[e._v("The index of the activation item in the list")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("h3",[e._v("Instance methods")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("cube-swipe-item")]),e._v(" instance methods")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Method name")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("shrink")]),e._v(" "),n("td",[e._v("Shrink the swipe item")])])])])])}],!1,null,null,null);t.default=c.exports}}]);