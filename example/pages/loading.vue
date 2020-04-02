<template>
  <lgt-page :desc="desc" type="link-view" title="Link">
    <div slot="content">
      <lgt-button-group>
        <lgt-loading></lgt-loading>
        <lgt-loading :size="28"></lgt-loading>
        <lgt-loading :size="40"></lgt-loading>
      </lgt-button-group>
    </div>
  </lgt-page>
</template>

<script type="text/ecmascript-6">
  import LgtButtonGroup from '../components/lgt-button-group.vue'
  import LgtPage from '../components/lgt-page.vue'
  export default {
    data() {
      return {
        desc: 'cube-ui的loading样式，现在以element-ui的component的路径合并'
      }
    },
    components: {
      LgtButtonGroup,
      LgtPage
    }
  }
</script>
