<script lang="ts" setup>
// layout default
import Header from '../components/header/index.vue';
import Aside from '../components/aside/index.vue';
import Main from '../components/main.vue';
import Footer from '../components/footer/index.vue';
  
</script>

<template>
  <el-container class="layout-container">
    <Aside class="layout-default-aside" />
    <el-container class="content-wrapper">
      <Header />
      <el-main class="layout-main">
        <Main />
        <Footer />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
  width: 100%;
}
.content-wrapper {
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.layout-main {
  background: var(--x-bg-color);
}
@media screen and (max-width: 500px) {
  .layout-default-aside {
    display: none;
  }
}
</style>