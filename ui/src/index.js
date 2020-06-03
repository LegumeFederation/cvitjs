import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/grids.css';
import 'purecss/build/buttons.css';
import './index.css';
import './selector.css';
import './style.css';
import App from './App';

// Initial entry point, bind gcvit ui to 'selector-app' div
ReactDOM.render(<App />, document.getElementById('selector-app'));

