# 使用webpack 搭建 

## 改造package.json

``` shell

"scripts": {
    "dev": "nodemon --watch src --exec 'npm run dev:build && npm run dev:exec'",
    "dev:build": "cross-env NODE_ENV=development webpack",
    "dev:exec": "node dist/index",
    "build": "cross-env NODE_ENV=production webpack"
  },

```

## nodemon

> [npm](https://www.npmjs.com/package/nodemon)

 - [x] nodemon --watch src --watch src2 
 - [x] nodemon 对ts文件变化监听
 

``` js
 // nodemon looks for files with the .js, .mjs, .coffee, .litcoffee, and .json extensions.
 // looks for ts
 nodemon - e ts, tsx
```

## 数据驱动和ORM

### Sequelize

* [x] 定义模块的时候因为tree shaking的原因导致 初始化代码的无法正常运行

> 将初始化写成一个函数

``` ts
export function initAdmin() {
  const Admin = sequelize.define('Admin', {
    account: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      createdAt: false,
      updatedAt: false,
      paranoid: true,
    }
  )
  return Admin
} 
```

### 三层架构模型


## 功能 

### 注册 | 登陆

- [x] 颁发JWT

- [x] 认证JWT

- [x] JWT

### 文件上传

- [x] 用户头像的上传

### 博文模块

### 评论模块

#### 客户端

- [x] http请求头 
```js
// Content-Type:multipart/form-data 多部分form-data MIME类型
```
- [x] 文件类型描述
```js
// Content-Disposition:form-data;
// Content-Type:image/jpeg 类型
```
- [x] 传统的 form表单上传
- [x] AJAX 上传
```js
// input type = file 通过files拿到文件对象
const formData = new FormData();//构建form-data格式的消息题
```
#### 服务器端
> multer: 解析 formData的请求体 
- [x] cnpm i multer

### 博文管理
> Articles 表



# GET

## 时间处理

# 错误记录

- [x] Incorrect string value: '\xE9\x98\xBF\xE6\x92\x92...' 
```sql
1. 设置字符编码为 utf8
2. 执行
ALTER TABLE blog.article MODIFY article_title VARCHAR(10) CHARACTER SET "utf8";
···

- [x] Incorrect datetime value: '0000-00-00 00:00:00' for column 'createdAt' at row 1
> 重新同步了 数据库

## did