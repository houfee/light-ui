<template>
  <div class="lgt-loading">
    <span class="lgt-loading-spinners" :style="style">
      <!-- <i class="lgt-icon-loading"></i> -->
      <i class="lgt-loading-spinner" v-for="(item, index) in balde" :key="index"></i>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'LgtLoading',
    data() {
      return {
        balde: 12
      }
    },
    props: {
      size: {
        type: Number
      }
    },
    computed: {
      style() {
        if (!this.size) return
        const value = `${this.size}px`
        return {
          width: value,
          height: value
        }
      }
    }
  }
</script>

<style lang="scss">
@charset "UTF-8";
@import '../style/loading';
</style>
