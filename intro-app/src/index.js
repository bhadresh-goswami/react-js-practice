import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './components/hello';
import StylesJsx from './components/stylesjsx';

ReactDOM.render(
  <React.StrictMode>
  <Hello/>
    <StylesJsx/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
