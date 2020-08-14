# 个人blog 后台管理

> element + vue + axios

## 路由全局守卫
> 全局守卫属于VueRouter的实例
```js
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next)=>{

})
```