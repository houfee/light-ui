(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"8Aj5":function(t,n,e){"use strict";e.r(n);var v=e("KHd+"),_=Object(v.a)({},function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"markdown"},[e("h2",[t._v("ImagePreview")]),t._v(" "),e("blockquote",[e("p",[t._v("1.10.0 新增")])]),t._v(" "),e("p",[t._v("图片预览，支持切换、放大缩小等能力。")]),t._v(" "),e("p",[e("strong",[t._v("注：")]),t._v(" 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 "),e("a",{attrs:{href:"#/zh-CN/docs/create-api"}},[t._v("create-api")]),t._v("。")]),t._v(" "),e("h3",[t._v("示例")]),t._v(" "),e("p",[t._v("如下示例相关代码在"),e("a",{attrs:{href:"https://github.com/didi/cube-ui/tree/master/example/pages/image-preview"}},[t._v("这里")]),t._v("。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("默认使用")]),t._v(" "),e("pre",[e("code",{staticClass:"language-html"},[t._v('<cube-button @click="showImagePreview">Show ImagePreview</cube-button>\n')])]),t._v(" "),e("pre",[e("code",{staticClass:"language-js"},[t._v("export default {\n  data() {\n    return {\n      imgs: [\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg'\n      ]\n    }\n  },\n  methods: {\n    showImagePreview() {\n      this.$createImagePreview({\n        imgs: this.imgs\n      }).show()\n    }\n  }\n}\n")])]),t._v(" "),e("p",[t._v("只需要提供 "),e("code",[t._v("imgs")]),t._v(" 图片地址列表就可以了。")])]),t._v(" "),e("li",[e("p",[t._v("多图场景")]),t._v(" "),e("pre",[e("code",{staticClass:"language-html"},[t._v('<div class="imgs-container">\n  <img\n    :src="img"\n    v-for="(img, index) in imgs"\n    :key="img"\n    @click="handleImgsClick(index)">\n</div>\n')])]),t._v(" "),e("pre",[e("code",{staticClass:"language-js"},[t._v("export default {\n  data() {\n    return {\n      initialIndex: 0,\n      imgs: [\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg'\n      ]\n    }\n  },\n  methods: {\n    handleImgsClick(index) {\n      this.initialIndex = index\n      const params = {\n        $props: {\n          imgs: this.imgs,\n          initialIndex: 'initialIndex', // 响应式数据的key名\n          loop: false\n        },\n        $events: {\n          change: (i) => {\n            // 必须更新 initialIndex\n            this.initialIndex = i\n          }\n        }\n      }\n      this.$createImagePreview({ ...params }).show()\n    }\n  }\n}\n")])]),t._v(" "),e("p",[t._v("大多数应用场景都是多图点击之后，实例化 image-preview 组件，展示的图片是每次被点击的图片。")])]),t._v(" "),e("li",[e("p",[t._v("自定义使用")]),t._v(" "),e("pre",[e("code",{staticClass:"language-html"},[t._v('<cube-button @click="showCustomImagePreview">Show Custom ImagePreview</cube-button>\n')])]),t._v(" "),e("pre",[e("code",{staticClass:"language-js"},[t._v("export default {\n  data() {\n    return {\n      customIndex: 1,\n      imgs: [\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',\n        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg'\n      ]\n    }\n  },\n  methods: {\n    showCustomImagePreview() {\n      this.$createImagePreview({\n        imgs: this.imgs,\n        initialIndex: this.customIndex,\n        loop: false,\n        speed: 500,\n        onChange: (i) => {\n          this.customIndex = i\n        },\n        onHide: () => {\n          console.log('hide')\n        }\n      }, (h) => {\n        return h('div', {\n          class: {\n            'image-preview-custom-header': true\n          },\n          slot: 'header'\n        }, this.customIndex + 1)\n      }).show()\n    }\n  }\n}\n")])]),t._v(" "),e("p",[t._v("我们可通过插槽定义自己的其他自定义需求，通过传入 Prop 重新定义图片预览行为。")])])]),t._v(" "),e("h3",[t._v("Props 配置")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("imgs")]),t._v(" "),e("td",[t._v("图片地址列表")]),t._v(" "),e("td",[t._v("Array")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("[]")])]),t._v(" "),e("tr",[e("td",[t._v("initial-index")]),t._v(" "),e("td",[t._v("初始索引")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("0")])]),t._v(" "),e("tr",[e("td",[t._v("loop")]),t._v(" "),e("td",[t._v("是否可循环")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true/false")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("speed")]),t._v(" "),e("td",[t._v("轮播速度，单位 ms")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("400")])]),t._v(" "),e("tr",[e("td",[t._v("zIndex<sup>1.10.11</sup>")]),t._v(" "),e("td",[t._v("样式 z-index 的值")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("100")])]),t._v(" "),e("tr",[e("td",[t._v("preventDefault<sup>1.10.16</sup>")]),t._v(" "),e("td",[t._v("是否阻止默认行为，因底层使用 BetterScroll 实现")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true/false")]),t._v(" "),e("td",[t._v("true")])])])]),t._v(" "),e("h3",[t._v("插槽")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名字")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("作用域参数")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("header")]),t._v(" "),e("td",[t._v("顶部 header 内容")]),t._v(" "),e("td",[t._v("current: 当前索引")])]),t._v(" "),e("tr",[e("td",[t._v("footer")]),t._v(" "),e("td",[t._v("底部 footer 内容")]),t._v(" "),e("td",[t._v("current: 当前索引")])])])]),t._v(" "),e("h3",[t._v("事件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("参数")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("change")]),t._v(" "),e("td",[t._v("查看图片索引改变")]),t._v(" "),e("td",[t._v("当前索引值")])]),t._v(" "),e("tr",[e("td",[t._v("hide")]),t._v(" "),e("td",[t._v("隐藏")]),t._v(" "),e("td",[t._v("-")])])])])])}],!1,null,null,null);n.default=_.exports}}]);