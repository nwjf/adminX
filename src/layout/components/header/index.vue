<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({ name: 'Layout/header' });
</script>

<script lang="ts" setup>
import Menu from './menu.vue';
</script>

<template>
  <el-header class="header-el">
    <div class="header-index">
      <div></div>
      <Menu />
    </div>
  </el-header>
</template>

<style lang="scss" scoped>
.header-el {
  background: var(--x-bg-color-overlay);
}
.header-index {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>