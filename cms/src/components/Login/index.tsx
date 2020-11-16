import React, { FC } from 'react'

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';
export interface  Form {
    account:string
    password:string
}
interface Props{
    onConfirm(form:Form):void
}
const Login: FC<Props> = (props) => {
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
Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    )
}

export default Login;