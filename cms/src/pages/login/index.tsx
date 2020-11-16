import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateLogin} from '../../store/model/login';
import CanvasBg from '../../common/components/CanvasBg';
import Panel from '../../common/components/Panel';
import LoginComp,{Form} from '../../components/Login';
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
	async function handleLogin(form:Form){
		const data = await setLoginApi(form);
		console.log(data);
		props.onUpdatelogin(true);
		history.push('/admin');
	}
	return (
		<>
			<CanvasBg>
				<Panel>
	               <LoginComp onConfirm={handleLogin}/>
				</Panel>
			</CanvasBg>
		</>
	);
};
export default connect(mapState,mapDispatch)(Login);
