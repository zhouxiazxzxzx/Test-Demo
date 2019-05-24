/*
 * router for new-see project
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Front from '@/views/front/index.vue'
import Layout from '@/views/common/Layout.vue'

const iniView = '/front/login';

export const constantRouterMap = [


  // 前台登录
  {
    path: '/front',
    component: Front,
    redirect: '/front/login',
    name: '前台',
    children: [
      {
        path: 'login',
        component: () => import('@/views/login/login'),
        name: '登录',
        meta: { type: 'front' },
      }
    ],
  },

  // 主页
  {
    path: '/home',
    component: Layout,
    redirect: '/home/dashboard',
    name: '首页',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { requireAuth: true, key: 'dashboard' },
        name: '欢迎页面',
      },
    ],
  },

  // 初始及错误路由导向匹配
  { path: '/', redirect: iniView },

];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
