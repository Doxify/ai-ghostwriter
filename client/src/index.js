import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import App from './App';
import './style.scss'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Router>
      <Navigation />
      <App />
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
