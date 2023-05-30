import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import Layout from '../layout/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/home1',
    children: [
      {
        path: '/icon',
        name: 'icon',
        component: () => import('../views/Icon.vue'),
      },
      {
        path: '/document',
        name: 'document',
        component: () => import('../views/document.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
    ],
  },

  {
    path: '/login',
    name: '登录页',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/403',
    name: 'error 403',
    component: () => import('../views/error/403.vue'),
  },
  {
    path: '/404',
    name: 'error 404',
    component: () => import('../views/error/404.vue'),
  },
  {
    path: '/500',
    name: 'error 500',
    component: () => import('../views/error/500.vue'),
  },
  {
    path: '/*',
    redirect: '/404',
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;