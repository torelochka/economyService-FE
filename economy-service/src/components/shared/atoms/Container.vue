<template>
  <div class="container" :style="{'width' : width + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    width: {
      type: Number,
      default: 200,
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 90vh;
  width: 200px;
  padding-top: 50px;
}
</style>
