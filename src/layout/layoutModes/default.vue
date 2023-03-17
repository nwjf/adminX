<script lang="ts" setup>
// layout default
import Header from '../components/header/index.vue';
  
</script>

<template>
  <el-container class="layout-container">
    <Aside />
    <el-container class="content-wrapper">
      <Header />
      <Main />
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>

</style>