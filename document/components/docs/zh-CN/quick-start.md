## 快速上手

### 脚手架

#### vue-cli

```shell
$ npm install light-ui --save
```

### 使用

#### 全部引入

一般在入口文件中：

```javascript
import Vue from 'vue'
import Light from 'Light-ui'
import 'Light-ui/lib/style.css'

Vue.use(Light)
```

#### 按需引入

```javascript
import {
  Style,
  Button
} from 'cube-ui'
```

#### 示例
