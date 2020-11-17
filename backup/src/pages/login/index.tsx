import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateLogin} from '../../store/model/login';
import CanvasBg from '../../common/components/CanvasBg';
import Panel from '../../common/components/Panel';
import Entry,{Form} from '../../components/Login';
import './index.scss';
import { Action } from 'redux-actions';
import {setLoginApi} from '../../api/user';

function mapState(state:any){
	return {
		isLogin:state.Login.isLogin
	};
}



function mapDispatch(dispath: (arg0: Action<any>) => void){
	return {
		onUpdatelogin(status:boolean){
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
		const data = await setLoginApi(form);
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
