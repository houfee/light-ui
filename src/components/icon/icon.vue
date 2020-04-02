<template>
  <i :class="'lgt-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'LgtIcon',

    props: {
      name: String
    }
  };
</script>
