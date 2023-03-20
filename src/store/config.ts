/**
 * 配置 store
 */
import { reactive } from 'vue';
import { defineStore } from 'pinia';
// import { Layout } from './index.d';

export interface Layout {
  layoutMode: string;
  menuWidth: number;
  menuCollapse: boolean;
}

export const useConfigStore = defineStore('configStore', () => {

  const layout: Layout = reactive({
    layoutMode: 'Default',
    /**侧边栏 */
    // 侧边菜单宽度(展开时)，单位px
    menuWidth: 260,
    // 是否水平折叠收起菜单
    menuCollapse: false,
  });

  function setLayout(key: keyof Layout, value: any) {
    layout[key] = value as never;
  }
  function getMenuWidth() {
    return !layout.menuCollapse ? layout.menuWidth + 'px' : '64px';
  }

  return {
    layout,
    setLayout,
    getMenuWidth,
  };
});
