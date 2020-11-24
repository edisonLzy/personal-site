# CMS 

> react全家桶 + antd + typescript 

## 初始化项目 

> npx create-react-app [app] --template typescript

## 环境搭建

**add scss**

> cnpm i node-sass@4.14.1

**add eslint**

1. cnpm i eslint && npx eslint --init
2. 新增 .vscode文件 setting.json 配置 eslint

```js
// 检查src
eslint src --ext tsx,ts;
// 修复
eslint 
```

**add git cz**
<!-- todo -->
> commitizen & conventional-change-log 

**add husky**
<!-- todo -->
> validate-commit-msg 

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


**add connected-react-router**

> npm install --save connected-react-router
1. 修改store 新增 routerMiddware 
```js
import {createStore,combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
++ import {composeWithDevTools} from 'redux-devtools-extension';
++ import {routerMiddleware,connectRouter} from 'connected-react-router';

import sagaTask from './saga';
++ import history from './history';
import Login from './model/login';

// 合并 reducer
const reducers = combineReducers({
	Login,
++ 	router:connectRouter(history)
});

// 创建 saga 中间件
const sagaMid = createSagaMiddleware(); //创建一个saga的中间件
// 创建 router 中间件
++ const routerMid = routerMiddleware(history);
++ const middleware  = composeWithDevTools(applyMiddleware(routerMid,
	sagaMid
));
export default createStore(reducers,middleware);

sagaMid.run(sagaTask);



```
2. 安装 history库 用于创建 history 对象
> npm i history
```js
import { createBrowserHistory } from "history";
export default createBrowserHistory();
```

3. 使用 ConnectedRouter组件提供 全局统一的history对象 

```js
		<ConnectedRouter history={history}>
			<Router getUserConfirmation={handler}>
				<GuideHelper onChange={props.onChange}/>
				{props.children}
			</Router>
		</ConnectedRouter>
```
**add redux-devtools-extension**

> 类似vue-devtools
1. chrome插件：redux-devtools
2. 使用npm安装第三方库：redux-devtools-extension
3. 修改 store

```js
import { composeWithDevTools } from "redux-devtools-extension"

const middleware  = composeWithDevTools(applyMiddleware(
	sagaMid
));
export default createStore(reducers,middleware);
```

## 过渡动画 


## 单元测试
> jest

1. __test__ 用于存放单元测试
2. 

## 持续集成

> travis

1. .travis.yml
2. 获取 github 个人 token

# 问题记录

1.引入 antd 严格模式下报错 
> findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Wave which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here。 

`暂时删除 严格模式解决`


# get 
1. react-redux 链接 react 和 redux
2. devServer.historyAPiFallback的用法 是什么
3. ts-loader 工作流程 是什么
4. esModuleInterop 的作用是什么 paths的作用是什么 
5. webpack5.xx 使用 webpack serve 启动 webpack服务 
6. htmlWebpackPlugin 设置 filename 的 hash 防止缓存
7. react-redux 源码
```js
           useEffect(() => {
                
                return store.subscribe(() => {
                    var newState = mapStateToProps && mapStateToProps(store.getState());
                    setState(prevState => {
                        if (compare(prevState, newState)) {
                            return prevState;
                        }
                        else {
                            return newState;
                        }
                    })
                })
            }, [store])
```
8. useStore 获取当前的仓库 
9. useDispatch  获取当前的dispatch
10. useSelector 获取仓库中的state 用法和 connect 第一个参数类似
```js
	const state = useSelector<MapState>(state=>{
		console.log(state);
	});
```
11. batch 多次 dispatch 只触发一次 re-render

```js
		onUpdatelogin(status:boolean){
			batch(()=>{
                // 合并多次 dispatch 只触发一次 render 类似 vue的 $nexttick
				dispath(updateLogin(true));
				dispath(updateLogin(false));
				dispath(updateLogin(true));
			});
        }
        
```