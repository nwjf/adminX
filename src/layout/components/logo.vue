<script lang="ts" setup>
// layout logo
import { useConfigStore } from '../../store/config';
import AsideMenu from './aside/asideMenu';

const { layout, setLayout } = useConfigStore();
const onMenuCollapse = () => {
  setLayout('menuCollapse', !layout.menuCollapse);
};
</script>

<template>
  <div>
    <!-- pc -->
    <div class="layout-logo-warp pc">
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
    <!-- mobile -->
    <div class="layout-logo-warp mobile">
      <div class="layout-logo-content">
        <img
          class="logo-img"
          src="https://demo.buildadmin.com/assets/logo-8000aeec.png"
          alt="logo">
        <div
          class="logo-name">AdminX</div>
      </div>
      <Icon
        class="logo-icon"
        :name="layout.menuCollapse ? 'el-icon-Expand' : 'el-icon-CloseBold'"
        size="18"
        @click="onMenuCollapse"
      />
      <transition name="width">
        <div class="layout-mobile-aside" v-if="!layout.menuCollapse">
          <AsideMenu />
        </div>
      </transition>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.layout-logo-warp {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
  z-index: 9;
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
.layout-mobile-aside {
  position: absolute;
  left: -20px;
  bottom: -1px;
  transform: translateY(100%);
  width: 220px;
  height: calc(100vh - 60px);
  background: #fff;
  background: #fff;
  background: var(--x-bg-color-overlay);
  border-right: 1px solid var(--x-bg-color);
}

.layout-logo-warp.pc { display: flex; }
.layout-logo-warp.mobile { display: none; }
@media screen and (max-width: 500px) {
  .layout-logo-warp.pc { display: none; }
  .layout-logo-warp.mobile { display: flex; }
}
</style>