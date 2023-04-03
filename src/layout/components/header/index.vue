<script lang="ts" setup>
import Menu from './menu.vue';
</script>

<template>
  <el-header>
    <div class="header-index">
      <div></div>
      <Menu />
    </div>
  </el-header>
</template>

<style lang="scss" scoped>
.header-index {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
}
</style>