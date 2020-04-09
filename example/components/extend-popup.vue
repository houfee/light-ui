<template>
  <lgt-popup type="extend-popup" ref="popup">
    <div class="lgt-extend-popup-content" @click="hide">
      <slot>{{content}}</slot>
    </div>
 </lgt-popup>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'extend-popup'
  export default {
    name: COMPONENT_NAME,
    props: {
      content: {
        type: String
      }
    },
    methods: {
      show() {
        this.$refs.popup.show()
      },
      hide() {
        this.$refs.popup.hide()
        this.$emit('hide')
      }
    }
  }
</script>
<style lang="scss">
.lgt-popup-content {
  .lgt-extend-popup-content {
    padding: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
  }
}

</style>
