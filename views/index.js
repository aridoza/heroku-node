import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import routes from '../app/config/routes';

ReactDOM.render(
  routes,
  document.getElementById('scotchy-app')
);
