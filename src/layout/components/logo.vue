<script lang="ts" setup>
// layout logo
import { useConfigStore } from '../../store/config';

const { layout, setLayout } = useConfigStore();
const onMenuCollapse = () => {
  setLayout('menuCollapse', !layout.menuCollapse);
};
</script>

<template>
  <div class="layout-logo-warp">
    <div class="layout-logo-content" v-if="!layout.menuCollapse">
      <img
        class="logo-img"
        src="https://demo.buildadmin.com/assets/logo-8000aeec.png"
        alt="logo">
      <div
        class="logo-name">AdminX</div>
    </div>
    <Icon
      class="logo-icon"
      :name="layout.menuCollapse ? 'el-icon-Expand' : 'el-icon-Fold'"
      size="18"
      @click="onMenuCollapse"
    />
  </div>
</template>

<style lang="scss" scoped>
.layout-logo-warp {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  .layout-logo-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-img {
    height: 28px;
  }
  .logo-name {
    padding: 0 4px;
    font-size: 18px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .logo-icon {
    cursor: pointer;
    margin-left: 12px;
  }
}
</style>