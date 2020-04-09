<template>
  <div class="lgt-popup" :style="{'z-index': zIndex}" :class="rootClass" v-show="isVisible">
    <div class="lgt-popup-mask" @touchmove.prevent @click="maskClick">
      <slot name="mask"></slot>
    </div>
    <div class="lgt-popup-container" @touchmove.prevent :class="containerClass">
      <div class="lgt-popup-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="lgt-popup-content" v-else v-html="content">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  const COMPONENT_NAME = 'lgt-popup'
  const EVENT_MASK_CLICK = 'mask-click'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin],
    props: {
      type: {
        type: String,
        default: ''
      },
      mask: {
        type: Boolean,
        default: true
      },
      content: {
        type: String,
        default: ''
      },
      center: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: ''
      }
    },
    computed: {
      rootClass() {
        const cls = {
          'lgt-popup_mask': this.mask
        }
        if (this.type) {
          cls[`lgt-${this.type}`] = true
        }
        return cls
      },
      containerClass() {
        const center = this.center
        const position = this.position
        if (position) {
          return {
            [`lgt-popup-${position}`]: true
          }
        }
        if (center) {
          return {
            'lgt-popup-center': true
          }
        }
      }
    },
    methods: {
      maskClick(e) {
        this.$emit(EVENT_MASK_CLICK, e)
        if (this.maskClosable) {
          this.hide()
        }
      }
    }
  }
</script>

<style lang="scss">
@charset "UTF-8";
@import '../style/popup';
</style>
