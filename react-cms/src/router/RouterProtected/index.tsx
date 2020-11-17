import React,{FC} from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import {connect} from 'react-redux';
interface ProtectedRoute  extends ReturnType<typeof mapState>{
    component:React.ComponentType<any>;
	render?:(props: RouteComponentProps<any>) => React.ReactNode,
	path:string, 
	[other:string]:any
}
// todo 
function mapState(state:any){
	return {
		isLogin:state.Login.isLogin
	};
}

const ProtectedRoute:FC<ProtectedRoute> = ({ component: Component, children, render, ...rest })=>{
	return <Route {...rest}
		render={values => {
			if (rest.isLogin) {
				//可以正常展示页面
				return <Component />;
			}
			else {
				return <Redirect to={{
					pathname: '/',
					state: values.location.pathname
				}} />;
			}
		}}
	/>;
};

export default connect(mapState)(ProtectedRoute);
