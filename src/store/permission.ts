/**
 * nav tabs
 */

import { defineStore } from 'pinia';
import { reactive } from 'vue';
// import { Sidebar } from './index.d';

export const usePermissionStore = defineStore('permissionStore', () => {
  const permission = reactive({
    // sidebar
    sidebar: [
      {
        name: '标题1',
        path: '/login1',
        icon: 'el-icon-Film',
        children: [
          {
            name: '标题1-1',
            path: '/login1-1',
            icon: 'el-icon-Film',
          }
        ],
      },
      {
        name: '标题2',
        path: '/login2',
        icon: 'el-icon-Film',
        children: [],
      },
      {
        name: '标题3',
        path: '/login3',
        icon: 'el-icon-Film',
        children: [],
      },
      {
        name: '标题4',
        path: '/login4',
        icon: 'el-icon-Film',
        children: [],
      },
    ],
    // sidebar active
    sidebarActive: '',
    routes: [],
    addRoutes: [],
  });

  return {
    permission,
  };
});