<template>
  <home-index>
    <template slot="desc">基于 Vue.js，参考组件库Cube-UI VantUI Element-UI Mint-ui，添加并优化其中部分组件实现的移动端组件库</template>
    <template slot="rec-btns">
      <router-link to="/zh-CN/docs/quick-start" class="btn-link"><span>快速上手</span></router-link>
      <router-link to="/zh-CN/docs/introduction" class="btn-link btn-active"><span>介绍</span></router-link>
    </template>
    <template slot="feature-1">
      <h1 class="h1">质量可靠</h1>
      <h1 class="h2">Quality</h1>
      <p>
        该组件参考了已有的vue开源组件库(Cube-UI\VantUI\Element-UI\Mint-ui)，取其精华。（因精力有限，未进行单元测试）。
      </p>
    </template>
    <template slot="feature-2">
      <h1 class="h1">体验极致</h1>
      <h1 class="h2">Experience</h1>
      <p>
        以迅速响应、动画流畅、接近原生为目标，在交互体验方面追求极致。
      </p>
    </template>
    <template slot="feature-3">
      <h1 class="h1">标准规范</h1>
      <h1 class="h2">Standard</h1>
      <p>
        遵循统一的设计交互标准，高度还原设计效果；接口标准化，统一规范使用方式，开发更加简单高效。
      </p>
    </template>
    <template slot="feature-4">
      <h1 class="h1">寻求帮助</h1>
      <h1 class="h2">Join me</h1>
      <p>
        寻求志同道合的朋友，共同维护Light-ui
        <!-- 支持按需引入和<router-link to="/zh-CN/docs/post-compile">后编译</router-link>，轻量灵活。 -->
      </p>
    </template>
  </home-index>
</template>

<script>
  import HomeIndex from './index.vue'
  export default {
    components: {
      HomeIndex
    }
  }
</script>
<style lang="scss">
</style>
