<template>
  <div id="app">
    <header class="lgt-bar">
      <h1>light-ui</h1>
    </header>
    <section class="lgt-content" ref="mfct">
      <div class="lgt-list">
        <ul v-for="(group, index) in components" :key="index">
          <li class="cube-item">{{ group.name }}</li>
          <li class="cube-item" v-for="(subGroup, subIndex) in group.items" :key="subIndex">
            <router-link class="link" :to="subGroup.path">{{subGroup.text}}<i
              class="lgt-arrow"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <lgt-view></lgt-view>
    <!-- <div class="lgt-content">
      <span class="lgt-icon-delete"></span>
      <span class="cubeic-close"></span>
      <div class="part">
        <h1>Icon 图标</h1>
        <div class="row">
          <i class="lgt-icon-edit"></i>
          <i class="lgt-icon-share"></i>
          <i class="lgt-icon-delete"></i>
          <lgt-button type="primary" icon="lgt-icon-search">搜索</lgt-button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import LgtView from './components/lgt-view.vue'
export default {
  data() {
    return {
      components: [
        {
          'name': 'Basic 基础组件',
          'shortcut': 'Basic',
          'items': [
            {
              path: '/icon',
              text: 'Icon'
            },
            {
              path: '/button',
              text: 'Button'
            },
            {
              path: '/link',
              text: 'Link'
            },
            {
              path: '/loading',
              text: 'Loading'
            }
          ]
        },
        {
          'name': 'Form 表单组件',
          'shortcut': 'Form',
          'items': [
            {
              path: '/checkbox',
              text: 'Checkbox'
            },
            {
              path: '/checkbox-group',
              text: 'CheckboxGroup'
            },
            {
              path: '/checker',
              text: 'Checker'
            },
            {
              path: '/radio',
              text: 'Radio'
            },
            {
              path: '/input',
              text: 'Input'
            },
            {
              path: '/textarea',
              text: 'Textarea'
            },
            {
              path: '/select',
              text: 'Select'
            },
            {
              path: '/switch',
              text: 'Switch'
            },
            {
              path: '/rate',
              text: 'Rate'
            },
            {
              path: '/validator',
              text: 'Validator'
            },
            {
              path: '/upload',
              text: 'Upload'
            },
            {
              path: '/form',
              text: 'Form'
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
            },
            {
              path: '/toast',
              text: 'Toast'
            },

            {
              path: '/picker',
              text: 'Picker'
            },
            {
              path: '/cascade-picker',
              text: 'CascadePicker'
            },
            {
              path: '/segment-picker',
              text: 'SegmentPicker'
            },
            {
              path: '/date-picker',
              text: 'DatePicker'
            },
            {
              path: '/time-picker',
              text: 'TimePicker'
            },
            {
              path: '/dialog',
              text: 'Dialog'
            },
            {
              path: '/action-sheet',
              text: 'ActionSheet'
            },
            {
              path: '/drawer',
              text: 'Drawer'
            },
            {
              path: '/image-preview',
              text: 'ImagePreview'
            }
          ]
        },
        {
          'name': 'Scroll 滚动组件',
          'shortcut': 'Scroll',
          'items': [
            {
              path: '/scroll',
              text: 'Scroll'
            },
            {
              path: '/slide',
              text: 'Slide'
            },
            {
              path: '/index-list',
              text: 'IndexList'
            },
            {
              path: '/swipe',
              text: 'Swipe'
            },
            {
              path: '/sticky',
              text: 'Sticky'
            },
            {
              path: '/scroll-nav-bar',
              text: 'ScrollNavBar'
            },
            {
              path: '/scroll-nav',
              text: 'ScrollNav'
            },
            {
              path: '/recycle-list',
              text: 'RecycleList'
            }
          ]
        }
      ]
    }
  },
  components: {
    LgtView
  }
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
.lgt-bar {
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

.lgt-content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  .lgt-list {
    padding-left: 10px;
    z-index: 1;
    font-size: 16px;
    ul {
      .cube-item {
        height: 40px;
        line-height: 40px;
        padding-left: 16px;
        .link {
          display: block;
          position: relative;
          width: 100%;
          color: #333;
          text-decoration: none;
          outline: 0;
          .lgt-arrow {
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
</style>
