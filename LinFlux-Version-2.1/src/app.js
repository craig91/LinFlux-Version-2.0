import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import { Splash, Root, Nav } from './components';






ReactDOM.render((
  <Router history={hashHistory}>
   <Route path="/" component={Root}>
     <IndexRoute component={Splash} />
       <Route path="nav" component={Nav} />
   </Route>
  </Router>
),document.getElementById('root'));


