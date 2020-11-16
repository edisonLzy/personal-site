import { all } from 'redux-saga/effects';
import userTask from './user';
/**
* saga任务
*/
export default function* () {
	yield all([userTask()]);
	console.log('saga 完成');
}
