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
  min-height: calc(93vh - 120px);
  width: 200px;
  padding: 50px 10% 70px;
}
</style>
