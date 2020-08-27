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

## elementUI 的form表单验证 

> 表单项绑定的属性值 必须和 el-form-item的prop属性 以及 el-form中校验规则一致
```html
      <el-form-item label="Account" prop="account">
        <el-input v-model="form.account" clearable placeholder="please enter your account"></el-input>
      </el-form-item>

```