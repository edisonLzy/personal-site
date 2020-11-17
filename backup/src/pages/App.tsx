import React,{FC} from 'react';
import {Route,Switch } from 'react-router-dom';
import ProtectedRoute from '../router/RouterProtected';
import {Provider} from 'react-redux';
import RouterGuide from '../router/RouterGuard';
import Store from '../store';
import Login from './login';
import Admin from './admin';
import NotFound from './404';
const App:FC = ()=>{
	return (
		<Provider store={Store}>
			<RouterGuide onChange={(pre,location,action) =>{
				console.log(pre,location,action);
			}} >
				<Switch>
					<Route path="/" component={Login} exact></Route> 
					<ProtectedRoute path="/admin" component={Admin} exact></ProtectedRoute>
					<Route path="*" component={NotFound}></Route> 
				</Switch>   
			</RouterGuide>
		</Provider>
	);
};
export default App; 
