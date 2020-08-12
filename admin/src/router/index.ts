import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'login',
    component:  () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
  },
  {
    path: '/insert',
    name: 'insert',
    component: () => import(/* webpackChunkName: "about" */ '../views/insert.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/list.vue'),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
