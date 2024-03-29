<script lang="ts" setup>
import Watermark from './watermark.vue';
</script>

<template>
  <div class="layout-main-box">
    <router-view></router-view>
    <Watermark />
  </div>
</template>

<style lang="scss" scoped>

.layout-main-box {
  // background: #fff;
  background: var(--x-bg-color-overlay);
  padding: 24px;
  position: relative;
}
</style>