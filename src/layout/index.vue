<!-- 只有在 components 选项中的组件可以被动态组件使用-->
<script lang="ts">
  // layout index
  import Default from './layoutModes/default.vue';
  import Float from './layoutModes/float.vue';
  import Config from './components/config/index.vue';
  import Watermark from './components/watermark.vue';
  import { useConfigStore} from '@/store/config';

  export default {
    name: 'Layout/index',
    components: {
      Default,
      Float,
      Config,
      Watermark,
    },
    setup() {
      const { layout } = useConfigStore();

      return {
        layout,
      };
    },
  }
</script>

<template>
  <component :is="layout.layoutMode" />
  <Config />
  <Watermark />
</template>