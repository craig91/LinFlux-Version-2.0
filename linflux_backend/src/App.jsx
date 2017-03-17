import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory, hashHistory } from 'react-router';


import Greeting from '../components/hello.jsx';
import CreateUser from '../components/userForm.jsx';
import EditUser from '../components/editUser.jsx';
import Article from '../components/articles.jsx';
import OneUser from '../components/profile.jsx';

import '../css/blog.css';
// import '../css/reset.css';


var App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Greeting} />
      <Route path='/userForm' component={CreateUser} />
      <Route path='/editUser/:id' component={EditUser} />
      <Route path='/articles' component={Article} />
      <Route path='/profile/:id' component={OneUser} />
    </Route>
  </Router>,
  document.getElementById('root')
);
