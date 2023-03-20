import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import Layout from '../layout/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
      }
    ]
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;