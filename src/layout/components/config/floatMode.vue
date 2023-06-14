<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'LayoutModeFloat',
  props: {
    active: { type: Boolean, default: false },
  },
  setup(props) {
    const { active } = toRefs(props);
    return {
      active,
    };
  },
});
</script>


<template>
  <div class="default-mode-warp" :class="{ active }">
    <div class="mode-side"></div>
    <div class="mode-right">
      <div class="mode-header"></div>
      <div class="mode-content"></div>
    </div>
    <div class="mode-active">{{ active ? '默认' : '浮动' }}</div>
  </div>
</template>

<style lang="scss" scoped>
.default-mode-warp {
  width: 128px;
  height: 98px;
  background: #1d1e1f;
  display: flex;
  border: 1.5px solid #414243;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  &.active {
    border-color: #409eff;
    .mode-active {
      border-width: 2px;
    }
  }
  .mode-side {
    width: 10px;
    height: calc(100% - 10px);
    background: #363637;
    margin: 5px;
    margin-right: 4px;
  }
  .mode-right {
    flex: 1;
    padding-right: 5px;
    height: 100%;
    overflow: hidden;
    padding-bottom: 50px;
    .mode-header {
      width: 100%;
      height: 10px;
      background: #4C4D4F;
      margin-top: 5px;
    }
    .mode-content {
      width: 100%;
      height: 72px;
      background: #4C4D4F;
      margin-top: 4px;
    }
  }
  .mode-active {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #409eff;
    color: #409eff;
    position: absolute;
    font-weight: 700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 50px;
  }
}
</style>