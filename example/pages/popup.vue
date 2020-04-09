<template>
  <lgt-page type="popup-view" title="popup">
    <template slot="content">
      <div>
        <lgt-popup type="my-popup" v-model="visible1">My Popup Content 1</lgt-popup>
        <lgt-button type="primary" @click="showPopup(1)">Show Popup</lgt-button>
      </div>
      <div>
        <lgt-popup type="my-popup" v-model="visible2" :mask="false">My Popup Content 2</lgt-popup>
        <lgt-button type="success" @click="showPopup(2)">Show Popup - no mask</lgt-button>
      </div>
      <div>
        <lgt-popup type="my-popup" v-model="visible3" :mask="false" content="<i>My Popup Content 3</i>" ref="myPopup3"></lgt-popup>
        <lgt-button type="info" @click="showPopup(3)">Show Popup - with content</lgt-button>
      </div>
      <div>
        <lgt-popup type="my-popup" v-model="visible4" :position="position" :mask-closable="true" ref="myPopup4">My Popup Content 4</lgt-popup>
        <lgt-button type="warning" @click="showPopup(4)">top/right/bottom/left/center</lgt-button>
      </div>
      <div>
        <lgt-extend-popup content="click here hide" ref="extendPopup"></lgt-extend-popup>
        <lgt-button type="danger" @click="$refs.extendPopup.show()">Show Extend Popup</lgt-button>
      </div>
    </template>
  </lgt-page>
</template>

<script type="text/ecmascript-6">
  import LgtPage from '../components/lgt-page.vue'
  import LgtExtendPopup from '../components/extend-popup.vue'

  const positions = ['top', 'right', 'bottom', 'left', 'center']
  let cur = 0
  export default {
    data() {
      return {
        type: 'popup-dialog',
        mask: true,
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        position: ''
      }
    },
    methods: {
      showPopup(i) {
        if (i === 4) {
          this.position = positions[cur++]
          if (cur === positions.length) {
            cur = 0
          }
        }
        this['visible' + i] = true
        setTimeout(() => {
          this['visible' + i] = false
        }, 2000)
      }
    },
    components: {
      LgtPage,
      LgtExtendPopup
    }
  }
</script>

<style lang="scss">
.popup-view {
  .content {
    > {
      div {
        margin: 10px 0;
      }
    }
  }
}
.lgt-my-popup {
  .lgt-popup-center {
    .lgt-popup-content {
      padding: 20px;
    }
  }
  .lgt-popup-content {
    padding: 80px 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
.lgt-extend-popup {
  .lgt-extend-popup-content {
    padding: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
  }
}

</style>
