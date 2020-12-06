import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'jss-plugin-vendor-prefixer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);