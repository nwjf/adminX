<script lang="ts" setup>
import { useRoute } from 'vue-router';
const { path } = useRoute();
</script>

<template>
  <div>
    <div style="text-align: center; font-size: 40px; margin-top: 40px;">home</div>
    <div style="text-align: center; font-size: 40px; margin-top: 40px;">{{path}}</div>
  </div>
</template>