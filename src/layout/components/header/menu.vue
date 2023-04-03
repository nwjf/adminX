<script lang="ts" setup>
import { reactive } from 'vue';
import screenfull from 'screenfull';
import { ElMessage } from 'element-plus';
import UserInfo from './userInfo.vue';

interface State {
  isFullScreen: boolean;
};
const state: State = reactive({
  isFullScreen: false, // 全屏
});

const adminInfo = reactive({});

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
  <div class="header-menu">

    <!-- 全屏 -->
    <div @click="onFullScreen" class="header-menu-item">
      <Icon
        class="header-menu-icon"
        color="#000"
        name="el-icon-FullScreen"
        size="18"
      />
    </div>

    <!-- 用户信息 -->
    <user-info />
  </div>
</template>

<style lang="scss" scoped>
.header-menu {
  height: 100%;
  display: flex;
  align-items: center;
  // background: #1d1e1f;
  // color: #CFD3DC;
  color: #141414;
  .header-menu-item {
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>