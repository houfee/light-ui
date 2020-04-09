(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{IBTY:function(e,n,p){"use strict";p.r(n);var a=p("KHd+"),l=Object(a.a)({},function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,n=e.$createElement,p=e._self._c||n;return p("div",{staticClass:"markdown"},[p("h2",[e._v("后编译")]),e._v(" "),p("p",[e._v("后编译指的是应用依赖的 NPM 包并不需要在发布前编译，而是随着应用编译打包的时候一块编译。")]),e._v(" "),p("p",[p("em",[e._v("注：")]),e._v(" 关于后编译更详细内容可参阅 "),p("a",{attrs:{href:"https://github.com/DDFE/DDFE-blog/issues/23"}},[e._v("webpack 应用编译优化之路")])]),e._v(" "),p("h3",[e._v("背景")]),e._v(" "),p("p",[e._v("使用 webpack + babel 开发应用越来越多，而且一般都是通过 NPM 进行包管理的，这样依赖包越来越多，这些依赖包也是使用的 ES2015+ 开发的，所以每个依赖包都需要编译才能发布，这样编译后代码中往往后包含很多编译代码，所以为了消除这部分冗余，推荐大家使用后编译。")]),e._v(" "),p("h3",[e._v("优缺点")]),e._v(" "),p("p",[e._v("优点：")]),e._v(" "),p("ul",[p("li",[e._v("公共的依赖可以实现共用，只此一份，重要的是只编译一次，建议通过 peerDependencies 管理依赖。")]),e._v(" "),p("li",[e._v("babel 转换 API（例如 babel-plugin-transform-runtime 或者 babel-polyfill）部分的代码只有一份。")]),e._v(" "),p("li",[e._v("不用每个依赖包都需要配置编译打包环节，甚至可以直接源码级别发布。")])]),e._v(" "),p("p",[e._v("缺点：")]),e._v(" "),p("ul",[p("li",[e._v("主应用的 babel 配置需要能兼容依赖包的 babel 配置。")]),e._v(" "),p("li",[e._v("依赖包不能使用 alias、不能方便的使用 DefinePlugin（可以经过一次简单编译，但是不做 babel 处理）。")]),e._v(" "),p("li",[e._v("应用编译时间会变长。")])]),e._v(" "),p("h3",[e._v("约定")]),e._v(" "),p("p",[e._v("考虑到有些应用会使用后编译，有些则只能使用编译好的依赖包，为了“争夺”入口，cube-ui 做了均衡，约定：")]),e._v(" "),p("blockquote",[p("p",[e._v("package.json 的 main 字段指向的就是编译后入口，而 module 字段指向的就是源码入口。")])]),e._v(" "),p("p",[p("em",[e._v("关于 "),p("a",{attrs:{href:"https://github.com/rollup/rollup/wiki/pkg.module"}},[e._v("pkg.module")])])]),e._v(" "),p("p",[e._v("这样，如果应用使用的是 webpack 2+，则默认走后编译，而如果使用的 webpack 1.x 则默认使用的是编译后内容；当然，这部分可以通过 webpack 的 alias 配置达到和版本无关效果。")]),e._v(" "),p("h3",[e._v("webpack 配置使用")]),e._v(" "),p("p",[e._v("后编译的场景是极有可能产生嵌套的情况，而且对于每个依赖包而言应该自己管理自身需要后编译的依赖；为了解决这个问题，可以使用 "),p("a",{attrs:{href:"https://www.npmjs.com/package/webpack-post-compile-plugin"}},[e._v("webpack-post-compile-plugin")]),e._v("，你只需要在你的 NPM 包自身的 package.json 中声明 "),p("code",[e._v("postCompile: true")]),e._v(" 或者你的应用的 package.json 中通过 compileDependencies 来指定自身需要后编译依赖的包名。")]),e._v(" "),p("p",[e._v("一个应用示例配置：")]),e._v(" "),p("pre",[p("code",{staticClass:"language-js"},[e._v("// webpack.config.js\nvar PostCompilePlugin = require('webpack-post-compile-plugin')\n\nmodule.exports = {\n  // ...\n  module: {\n    rules: [\n      // ...\n      {\n        test: /\\.js$/,\n        loader: 'babel-loader',\n        include: [\n          resolve('src')\n        ]\n      },\n      // ...\n    ]\n  },\n  // ...\n  plugins: [\n    new PostCompilePlugin()\n  ]\n}\n")])]),e._v(" "),p("p",[e._v("如果你能控制你应用的所有的依赖包，直接在每个依赖包的 package.json 中设置 "),p("code",[e._v("postCompile: true")]),e._v(" 即可：")]),e._v(" "),p("pre",[p("code",{staticClass:"language-js"},[e._v('{\n  "name": "your-one-pkg",\n  // ...\n  "postCompile": true\n  // ...\n}\n')])]),e._v(" "),p("p",[e._v("或者你也可以在应用的 package.json 中增加 compileDependencies：")]),e._v(" "),p("pre",[p("code",{staticClass:"language-json"},[e._v('// package.json\n{\n  // ...\n  "compileDependencies": ["A", "B"]\n  // ...\n}\n')])]),e._v(" "),p("p",[e._v("如果说 A 还依赖 C 的话，只需要在 A 的 package.json 中指定 compileDependencies 即可：")]),e._v(" "),p("pre",[p("code",{staticClass:"language-json"},[e._v('// A package.json\n{\n  // ...\n  "compileDependencies": ["C"]\n  // ...\n}\n')])])])}],!1,null,null,null);n.default=l.exports}}]);