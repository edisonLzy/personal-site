import React,{FC} from 'react';
import {Button} from 'antd';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from './login';
import NotFound from './404';
const App:FC = ()=>{
	return (
		<Router>
			<Switch>
				<Route path="/" component={Login} exact></Route> 
				<Route path="*" component={NotFound}></Route> 
			</Switch>   
		</Router>
	);
};
export default App; 
