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
        name: 'home1',
        path: '/home1',
        icon: 'el-icon-Film',
        children: [],
      },
      {
        name: 'home2',
        path: '/home2',
        icon: 'el-icon-Film',
        children: [],
      },
      {
        name: 'home3',
        path: '/home3',
        icon: 'el-icon-Film',
        children: [],
      },
      {
        name: 'home4',
        path: '/home4',
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