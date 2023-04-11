<template>
  <div class="error-component">
    <template v-if="page === '403'">
      <img class="error-num" src="../../../assets/error/4.png" alt="error-4">
      <img class="error-num" src="../../../assets/error/0.png" alt="error-4">
      <img class="error-num" src="../../../assets/error/3.png" alt="error-4">
    </template>
    <template v-if="page === '404'">
      <img class="error-num" src="../../../assets/error/4.png" alt="error-4">
      <img class="error-num" src="../../../assets/error/0.png" alt="error-4">
      <img class="error-num" src="../../../assets/error/4.png" alt="error-4">
    </template>
    <template v-if="page === '500'">
      <img class="error-num" src="../../../assets/error/5.png" alt="error-4">
      <img class="error-num" src="../../../assets/error/0.png" alt="error-4">
      <img class="error-num" src="../../../assets/error/0.png" alt="error-4">
    </template>

    <img class="error-bg" src="../../../assets/error/cloud_shadow.png" alt="error-4">
    <img class="error-cloud1" src="../../../assets/error/cloud_mini.png" alt="error-4">
    <img class="error-cloud2" src="../../../assets/error/cloud_light.png" alt="error-4">
    <img class="error-cloud3" src="../../../assets/error/cloud_large.png" alt="error-4">

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'errorCommon',
  props: {
    page: String
  },
});
</script>

<style lang="scss" scoped>
.error-component {
  width: calc(143px * 3);
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  .error-num {
    width: 143px;
    position: relative;
    z-index: 3;
  }
  .error-bg {
    width: 100%;
    margin-top: -20px;
    position: relative;
    z-index: 1;
  }
  .error-cloud1 {
    position: absolute;
    left: -60px;
    top: 240px;
  }
  .error-cloud2 {
    position: absolute;
    top: -60px;
    right: -60px;
  }
  .error-cloud3 {
    position: absolute;
    top: -60px;
    right: -110px;
    animation: animation 2.6s infinite;
  }
  @keyframes animation {
    0% { transform: translateY(10px);}
    50% { transform: translateY(-40px);}
    100% { transform: translateY(10px);}
  }
}
</style>