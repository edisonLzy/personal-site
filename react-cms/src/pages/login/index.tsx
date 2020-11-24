import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { push } from 'connected-react-router';
import {connect,useDispatch,useStore,batch,useSelector} from 'react-redux';
import {updateLogin} from '../../store/model/login';
import CanvasBg from '../../common/components/CanvasBg';
import Panel from '../../common/components/Panel';
import Entry,{Form} from '../../components/Login';
import './index.scss';
import { Action } from 'redux-actions';
import {setLoginApi} from '../../api/user';
import { log } from 'console';

function mapState(state:any){
	return {
		isLogin:state.Login.isLogin
	};
}



/**
 * 
 * @param dispath 
 * @param props  传递给 connect 返回组件的 属性值
 */
function mapDispatch(dispath: (arg0: Action<any>) => void,props:any){
	return {
		onUpdatelogin(status:boolean){
			// batch(()=>{
			// 	dispath(updateLogin(true));
			// 	dispath(updateLogin(false));
			// 	dispath(updateLogin(true));
			// });
			dispath(updateLogin(status));
		}
	};
}

type MapDispatch  = ReturnType<typeof mapDispatch>;
type MapState  = ReturnType<typeof mapState>;
type T = MapDispatch& MapState;
interface Props extends T {
		children?:React.ReactNode
}   


const Login: FC<Props> = (props) => {
	const history = useHistory();
	const [isLogin, setIsLogin] = useState(true);
	async function onConfirm(form:Form){
		// const data = await setLoginApi(form);
		props.onUpdatelogin(true);
		history.push('/admin');
	}
	function onToggle(isLogin:boolean){
		setIsLogin(isLogin);
	}
	return (
		<>
			<CanvasBg>
				<Panel>
					<Entry onConfirm={onConfirm} isLogin={isLogin} onToggle={onToggle}/>
				</Panel>
			</CanvasBg>
		</>
	);
};
export default connect(mapState,mapDispatch)(Login);
