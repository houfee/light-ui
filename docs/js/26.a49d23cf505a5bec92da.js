(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"+YR7":function(e,t,n){"use strict";n.r(t);var a=n("KHd+"),o=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown"},[n("h2",[e._v("RecycleList")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("A recyclable scrolling list that always keeps the number of DOMs at a very low range. Excellent performance in the rendering list of massive data.")]),e._v(" "),n("h3",[e._v("Precautions")]),e._v(" "),e._m(1),e._v(" "),n("h3",[e._v("Example")]),e._v(" "),n("ul",[n("li",[e._m(2),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<div class="view-wrapper">\n  <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">\n    <template slot="item" slot-scope="{ data }">\n      <div :id="data.id" class="item" @click="handleClick(data)">\n        <div class="avatar" :style="{backgroundImage: \'url(\' + (data.avatar || \'\') + \')\'}"></div>\n        <div class="bubble">\n          <p>'+e._s(e.data.msg)+'</p>\n          <div class="meta">\n            <time class="posted-date">'+e._s(e.data.time)+"</time>\n          </div>\n        </div>\n      </div>\n    </template>\n  </cube-recycle-list>\n</div>\n")])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("The vast majority of list interactions are when the user scrolls to the bottom and requests the next page of data. The default implementation of the component is based on this interaction.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7)]),e._v(" "),n("li",[e._m(8),e._v(" "),e._m(9),e._v(" "),n("pre",[n("code",{staticClass:"language-html"},[e._v('<div class="view-wrapper">\n  <cube-recycle-list class="list" :infinite="infinite" :size="size" :on-fetch="onFetch">\n    \x3c!-- tombstone slot-scope is mandatory --\x3e\n    <template slot="tombstone" slot-scope="props">\n      <div class="item tombstone">\n        <div class="avatar"></div>\n        <div class="bubble">\n          <p></p>\n          <p></p>\n          <p></p>\n          <div class="meta">\n            <time class="posted-date"></time>\n          </div>\n        </div>\n      </div>\n    </template>\n    <template slot="item" slot-scope="{ data }">\n      <div :id="data.id" class="item" @click="handleClick(data)">\n        <div class="avatar" :style="{backgroundImage: \'url(\' + (data.avatar || \'\') + \')\'}"></div>\n        <div class="bubble">\n          <p>'+e._s(e.data.msg)+'</p>\n          <div class="meta">\n            <time class="posted-date">'+e._s(e.data.time)+'</time>\n          </div>\n        </div>\n      </div>\n    </template>\n    \x3c!-- <div slot="spinner">Loading Data</div> --\x3e\n    \x3c!-- <div slot="noMore">No more data</div> --\x3e\n  </cube-recycle-list>\n</div>\n')])]),e._v(" "),e._m(10)])]),e._v(" "),n("h3",[e._v("Props configuration")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),n("h3",[e._v("Slot")]),e._v(" "),e._m(13),e._v(" "),n("h3",[e._v("Instance methods")]),e._v(" "),e._m(14)])},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("blockquote",[n("p",[e._v("New in 1.12.0+")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("p",[e._v("To achieve infinite scrolling, you must ensure that you have a fixed-height parent container element to wrapper component. For details, please refer to the example.")])]),e._v(" "),n("li",[n("p",[e._v("If there is an image with a fixed width and height in the list content, due to the mechanism of image loading, when DOM of each item is rendered, the image may not be loaded, resulting in incorrect calculation of the position of each item, so the caller need use CSS to specify image to avoid height calculation errors.")])]),e._v(" "),n("li",[n("p",[e._v("The internal implementation relies on Promise, so you need a polyfill for compatibility.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("1. Basic usage")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-js"},[e._v("export default {\n  data() {\n    return {\n      size: 50,\n      offset: 100\n    }\n  },\n  methods: {\n    onFetch() {\n      let items = []\n      return new Promise((resolve) => {\n        // Simulation request for 50 items, because size is set to 50\n        setTimeout(() => {\n          for (let i = 0; i < 50; i++) {\n            items.push({\n              id: i,\n              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',\n              msg: '123',\n              time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'\n            })\n          }\n          resolve(items)\n        }, 1000)\n      })\n    },\n    handleClick(data) {\n      console.log('Item:' + data)\n    }\n  }\n}\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-stylus"},[e._v("/* Limit viewport to wrap component*/\n.view-wrapper\n  position: fixed\n  top: 54px\n  left: 0\n  bottom: 0\n  width: 100%\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The component accepts "),n("code",[e._v("size")]),e._v(" as props and controls how many counts of data are rendered at a time. "),n("code",[e._v("offset")]),e._v(" is the distance to configure the bottom pull data, "),n("code",[e._v("onFetch")]),e._v(" is a function, which is mandatory, and the return value of the function must be a Promise, and the "),n("code",[e._v("items")]),e._v(" ( "),n("strong",[e._v("Array")]),e._v(" ) must be the first parameter when calling "),n("code",[e._v("resolve")]),e._v(" function, so the component can get "),n("code",[e._v("items")]),e._v(". Of course, if you want to stop scrolling, pass "),n("code",[e._v("false")]),e._v(" or an array whose length is smaller than "),n("code",[e._v("size")]),e._v(" props.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The component supports the scope slot. You can use the destructuring assignment of the above example to get the "),n("code",[e._v("data")]),e._v(" (each data item of item) that the component passes to the caller.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The samples demo "),n("a",{attrs:{href:"https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-default.vue"}},[e._v("Here")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("2. Infinite")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("However, the component also supports the second mode - infinite. With "),n("code",[e._v("tombstone")]),e._v(" as a placeholder, which gives the user a perceptible page element, and makes the interaction more friendly and user-friendly.\nThe samples demo "),n("a",{attrs:{href:"https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-tombstone.vue"}},[e._v("Here")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("code",[e._v("infinite")]),e._v(" is used to enable infinite scroll mode. When you enable this configuration, you must implement a personalized style through the "),n("code",[e._v("tombstone")]),e._v(" scope slot. The "),n("code",[e._v("spinner")]),e._v(" and "),n("code",[e._v("noMore")]),e._v(" slots are supported to customize the display of views that load more and no more data. "),n("code",[e._v("spinner")]),e._v(" slot is built-in in component.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Attribute")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Accepted Values")]),e._v(" "),n("th",[e._v("Default")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("infinite")]),e._v(" "),n("td",[e._v("Enable infinite scroll mode")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("Amount of data loaded at one time")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("20")])]),e._v(" "),n("tr",[n("td",[e._v("offset")]),e._v(" "),n("td",[e._v("The distance to fetch more data at the bottom")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("200")])]),e._v(" "),n("tr",[n("td",[e._v("onFetch")]),e._v(" "),n("td",[e._v("Fetch data")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("code",[e._v("onFetch")]),e._v(" function must return a Promise, and the first argument to Promise's resolve function must be an array or "),n("code",[e._v("false")]),e._v(", so that the component can internally get the corresponding data to decide whether to load more or stop scrolling.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Scope parameters")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("tombstone")]),e._v(" "),n("td",[e._v("Implement a customized "),n("code",[e._v("tombstone")]),e._v(" view scope slot")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("item")]),e._v(" "),n("td",[e._v("Scope slot for each data item")]),e._v(" "),n("td",[e._v("data: An item in items")])]),e._v(" "),n("tr",[n("td",[e._v("spinner")]),e._v(" "),n("td",[e._v("Named slot for loading more")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("noMore")]),e._v(" "),n("td",[e._v("Named slot for no more data")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Method name")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("reset")]),e._v(" "),n("td",[e._v("To clean up all the contents")])])])])}],!1,null,null,null);t.default=o.exports}}]);