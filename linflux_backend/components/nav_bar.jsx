import React from 'react';
import Greeting from './hello.jsx';
import ArticleForm from './articleForm.jsx';
import Distros from './distros.jsx';
import CreateUser from './userForm.jsx';
import LoginForm from './login.jsx';
import OneUser from './profile.jsx';
import ProfilePage from './profile_page.jsx';
import Modal from 'react-modal';
import {Link} from 'react-router';

const modalStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroudColor: '#f0f1f1',
    height: '30%',
    width: '30%'
  }
};

const NavBar = React.createClass({
  getInitialState() {
    return {
      user: null,
      showModal: false
    }
  },
  componentWillUpdate(nextProps) {
    console.log(nextProps.location.query)
    if(nextProps.location.query['login']) {
      this.props.router.replace('./profile/' + nextProps.location.query['login'])
      this.setState({
        user: {id: nextProps.location.query['login']}
      })
    }
  },
    render: function() {
        return (
            <div>
                <nav className="navi">
                    <Link to="/profile_page/">My Profile</Link>
                    <Link to="/login">Login/Logout</Link>
                    <Link to="/hello" className="active">Hello</Link>
                    <Link to="/articleForm">Article Form</Link>
                    <Link to="/distros">Distros</Link>
                </nav>
            </div>
        )
    }
})

export default NavBar;
