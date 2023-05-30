<script>
import { defineComponent, ref, defineExpose } from 'vue';
import DefaultMode from './defaultMode.vue';

export default defineComponent({
  name: 'LayoutConfig',
  components: {
    DefaultMode,
  },
})
</script>

<script setup>
const show = ref(false);

const onShow = () => {
  show.value = true;a
};

defineExpose({ onShow });
</script>


<template>
  <el-drawer
    v-model="show"
    title="布局配置"
    :direction="direction"
    :before-close="handleClose"
    size="310px"
  >
    <el-divider content-position="center" border-style="dashed">布局方式</el-divider>
    <el-row>
      <el-col :span="12">
        <DefaultMode :active="true" />
      </el-col>
      <el-col :span="12">123</el-col>
    </el-row>

  </el-drawer>
</template>
