/*
 * router for new-see project
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
let _dynamic = file => resolve => require(['@/views/' + file + '.vue'], resolve);
const App = resolve => require(['@/App'], resolve);
const Front = _dynamic('front/index');
const Layout = resolve => require(['@/views/common/Layout.vue'], resolve);
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
      },
      {
        path: 'loginStation',
        component: () => import('@/views/login/loginStation'),
        name: '登录中转',
        meta: { type: 'loginStation' },
      },
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
