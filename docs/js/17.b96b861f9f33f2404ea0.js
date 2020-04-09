(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{ZZH4:function(e,n,t){"use strict";t.r(n);var a=t("KHd+"),i=Object(a.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"markdown"},[t("h2",[e._v("Internationalization")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),t("h2",[e._v("Internationalization within components")]),e._v(" "),t("p",[e._v("Cube-ui is the Chinese language pack used by default and is already registered. The corresponding English language pack is also built into the cube-ui, but you need the following logic to register the language pack and switch to the corresponding language.")]),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("Cube-ui will listen to the current language type, so it automatically renders the corresponding copy of the component, and caches the loaded copy. When the component language is switched, if the language pack is already installed, cube-ui directly takes the cached copy. Similar pseudo code is as follows:")]),e._v(" "),e._m(3),e._v(" "),t("p",[e._v("But maybe you have translation needs in other countries, such as Japanese and Korean, then you need to provide the language pack yourself and switch to the corresponding language. code show as below:")]),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("The configuration item format of the language pack you import should be similar to the following. The default Chinese language pack is as follows:")]),e._v(" "),t("pre",[t("code",{staticClass:"language-js"},[e._v("  export default {\n    cancel: '取消',\n    confirm: '确认',\n    ok: '确定',\n    prev: '上一步',\n    next: '下一步',\n    selectText: '请选择',\n    now: '现在',\n    selectTime: '选择时间',\n    today: '今日',\n    formatDate: 'M月D日',\n    hours: '点',\n    minutes: '分',\n    validator: {\n      required: '此为必填项',\n      type: {\n        string: '请输入字符',\n        number: '请输入数字',\n        array: '数据类型应为数组',\n        date: '请选择有效日期',\n        email: '请输入有效邮箱',\n        tel: '请输入有效的手机号码',\n        url: '请输入有效网址'\n      },\n      min: {\n        string: '至少输入 "+e._s(e.config)+" 位字符',\n        number: '不得小于 "+e._s(e.config)+"',\n        array: '请选择至少 "+e._s(e.config)+" 项',\n        date: '请选择 "+e._s(e._f("toLocaleDateString")(e.config,"yyyy年MM月dd日"))+" 之后的时间',\n        email: '至少输入 "+e._s(e.config)+" 位字符',\n        tel: '至少输入 "+e._s(e.config)+" 位字符',\n        url: '至少输入 "+e._s(e.config)+" 位字符'\n      },\n      max: {\n        string: '请勿超过 "+e._s(e.config)+" 位字符',\n        number: '请勿大于 "+e._s(e.config)+"',\n        array: '最多选择 "+e._s(e.config)+" 项',\n        date: '请选择 "+e._s(e._f("toLocaleDateString")(e.config,"yyyy年MM月dd日"))+" 之前的时间',\n        email: '请勿超过 "+e._s(e.config)+" 位字符',\n        tel: '请勿超过 "+e._s(e.config)+" 位字符',\n        url: '请勿超过 "+e._s(e.config)+" 位字符'\n      },\n      len: {\n        string: '请输入 "+e._s(e.config)+" 位字符',\n        number: '长度应等于 "+e._s(e.config)+"',\n        array: '请选择 "+e._s(e.config)+" 项',\n        date: '请选择 "+e._s(e._f("toLocaleDateString")(e.config,"yyyy年MM月dd日"))+" 之前的时间',\n        email: '请输入 "+e._s(e.config)+" 位字符',\n        tel: '请输入 "+e._s(e.config)+" 位字符',\n        url: '请输入 "+e._s(e.config)+" 位字符'\n      },\n      pattern: '格式错误',\n      custom: '未通过校验',\n      notWhitespace: '空白内容无效'\n    }\n  }\n")])]),e._v(" "),t("h2",[e._v("Internationalization of applications<sup>1.12.23+</sup>")]),e._v(" "),t("p",[e._v("As mentioned above, cube-ui provides international capabilities for its own components, but this capability can be extended to your application in two steps:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),t("p",[e._v("Then import the language pack in your app's entry file.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),t("pre",[t("code",{staticClass:"language-html"},[e._v("  <template>\n    <div>"+e._s(e.$t("application_key"))+"</div>\n  </template>\n")])]),e._v(" "),t("p",[e._v("Finally, "),t("code",[e._v(e._s(e.$t("application_key")))]),e._v(" is rendered as "),t("code",[e._v('"this is application text"')]),e._v(". Considering that your language pack may be multi-level nested, "),t("code",[e._v("$t")]),e._v(" also accepts a string with a separator of "),t("code",[e._v('"."')]),e._v(" to get deep-level properties, such as:")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),t("pre",[t("code",{staticClass:"language-html"},[e._v("<template>\n  <div>\n    "+e._s(e.$t("a.b.c"))+"\n  </div>\n</template>\n")])])])},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("blockquote",[t("p",[e._v("New in 1.11.0+")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("All non-configurable copy files inside "),t("code",[e._v("cube-ui")]),e._v(" are in Chinese, so if your application needs to do the corresponding international translation, then "),t("code",[e._v("1.11.0")]),e._v(" is available for cube-ui provide ability to translate a component's copywriting, even this ability can be extended to your application.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"language-js"},[e._v("  import Vue from 'vue'\n  import { Locale } from 'cube-ui'\n  import enUSMessages from 'cube-ui/src/locale/lang/en-US'\n\n  Vue.use(Locale)\n  // Switch to English and cache the current language pack\n  Locale.use('en-US', enUSMessages)\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"language-js"},[e._v("  import Vue from 'vue'\n  import { Locale } from 'cube-ui'\n  import enUSMessages from 'cube-ui/src/locale/lang/en-US'\n\n  // Load Chinese language pack by default\n  Vue.use(Locale)\n\n  // Switch to English and need to import the English language pack\n  one.click(() =>{\n    Locale.use('en-US', enUSMessages)\n  })\n\n  another.click(() => {\n    // load Chinese from cache\n    Locale.use('zh-CN')\n  })\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"language-js"},[e._v("  import Vue from 'vue'\n  import { Locale } from 'cube-ui'\n  import jPMessages from '/somewhere/ja-JP.js' // Your own language\n\n  Vue.use(Locale)\n\n  // Switch to Japanese and need to import Japanese language packs\n  Locale.use('ja-JP', jPMessages)\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ol",[t("li",[e._v("Import language packs")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("you must import the language pack, which should be the full set containing the "),t("code",[e._v("cube-ui")]),e._v(" default language pack. For example, your language pack configuration might look like this:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"language-js"},[e._v('  // default.js\n  export default {\n    "application_key": "this is application text",\n    "country": {\n      "province": "Beijing"\n    }\n\n    /* defaults of cube-ui*/\n    "cancel": "Cancel",\n    // ...ignore\n    "validator": {/* */}\n  }\n')])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"language-js"},[e._v("  import Vue from 'vue'\n  import { Locale } from 'cube-ui'\n  import defaultMessages from 'default.js' // your own language\n\n  Vue.use(Locale)\n  Locale.use('zh-CN', defaultMessages)\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ol",{attrs:{start:"2"}},[t("li",[e._v("Ability to inject translations through mixins inside components")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Then use the "),t("code",[e._v("mixin")]),e._v(" capability provided by "),t("code",[e._v("Vue")]),e._v(". cube-ui provides the conversion function "),t("code",[e._v("$t")]),e._v(" for the language package "),t("code",[e._v("key=>value")]),e._v(". You only need to inject it into the component's "),t("code",[e._v("mixins")]),e._v(" property, and then you can use it in the template. An example is as follows:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"language-js"},[e._v("// dialog.vue\n\nimport { Locale } from 'cube-ui'\n<script>\n  export default {\n    //...\n    mixins: [Locale.localeMixin] // Inject mixin, have the ability to $t. After v1.12.23\n  }\n<\/script>\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Then you can reference the "),t("code",[e._v("$t()")]),e._v(" method in the template.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",{staticClass:"language-js"},[e._v('// your language packs structure\nexport default {\n  a: {\n    b: {\n      c: "nested c"\n    }\n  }\n}\n')])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("It is easy to use it in "),t("code",[e._v("template")]),e._v("。")])}],!1,null,null,null);n.default=i.exports}}]);