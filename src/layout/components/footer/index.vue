<template>
  <el-footer class="layout-footer">
    github.com/nwjf 技术支持 Copyright@2022-{{new Date().getFullYear()}}
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'layout/footer',
});
</script>

<style lang="scss" scoped>
.layout-footer {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>