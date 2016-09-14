import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './app/containers/App';

console.log("Hello from React");

ReactDOM.render(
  <App />,
  document.getElementById('scotchy-app')
);
