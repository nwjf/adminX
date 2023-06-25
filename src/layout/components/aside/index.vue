<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({ name: 'Layout/aside' });
</script>

<script lang="ts" setup>
// layout aside
import { computed } from 'vue';
import Logo from '../logo.vue';
import AsideMenu from './asideMenu';
import { useConfigStore } from '@/store/config';

const { getMenuWidth } = useConfigStore();
const menuWidth = computed(() => getMenuWidth());
</script>

<template>
  <el-aside class="layout-aside-warp">
    <Logo />
    <AsideMenu />
  </el-aside>
</template>

<style lang="scss" scoped>
.layout-aside-warp {
  height: 100%;
  width: v-bind(menuWidth);
  transition: all .24s linear;
  // background: #fff;
  background: var(--x-bg-color-overlay);
  .el-menu {
    border-right: none;
  }
}
</style>