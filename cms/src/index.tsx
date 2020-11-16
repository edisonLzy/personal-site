import React from 'react';
import ReactDOM from 'react-dom';
import './common/scss/reset.scss';
import './common/scss/antd.scss';
import App from './pages/App';
import './store';
import './mock';
ReactDOM.render(<App/>,
	document.getElementById('root')
);