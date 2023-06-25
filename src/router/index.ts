import { createRouter, createWebHistory, Router, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import { useUserStore } from '../store/user';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/document',
    meta: { auth: true },
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
    meta: { auth: false },
    component: () => import('../views/error/403.vue'),
  },
  {
    path: '/404',
    name: 'error 404',
    meta: { auth: false },
    component: () => import('../views/error/404.vue'),
  },
  {
    path: '/500',
    name: 'error 500',
    meta: { auth: false },
    component: () => import('../views/error/500.vue'),
  },
  {
    path: '/*',
    redirect: '/404',
    meta: { auth: false },
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { userInfo, getCookies } = useUserStore();
  // 登录拦截
  if (!to.meta.auth && to.path !== '/login') {
    next();
  }
  else if (!userInfo.uid) {
    const info = await getCookies();
    if (!info.uid && to.path !== '/login') {
      next('/login');
    }
    else if (info.uid && to.path === '/login') {
      next('/');
    }
    else {
      next();
    }
  }
  else {
    if (to.path === '/login') {
      next('/');
    }
    else {
      next();
    }
  }
});

export default router;