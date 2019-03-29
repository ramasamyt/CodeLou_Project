import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
//import App1 from './Containers/Apione';
//import App2 from './Containers/Apitwo';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(

    <App />, 
    document.getElementById('root')
    );

serviceWorker.unregister();
