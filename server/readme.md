# 使用webpack 搭建 

## 改造package.json

```shell

"scripts": {
    "dev": "nodemon --watch src --exec 'npm run dev:build && npm run dev:exec'",
    "dev:build": "cross-env NODE_ENV=development webpack",
    "dev:exec": "node dist/index",
    "build": "cross-env NODE_ENV=production webpack"
  },


```
## nodemon

 - [x] nodemon --watch src

## 数据驱动和ORM