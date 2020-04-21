<template>
  <transition name="lgt-toast-fade">
    <lgt-popup
      type="toast"
      :z-index="zIndex"
      :mask="mask"
      v-show="isVisible"
      @mask-click="maskClick"
      >
      <i v-if="!isLoading && iconClass.length" class="lgt-toast-icon" :class="iconClass"></i>
      <lgt-loading v-if="isLoading"></lgt-loading>
      <div v-show="txt" class="lgt-toast-tip" v-html="txt"></div>
    </lgt-popup>
  </transition>
</template>

<script type="text/ecmascript-6">
  import LgtLoading from '../loading/loading.vue'
  import LgtPopup from '../popup/popup.vue'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'

  const COMPONENT_NAME = 'lgt-toast'

  const EVENT_TIMEOUT = 'timeout'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin],
    props: {
      type: {
        type: String,
        default: 'loading'
      },
      icon: {
        type: String,
        default: ''
      },
      mask: {
        type: Boolean,
        default: false
      },
      txt: {
        type: String,
        default: ''
      },
      time: {
        type: Number,
        default: 3000
      },
      // By default, Toast has the bigest z-index among popoup-based components.
      zIndex: {
        type: Number,
        default: 900
      }
    },
    computed: {
      iconClass() {
        const iconClass = []
        if (this.icon) {
          iconClass.push(this.icon)
        }
        const classMap = {
          correct: 'cubeic-right',
          error: 'cubeic-wrong',
          warn: 'cubeic-warn'
        }
        const icon = classMap[this.type]
        if (icon) {
          iconClass.push(icon)
        }
        return iconClass
      },
      isLoading() {
        return this.type === 'loading'
      }
    },
    methods: {
      maskClick() {
        this.maskClosable && this.hide()
      },
      show() {
        this.isVisible = true
        this.clearTimer()
        this.$nextTick(() => {
          if (this.time !== 0) {
            this.timer = setTimeout(() => {
              this.hide()
              this.$emit(EVENT_TIMEOUT)
            }, this.time)
          }
        })
      },
      hide() {
        this.isVisible = false
        this.clearTimer()
      },
      clearTimer() {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    components: {
      LgtPopup,
      LgtLoading
    }
  }
</script>

<style lang="scss">
@charset "UTF-8";
@import '../style/toast';
</style>
