import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Nav from './components/nav.jsx';
import Splash from './components/splash.jsx';
import Root from './components/root.jsx';
import HomePage from './components/pages/homePage.jsx';
// import Signup from './components/pages/signUp.jsx';

const App = React.createClass({
  render: function() {
    return (
      <div>
         <Nav />
         {this.props.children}
      </div>

    )
  }
})


ReactDOM.render (
  <Router history={hashHistory}>
   <Route path="/" component={App}>
     <IndexRoute component={Root} />
       <Route path="root" component={Root} />
       <Route path="homePage" component={HomePage} />
       <Route path="splash" component={Splash} />
   </Route>
  </Router>,
  document.getElementById('root')
  );
