import React,{FC}from 'react';
import './index.scss';
const Panel:FC = (props)=> {
	return (
		<div className="panel">
			<section className="panel-left">
				
			</section>
			<section className="panel-right">
				{props.children}
			</section>
		</div>
	);
};
export default Panel;
