import {createStore,combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware,connectRouter} from 'connected-react-router';

import sagaTask from './saga';
import history from './history';
import Login from './model/login';

// 合并 reducer
const reducers = combineReducers({
	Login,
	router:connectRouter(history)
});

// 创建 saga 中间件
const sagaMid = createSagaMiddleware(); //创建一个saga的中间件
// 创建 router 中间件
const routerMid = routerMiddleware(history);
const middleware  = composeWithDevTools(applyMiddleware(routerMid,
	sagaMid
));

const store =  createStore(reducers,middleware);

sagaMid.run(sagaTask);

export default store;



