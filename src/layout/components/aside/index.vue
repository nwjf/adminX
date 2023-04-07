<script lang="ts" setup>
// layout aside
import { computed } from 'vue';
import Logo from '../logo.vue';
import MenuTree from './menuTree.vue';
import AsideMenu from './asideMenu.tsx';
import { useConfigStore } from '../../../store/config';

const { getMenuWidth } = useConfigStore();
const menuWidth = computed(() => getMenuWidth());
</script>

<template>
  <el-aside class="layout-aside-warp">
    <Logo />
    <!-- <MenuTree /> -->
    <AsideMenu />
  </el-aside>
</template>

<style lang="scss" scoped>
.layout-aside-warp {
  width: v-bind(menuWidth);
  transition: all .24s linear;
  .el-menu {
    border-right: none;
  }
}
</style>