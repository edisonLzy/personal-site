import React,{FC}from 'react';
import './index.scss';
const Panel:FC = (props)=> {
	return (
		<div className="panel">
			<section className="panel-left">
				{props.children}
			</section>
			<section className="panel-right">
                
			</section>
		</div>
	);
};
export default Panel;
