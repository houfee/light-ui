<template>
  <button
    class="hf-button"
    @click="handleClick"
    :class="[
      type ? 'hf-button--' + type : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="hf-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon"></i>
    <!-- $slots.default 获取所有插槽，判断span是否渲染 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'HfButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
@charset "UTF-8";
@import '../style/button';
</style>
