import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './out/App';
import App_in from './in/App_in'
import Profile from './in/profile';
import Home_in from './in/Home_in'

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <App_in />
      </Switch>
    </BrowserRouter>
    
    /*<Profile />,*/
    ,
    
      document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
