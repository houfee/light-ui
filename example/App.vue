<template>
  <div id="app">
    <header class="light-bar">
      <h1>light-ui</h1>
    </header>
    <div class="light-content">
      <span class="hf-icon-delete"></span>
      <span class="cubeic-close"></span>
      <div class="part">
        <h1>Icon 图标</h1>
        <div class="row">
          <i class="hf-icon-edit"></i>
          <i class="hf-icon-share"></i>
          <i class="hf-icon-delete"></i>
          <hf-button type="primary" icon="hf-icon-search">搜索</hf-button>
        </div>
      </div>
      <!-- <light-view></light-view> -->
      <div class="part">
        <h1>Button 按钮</h1>
        <div class="row">
          <hf-button>默认按钮</hf-button>
          <hf-button type="primary">主要按钮</hf-button>
          <hf-button type="success">成功按钮</hf-button>
          <hf-button type="info">信息按钮</hf-button>
          <hf-button type="warning">警告按钮</hf-button>
          <hf-button type="danger">危险按钮</hf-button>
        </div>

        <div class="row">
          <hf-button round>圆角按钮</hf-button>
          <hf-button type="primary" round>主要按钮</hf-button>
          <hf-button type="success" round>成功按钮</hf-button>
          <hf-button type="info" round>信息按钮</hf-button>
          <hf-button type="warning" round>警告按钮</hf-button>
          <hf-button type="danger" round>危险按钮</hf-button>
        </div>

        <div class="row">
          <hf-button icon="hf-icon-search" circle></hf-button>
          <hf-button type="primary" icon="hf-icon-edit" circle></hf-button>
          <hf-button type="success" icon="hf-icon-check" circle></hf-button>
          <hf-button type="info" icon="hf-icon-message" circle></hf-button>
          <hf-button type="warning" icon="hf-icon-star-off" circle></hf-button>
          <hf-button type="danger" icon="hf-icon-delete" circle></hf-button>
        </div>

        <div class="row">
          <hf-button>默认按钮</hf-button>
          <hf-button type="primary">主要按钮</hf-button>
          <hf-button type="success">成功按钮</hf-button>
          <hf-button type="info">信息按钮</hf-button>
          <hf-button type="warning">警告按钮</hf-button>
          <hf-button type="danger" icon="hf-icon-delete">危险按钮</hf-button>
        </div>

        <div class="row">
          <hf-button type="text">文字按钮</hf-button>
        </div>

        <div class="row">
          <hf-button type="primary" icon="hf-icon-edit"></hf-button>
          <hf-button type="primary" icon="hf-icon-share"></hf-button>
          <hf-button type="primary" icon="hf-icon-delete"></hf-button>
          <hf-button type="primary" icon="hf-icon-search">搜索</hf-button>
          <hf-button type="primary">上传<i class="hf-icon-upload hf-icon--right"></i></hf-button>
        </div>

        <div class="row">
          <hf-button-group>
            <hf-button type="primary" icon="hf-icon-arrow-left">上一页</hf-button>
            <hf-button type="primary">下一页<i class="hf-icon-arrow-right hf-icon--right"></i></hf-button>
          </hf-button-group>
          <hf-button-group>
            <hf-button type="primary" icon="hf-icon-edit"></hf-button>
            <hf-button type="primary" icon="hf-icon-share"></hf-button>
            <hf-button type="primary" icon="hf-icon-delete"></hf-button>
          </hf-button-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LightView from './components/light-view.vue'
export default {
  data() {
    return {
      components: [
        {
          'name': 'Basic 基础组件',
          'shortcut': 'Basic',
          'items': [
            {
              path: '/button',
              text: 'Button'
            }
          ]
        },
        {
          'name': 'Popup 弹窗组件',
          'shortcut': 'Popup',
          'items': [
            {
              path: '/popup',
              text: 'Popup'
            }
          ]
        }
      ]
    }
  },
  // components: {
  //   LightView
  // }
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
}
body {
  background-color: #fff;
  overflow: hidden;
}
#app {
  text-align: center;
}
.light-bar {
  z-index: 10;
  position: absolute;
  right: 0;
  left: 0;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #EDF0F4;
  box-shadow: 0 2px 1px #e9eaea;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  h1 {
    font-size: 18px;
    font-weight: 500;
  }
}

.light-content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  .light-list {
    padding-left: 10px;
    z-index: 1;
    font-size: 16px;
    ul {
      .cube-item {
        height: 40px;
        line-height: 40px;
        padding-left: 16px;.link {
          display: block;
          position: relative;
          width: 100%;
          color: #333;
          text-decoration: none;
          outline: 0;.cubeic-arrow {
            position: absolute;
            right: 0;
            padding: 0 5px;
            color: #ccc;
          }
        }
      }
    }
    .cube-index-list-nav {
      margin-right: 0px;
      padding: 8px 5px;
      border-radius: 3px 0 0 3px;
      background: #f7f7f7;
      box-shadow: 0 0 5px #80808047;>ul {
        >li {
          padding: 8px 0;
        }
      }
    }
    .cube-index-list-fixed {
      font-size: 16px;
    }
  }
}

.part {
  padding: 5px 0;
  box-sizing: border-box;
  border-top: rgb(241, 211, 190) 2px solid;
  border-bottom: rgb(241, 211, 190) 2px solid;
  background-color: rgb(217, 221, 228);

}
.part h1 {
  font-weight: 700;
  color: #2c3e50;
  font-size: 20px;
  margin-bottom: 5px;
}
.part + .part {
  margin-top: 20px;
}

</style>
