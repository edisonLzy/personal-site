import {createActions,handleActions} from 'redux-actions';

const state = {
	isLogin : false
};

export type StateType = typeof state;


// 创建 actions
export const {updateLogin} = createActions({
	UPDATE_LOGIN:(status)=>status,
});

const updateLoginType = updateLogin.toString();
// 创建 reducers
const reducers = handleActions({
	[updateLoginType]:(state,{payload})=>{
		return {
			...state,
			isLogin: (payload as any) as boolean
		};
	}
},state);

export default reducers;