<template>
  <i :class="'lgt-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'lgt-icon',

    props: {
      name: String
    }
  };
</script>
