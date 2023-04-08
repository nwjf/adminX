import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import Layout from '../layout/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/login1',
    children: [
      {
        path: '/login1',
        name: 'login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/icon',
        name: 'icon',
        component: () => import('../views/Icon.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: '登录页',
    component: () => import('../views/Login.vue'),
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;