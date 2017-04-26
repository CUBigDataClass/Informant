import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import Sass from './scss/main.scss';
import Home from './pages/Home.jsx';
import Amazon from './pages/Amazon.jsx';
import Twitter from './pages/Twitter.jsx';
import globalStyles from './assets/styles/_Fonts.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="twitter" component={Twitter}/>
      <Route path="amazon" component={Amazon}/>
    </Route>
  </Router>,
document.getElementById('app'));
