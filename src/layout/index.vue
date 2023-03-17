<!-- 只有在 components 选项中的组件可以被动态组件使用-->
<script lang="ts">
  // layout index
  import Default from './layoutModes/default.vue';
  export default {
    name: 'Layout/index',
    components: { Default },
  }
</script>

<script lang="ts" setup></script>


<template>
  <component is="Default" />
</template>

<style lang="scss" scoped>

</style>