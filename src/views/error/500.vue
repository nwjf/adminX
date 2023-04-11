<template>
  <div class="error-page">
    <Common page="500">
      <div class="error-title">服务器错误</div>
      <!-- <div class="error-btn">返回</div> -->
    </Common>
  </div>
</template>

<script lang="ts" setup>
import Common from './components/common.vue';
</script>

<style lang="scss" scoped>
.error-page {
  height: 100vh;
  padding: 1px;
  .error-title {
    font-size: 40px;
    text-align: center;
    margin-top: 20px;
  }
  .error-btn {
    margin-top: 30px;
    text-align: center;
    font-size: 34px;
    cursor: pointer;
  }
}
</style>