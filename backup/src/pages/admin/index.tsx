import React,{FC} from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux';
import { updateLogin } from '../../store/model/login';
import { Action } from 'redux-actions';

interface Props extends ReturnType<typeof mapDispatch> {
	children?:React.ReactNode
}
const Admin:FC<Props> = (props)=> {
	return (
		<div>
           this is admin
			<Button onClick={e=>{			
				props.onUpdatelogin(false);
			}
			}>注销</Button>
		</div>
	);
};

function mapDispatch(dispath: (arg0: Action<any>) => void){
	return {
		onUpdatelogin(status:boolean){
			dispath(updateLogin(status));
		}
	};
}

export default connect(null,mapDispatch)(Admin);
