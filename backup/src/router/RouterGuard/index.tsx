/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-empty-function */
// 导航守卫
import { Location } from 'history';
import React ,{FC, useMemo,useEffect}from 'react';
import {BrowserRouter as Router,useHistory} from 'react-router-dom';
let prevLoaction: Location<unknown>, location: Location<unknown>, action:string, unBlock;


interface OnChange{
    (prevLoaction:Location<unknown>, location:Location<unknown>, action:string):void;
}

type Props =Partial<{
    onBeforeChange(...args:any[]):void,
    onChange:OnChange
}>

function useBlock(){
	const history = useHistory();
	useEffect(() => {
		// 添加 block
		const unBlock = history.block((newLocation,ac)=>{
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
		const unListen = history.listen((location,action)=>{
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
		<Router getUserConfirmation={handler}>
			<GuideHelper onChange={props.onChange}/>
			{props.children}
		</Router>
	);
};
export default RouterGuide;
