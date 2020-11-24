/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-empty-function */
// 导航守卫
import { Location } from 'history';
import React ,{FC, useMemo,useEffect}from 'react';

import {ConnectedRouter} from 'connected-react-router';
import history from '../../store/history';

import {BrowserRouter as Router,useHistory} from 'react-router-dom';
let prevLoaction: Location<any>, location: Location<any>, action:string, unBlock;


interface OnChange{
    (prevLoaction:Location<any>, location:Location<any>, action:string):void;
}

type Props =Partial<{
    onBeforeChange(...args:any[]):void,
    onChange:OnChange
}>

function useBlock(){
	const history = useHistory();
	useEffect(() => {
		// 添加 block
		const unBlock = history.block(block=>{
			const {location:newLocation,action:ac} = block;
			prevLoaction = history.location;
			location = newLocation;
			action = ac;
			return '';
		});    
		return () => {
			unBlock();
		};
	}, []);
}

function useListen(onChange?:OnChange){
	const history = useHistory();
	useEffect(() => {
		// 添加 Listen
		const unListen = history.listen(({location,action})=>{
			if(onChange){
				const newLocation = history.location;
				onChange(prevLoaction, newLocation, action);
			}
		});
		return () => {
			unListen();
		};
	}, []);  
}

const GuideHelper:FC<Props> = props=>{
	useBlock();
	useListen(props.onChange);
	return null;
};

const RouterGuide:FC<Props> = (props)=> {
	// 处理 getUserConfirmation
	const handler = useMemo(()=>(msg:string,commit:(comfirm:boolean)=>void)=>{
		if (props.onBeforeChange) {
			props.onBeforeChange(prevLoaction, location, action, commit);
		}
		else{
			commit(true);
		}


	},[]);
	return (
		<ConnectedRouter history={history}>
			<Router getUserConfirmation={handler}>
				<GuideHelper onChange={props.onChange}/>
				{props.children}
			</Router>
		</ConnectedRouter>
	);
};
export default RouterGuide;
