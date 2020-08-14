import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Storage from "@/utils/localStorage"
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
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

router.beforeEach((to, from, next) => {
  const { name: toName } = to;
  const withAuth = Storage.has("token");
  if (toName === 'login' || withAuth) {
    next()
  } else {
    next({ name: 'login' })
  }
})
export default router;
