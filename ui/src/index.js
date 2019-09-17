import React from 'react';
import ReactDOM from 'react-dom';
//import '../node_modules/skeleton.css/skeleton.css';
import 'purecss/build/grids.css';
import 'purecss/build/buttons.css';
import './index.css';
import './selector.css';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('selector-app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
