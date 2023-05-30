<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'LayoutModeDefault',
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
    <div class="mode-header"></div>
    <div class="mode-active">{{ active ? '默认' : '经典' }}</div>
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
  }
  .mode-side {
    width: 23px;
    height: 100%;
    background: #363637;
  }
  .mode-header {
    width: 100%;
    height: 10px;
    background: #4C4D4F;
  }
  .mode-active {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #409eff;
    color: #409eff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 50px;
  }
}
</style>