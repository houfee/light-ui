<template>
  <i :class="'hf-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'HfIcon',

    props: {
      name: String
    }
  };
</script>
