<script lang="ts" setup>
// 悬浮布局
import Header from '../components/header/index.vue';
import Aside from '../components/aside/index.vue';
import Main from '../components/main.vue';
import Footer from '../components/footer/index.vue';
  
</script>

<template>
  <div class="layout-float-warp">
    <div class="layout-float-aside">
      <Aside />
    </div>
    <el-container class="layout-float-content-wrapper">
      <div class="layout-float-header">
        <Header />
      </div>
      <el-main class="layout-float-main">
        <Main />
        <Footer />
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.layout-float-warp {
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--x-bg-color);
  .layout-float-aside {
    background: transparent;
    padding: 16px;
  }
  .layout-float-content-wrapper {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .layout-float-header {
    margin-top: 16px;
    background: #fff;
  }
  .layout-float-main {
    padding-left: 0;
  }
}
</style>