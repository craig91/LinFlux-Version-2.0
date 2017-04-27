import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory, hashHistory } from 'react-router';


import Greeting from '../components/hello.jsx';
import CreateUser from '../components/userForm.jsx';
import EditUser from '../components/editUser.jsx';
import Article from '../components/articles.jsx';
import OneUser from '../components/profile.jsx';
import Home from '../components/homepage.jsx';
import Distros from '../components/distros.jsx';
import ArticleForm from '../components/articleForm.jsx';
import ProfileInfo from '../components/profile_info.jsx';
import NavBar from '../components/nav_bar.jsx';
import LoginForm from '../components/login.jsx';

import '../css/blog.css';
import '../css/distros_page.css';
import '../css/nav_bar.css';
import '../css/home_page.css';
import '../css/form_styles.css';
import '../css/profile_info.css';


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
      <IndexRoute component={Home} />
      <Route path='/hello' component={Greeting} />
      <Route path='/login' component={LoginForm} />
      <Route path='/distros' component={Distros} />
      <Route path='/articleform' component={ArticleForm} />
      <Route path='/userForm' component={CreateUser} />
      <Route path='/editUser/:id' component={EditUser} />
      <Route path='/articles/:id' component={Article} />
      <Route path='/profile/' component={OneUser} />
      <Route path='/profile-info/:id' component={ProfileInfo} />
    </Route>
  </Router>,
  document.getElementById('root')
);
