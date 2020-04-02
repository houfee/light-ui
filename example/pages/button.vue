<template>
  <lgt-page :desc="desc" type="button-view" title="Button">
    <div slot="content">
      <lgt-button-group>
        <lgt-button>默认按钮</lgt-button>
        <lgt-button type="primary">主要按钮</lgt-button>
        <lgt-button type="success">成功按钮</lgt-button>
        <lgt-button type="info">信息按钮</lgt-button>
        <lgt-button type="warning">警告按钮</lgt-button>
        <lgt-button type="danger">危险按钮</lgt-button>
      </lgt-button-group>

      <lgt-button-group>
        <lgt-button round>圆角按钮</lgt-button>
        <lgt-button type="primary" round>主要按钮</lgt-button>
        <lgt-button type="success" round>成功按钮</lgt-button>
        <lgt-button type="info" round>信息按钮</lgt-button>
        <lgt-button type="warning" round>警告按钮</lgt-button>
        <lgt-button type="danger" round>危险按钮</lgt-button>
      </lgt-button-group>

      <lgt-button-group>
        <lgt-button icon="lgt-icon-search" circle></lgt-button>
        <lgt-button type="primary" icon="lgt-icon-edit" circle></lgt-button>
        <lgt-button type="success" icon="lgt-icon-check" circle></lgt-button>
        <lgt-button type="info" icon="lgt-icon-message" circle></lgt-button>
        <lgt-button type="warning" icon="lgt-icon-star-off" circle></lgt-button>
        <lgt-button type="danger" icon="lgt-icon-delete" circle></lgt-button>
      </lgt-button-group>

      <lgt-button-group>
        <lgt-button>默认按钮</lgt-button>
        <lgt-button type="primary">主要按钮</lgt-button>
        <lgt-button type="success">成功按钮</lgt-button>
        <lgt-button type="info">信息按钮</lgt-button>
        <lgt-button type="warning">警告按钮</lgt-button>
        <lgt-button type="danger" icon="lgt-icon-delete">危险按钮</lgt-button>
      </lgt-button-group>

      <lgt-button-group>
        <lgt-button type="text">文字按钮</lgt-button>
      </lgt-button-group>

      <lgt-button-group>
        <lgt-button type="primary" icon="lgt-icon-edit"></lgt-button>
        <lgt-button type="primary" icon="lgt-icon-share"></lgt-button>
        <lgt-button type="primary" icon="lgt-icon-delete"></lgt-button>
        <lgt-button type="primary" icon="lgt-icon-search">搜索</lgt-button>
        <lgt-button type="primary">上传<i class="lgt-icon-upload lgt-icon--right"></i></lgt-button>
      </lgt-button-group>

      <lgt-button-group>
        <lgt-button type="primary" icon="lgt-icon-arrow-left">上一页</lgt-button>
        <lgt-button type="primary">下一页<i class="lgt-icon-arrow-right lgt-icon--right"></i></lgt-button>
      </lgt-button-group>

      <lgt-button-group>
        <lgt-button type="primary" icon="lgt-icon-edit"></lgt-button>
        <lgt-button type="primary" icon="lgt-icon-share"></lgt-button>
        <lgt-button type="primary" icon="lgt-icon-delete"></lgt-button>
        <lgt-button type="primary" :loading="true">加载中</lgt-button>
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
        desc: '按钮组件，由element-ui提炼在移动端，删除了禁用时的状态'
      }
    },
    components: {
      LgtButtonGroup,
      LgtPage
    }
  }
</script>
