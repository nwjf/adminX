<script>
import { defineComponent, toRefs } from 'vue';
import DefaultMode from './defaultMode.vue';
import FloatMode from './floatMode.vue';
import { useConfigStore } from '../../../store/config';


export default defineComponent({
  name: 'LayoutConfig',
  components: {
    DefaultMode,
    FloatMode,
  },
  setup() {
    const {
      layout,
      showConfig,
      restore,
      theme,
    } = toRefs(useConfigStore());
    const {
      setLayout,
      setShowConfig,
      setTheme,
    } = useConfigStore();

    const onThemeModeChange = (d) => {
      setTheme('mode', d);
      document.querySelector('html').classList.add();
      const html = document.querySelector('html');
      html.classList.forEach((item) => {
        html.classList.remove(item);
      });
      html.classList.add(d);

    };

    return {
      showConfig,
      layout,
      setLayout,
      setShowConfig,
      restore,
      theme,
      onThemeModeChange,
    };
  },
})
</script>



<template>
  <el-drawer
    :model-value="showConfig"
    title="布局配置"
    :direction="direction"
    :before-close="handleClose"
    size="310px"
    @close="setShowConfig(false)"
  >
    <el-divider content-position="center" border-style="dashed">布局方式</el-divider>
    <el-row>
      <el-col :span="12">
        <DefaultMode
          :active="layout.layoutMode === 'Default'"
          @click="setLayout('layoutMode', 'Default')" />
      </el-col>
      <el-col :span="12">
        <FloatMode
          :active="layout.layoutMode === 'Float'"
          @click="setLayout('layoutMode', 'Float')" />
      </el-col>
    </el-row>

    <el-divider content-position="center" border-style="dashed">主题配置</el-divider>

    <el-radio-group :model-value="theme.mode" @change="onThemeModeChange">
      <el-radio label="white" size="large" style="width: 100%;margin: 0;">亮色主题</el-radio>
      <br>
      <el-radio label="dark" size="large" style="width: 100%;margin: 0;">暗黑主题</el-radio>
    </el-radio-group>


    <el-button type="info" style="width: 100%;margin-top: 20px;" @click="restore">恢复默认</el-button>

  </el-drawer>
</template>
