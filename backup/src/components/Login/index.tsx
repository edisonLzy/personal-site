import React, { FC,useState } from 'react';

import { Form, Input, Button, Checkbox,Upload } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';
export interface Form {
    account:string
    password:string
}
interface LoginType{
    onConfirm(form:Form):void
    onToggle(isLogin:boolean):void
}
const Login: FC<LoginType> = (props) => {
	return (
		<Form
			name="normal_login"
			className='login-form'
			initialValues={{ remember: true }}
			onFinish={props.onConfirm}
		>
			<Form.Item
				name="account"
				rules={[{ required: true, message: 'Please input your account!' }]}
			>
				<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="account" />
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
Or <a onClick={e=>{
					props.onToggle(false);
				}}>register now!</a>
			</Form.Item>
		</Form>
	);
};


function titleCase(str:string):string {
	const newStr = str.slice(0,1).toUpperCase() +str.slice(1).toLowerCase();
	return newStr;
}


function getFormItem(label:string[]){
	return label.map(it=>{
		const label =titleCase(it);
		const placeholder=`Please input your ${it}!`;
		return  <Form.Item label={label} name={it} rules={[{ required: true, message:placeholder }]} key={it}>
			<Input placeholder={placeholder} />
		</Form.Item>;
	});
}
const SignItem  = getFormItem(['account','password','telephone','name']);


function getBase64(img:File, callback:any) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}
  
  
const Sign:FC<LoginType> = props =>{
	const [imageUrl, setImageUrl] = useState('');
	const handleChange = (info:any) => {
		if (info.file.status === 'uploading') {
		
			return;
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, (url:string) =>{
				setImageUrl(url);
			});
		}
	};


	return <Form 
		className="login-form"
		name="sign"
		onFinish={props.onConfirm}>
		<Form.Item>
			<Upload
				name="avatar"
				listType="picture-card"
				className="avatar-uploader"
				showUploadList={false}
				action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				onChange={handleChange}
			>
				<img src={imageUrl} alt="avatar"  className="avatar-img"/>
			</Upload>
		</Form.Item>
		{SignItem}
		<Form.Item>
			<Button type="primary" htmlType="submit" className="login-form-button">
                    Sign in
			</Button>
Or <a onClick={e=>{
				props.onToggle(true);
			}}>logging now!</a>
		</Form.Item>

            
	</Form>;
};

interface EntryType extends LoginType {
    isLogin: boolean;
}
const Entry:FC<EntryType> = props =>{
	const Comp = props.isLogin ? <Login {...props} />:<Sign {...props}/>;
	return Comp;
};




export default Entry;