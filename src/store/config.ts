/**
 * 配置 store
 */
import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
// import { Layout } from './index.d';

export interface Layout {
  layoutMode: string;
  menuWidth: number;
  menuCollapseWidth: number;
  menuCollapse: boolean;
}
export interface Theme {
  mode: string;
}

export const useConfigStore = defineStore('configStore', () => {

  const showConfig = ref<boolean>(false);

  const layout: Layout = reactive({
    layoutMode: 'Default',
    /**侧边栏 */
    // 侧边菜单宽度(展开时)，单位px
    menuWidth: 260,
    // 侧边菜单宽度(折叠时)，单位px
    menuCollapseWidth: 64,
    // 是否水平折叠收起菜单
    menuCollapse: false,
  });

  const theme: Theme = reactive({
    mode: 'white', // 主题模式
  });
  function setTheme(key: keyof Theme, value: string) {
    theme[key] = value;
  }

  function setLayout(key: keyof Layout, value: any) {
    layout[key] = value as never;
  }
  function getMenuWidth() {
    return !layout.menuCollapse ? layout.menuWidth + 'px' : layout.menuCollapseWidth + 'px';
  }
  function setShowConfig(show: boolean) {
    showConfig.value = show;
  }
  // 恢复默认
  function restore() {
    layout.layoutMode = 'Default';
  }

  return {
    showConfig,
    layout,
    setLayout,
    getMenuWidth,
    setShowConfig,
    restore,
    theme,
    setTheme,
  };
});
