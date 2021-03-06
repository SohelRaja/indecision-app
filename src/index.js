import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//This is for Some Default value Pass through app
//ReactDOM.render(<App options={['One','Two','Three','Four']}/>, document.getElementById('root')); 
//This is for Without Default value Pass through app
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
