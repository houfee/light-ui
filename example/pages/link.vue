<template>
  <lgt-page :desc="desc" type="link-view" title="Link">
    <div slot="content">
      <lgt-button-group>
        <lgt-link href="https://element.eleme.io" target="_blank">默认链接</lgt-link>
        <lgt-link type="primary">主要链接</lgt-link>
        <lgt-link type="success">成功链接</lgt-link>
        <lgt-link type="warning">警告链接</lgt-link>
        <lgt-link type="danger">危险链接</lgt-link>
        <lgt-link type="info">信息链接</lgt-link>
      </lgt-button-group>
      
      <lgt-button-group>
        <lgt-link disabled>默认链接</lgt-link>
        <lgt-link type="primary" disabled>主要链接</lgt-link>
        <lgt-link type="success" disabled>成功链接</lgt-link>
        <lgt-link type="warning" disabled>警告链接</lgt-link>
        <lgt-link type="danger" disabled>危险链接</lgt-link>
        <lgt-link type="info" disabled>信息链接</lgt-link>
      </lgt-button-group>

      <lgt-button-group>
        <lgt-link icon="lgt-icon-edit">编辑</lgt-link>
        <lgt-link>查看<i class="lgt-icon-view lgt-icon--right"></i> </lgt-link>
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
        desc: 'element-ui 提供的文字超链接，现在只做样式展示，删除了pc端的特性。'
      }
    },
    components: {
      LgtButtonGroup,
      LgtPage
    }
  }
</script>
