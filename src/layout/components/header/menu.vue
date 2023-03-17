<script lang="ts" setup>
import { reactive } from 'vue';
import screenfull from 'screenfull';
import { ElMessage } from 'element-plus';

interface State {
  isFullScreen: boolean;
};
const state: State = reactive({
  isFullScreen: false, // 全屏
});

const onFullScreen = () => {
  if (!screenfull.isEnabled) {
    ElMessage.warning('layouts.Full screen is not supported');
    return false;
  }
  screenfull.toggle();
  screenfull.onchange(() => {
    state.isFullScreen = screenfull.isFullscreen;
  });
};
</script>

<template>
  <div class="header-men">

    <!-- 全屏 -->
    <div @click="onFullScreen" class="nav-menu-item">
      <Icon
        class="header-menu-icon"
        color="#ccc"
        name="FullScreen"
        size="18"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-menu {
  .header-menu-item {
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>