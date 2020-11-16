# CMS 

> react全家桶 + antd + typescript 

## 环境搭建

**add scss**

> cnpm i node-sass@4.14.1

**add eslint**

> cnpm i eslint && npx eslint --init

**add git cz**

> 

**add antd**

> cnpm i antd 

```scss
@import '~antd/dist/antd.css'; 导入antd 样式
```

```js
// 按需加载组件
import {Button} from 'antd';
```

**add router**

> cnpm i react-router-dom

## 过渡动画 


# 问题记录

1.引入 antd 严格模式下报错 
> findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Wave which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here。 

`暂时删除 严格模式解决`


# get 
1. react-redux 链接 react 和 redux