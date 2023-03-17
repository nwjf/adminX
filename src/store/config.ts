/**
 * 配置 store
 */
import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useConfigStore = defineStore('configStore', () => {
  const layout = reactive({
    layoutMode: 'Default',
  });

  return { layout };
});
