<template>
  <transition name="page-move">
    <router-view class="lgt-view"></router-view>
  </transition>
</template>

<script>
export default {
  name: 'LightView'
}
</script>

<style lang="scss">
.page-move-enter, .page-move-leave-active {
  transform: translate(100%, 0);
}
.page-move-enter-active, .page-move-leave-active {
  transition: transform 0.3s;
}
</style>
