<template>
  <lgt-page type="toast-view" title="Toast">
    <div slot="content">
      <lgt-button-group>
        <lgt-button type="primary" @click="showToastTime">Toast - time 1s</lgt-button>
        <lgt-button type="primary" @click="showToastTime0">Toast - time 0</lgt-button>
        <lgt-button type="primary" @click="showToastMask">Toast- with mask</lgt-button>
        <lgt-button type="primary" @click="showToastType">Toast - type</lgt-button>
        <lgt-button type="primary" @click="showToastTxtOnly">Toast - txt only</lgt-button>
      </lgt-button-group>
    </div>
  </lgt-page>
</template>

<script type="text/ecmascript-6">
  // import CubeButtonGroup from '../components/lgt-button-group.vue'
  // import CubePage from '../components/cube-page.vue'
  import LgtButtonGroup from '../components/lgt-button-group.vue'
  import LgtPage from '../components/lgt-page.vue'
  export default {
    methods: {
      showToastTime() {
        this.toast = this.$createToast({
          time: 1000,
          txt: 'Toast time 1s',
          onTimeout: () => {
            console.log('timeout')
          }
        })
        this.toast.show()
      },
      showToastTime0() {
        this.toast = this.$createToast({
          time: 0,
          txt: 'Toast time 0'
        })
        this.toast.show()
        setTimeout(() => {
          this.toast.hide()
        }, 2000)
      },
      showToastMask() {
        this.toast = this.$createToast({
          txt: 'Loading...',
          mask: true
        })
        this.toast.show()
      },
      showToastType() {
        this.toast = this.$createToast({
          txt: 'Correct',
          type: 'correct'
        })
        this.toast.show()
      },
      showToastTxtOnly() {
        this.toast = this.$createToast({
          txt: 'Plain txt',
          type: 'txt'
        })
        this.toast.show()
      }
    },
    components: {
      LgtButtonGroup,
      LgtPage
    }
  }
</script>
