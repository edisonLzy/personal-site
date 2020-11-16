import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {updateLogin} from '../../store/model/login';
import CanvasBg from '../../common/components/CanvasBg';
import Panel from '../../common/components/Panel';
import './index.scss';
import { Action } from 'redux-actions';
import { User } from './type';
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
	async function Login (){
		const account = {
			account:'123',
			password:'123'
		};
		const data = await setLoginApi(account);
		props.onUpdatelogin(true);
		history.push('/admin');
	}
	return (
		<>
			<CanvasBg>
				<Panel>
					<Button 
						type="primary"
						onClick={Login}
					>
		Log in
					</Button>	
				</Panel>
			</CanvasBg>
		</>
	);
};
export default connect(mapState,mapDispatch)(Login);


{/* <Form
name="normal_login"
className='login-form'
initialValues={{ remember: true }}
onFinish={onFinish}
>
<Form.Item
	name="username"
	rules={[{ required: true, message: 'Please input your Username!' }]}
>
	<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
</Form.Item>
<Form.Item
	name="password"
	rules={[{ required: true, message: 'Please input your Password!' }]}
>
	<Input
		prefix={<LockOutlined className="site-form-item-icon" />}
		type="password"
		placeholder="Password"
	/>
</Form.Item>
<Form.Item>
	<Form.Item name="remember" valuePropName="checked" noStyle>
		<Checkbox>Remember me</Checkbox>
	</Form.Item>

	<a className="login-form-forgot" href="">
		Forgot password
	</a>
</Form.Item>

<Form.Item>
	<Button type="primary" htmlType="submit" className="login-form-button">
		Log in
	</Button>
Or <a href="">register now!</a>
</Form.Item>
</Form> */}
