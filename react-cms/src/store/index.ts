import {createStore,combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaTask from './saga';
import Login from './model/login';


// 合并 reducer
const reducers = combineReducers({
	Login
});

// 创建 saga 中间件
const sagaMid = createSagaMiddleware(); //创建一个saga的中间件

export default createStore(reducers,applyMiddleware(
	sagaMid
));

sagaMid.run(sagaTask);

