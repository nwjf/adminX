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
        name: 'document',
        path: '/document',
        icon: 'el-icon-Document',
        children: [],
      },
      {
        name: 'home',
        path: '/home',
        icon: 'el-icon-Film',
        children: [],
      },
      {
        name: '图标',
        path: '/icon',
        icon: 'el-icon-Notification',
        children: [],
      },
      {
        name: '错误页面',
        path: '/icon',
        icon: 'el-icon-WarningFilled',
        children: [
          {
            name: '403',
            path: '/403',
            icon: '',
          },
          {
            name: '404',
            path: '/404',
            icon: '',
          },
          {
            name: '500',
            path: '/500',
            icon: '',
          },
        ],
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