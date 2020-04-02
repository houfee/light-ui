<template>
  <div class="lgt-btn-group" :class="direction"><slot></slot></div>
</template>

<script>
  export default {
    props: {
      direction: {
        type: String,
        default: 'column'
      }
    }
  }
</script>

<style lang="scss">
.lgt-btn-group {
  > button {
    margin: 10px 0;
  }
  &.row > button {
    display: inline-block;
    width: auto;
    margin: 10px 5px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
