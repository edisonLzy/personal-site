# 个人blog 后台管理

> ant-design-vue + vue + axios
## ant-design-vue
- [x] 依赖 less-loader 所以需要下载less-loader
- [x] 修改 vue.config.js
```js
module.exports = {
    css: {
        loaderOptions: {
          less: {
              lessOptions:{
                  javascriptEnabled: true,
              }
          }
        }
      }
}
```