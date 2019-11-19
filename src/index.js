import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppBar from './component/AppBar'
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Support from './Support';
import About from './About';
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <div>
        <AppBar />
        <Register />
    </div>
    
    , document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
