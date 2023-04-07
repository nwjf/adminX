<script lang="ts" setup>
</script>

<template>
  <el-main class="layout-main">
    <div class="layout-main-box">
      <router-view></router-view>
    </div>
  </el-main>
</template>

<style lang="scss" scoped>
.layout-main {
  background: #f8f8f8;
  .layout-main-box {
    background: #fff;
    padding: 24px;
  }
}
</style>