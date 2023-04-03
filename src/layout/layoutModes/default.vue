<script lang="ts" setup>
// layout default
import Header from '../components/header/index.vue';
import Aside from '../components/aside/index.vue';
import Main from '../components/main.vue';
import Footer from '../components/footer/index.vue';
  
</script>

<template>
  <el-container class="layout-container">
    <Aside />
    <el-container class="content-wrapper">
      <Header />
      <Main />
      <Footer />
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
</style>