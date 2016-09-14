import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import routes from './config/routes';
import App from './containers/App';

ReactDOM.render(
  routes,
  document.getElementById('scotchy-app')
);
