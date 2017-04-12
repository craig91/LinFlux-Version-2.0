import React from 'react';
import Greeting from './hello.jsx';
import ArticleForm from './articleForm.jsx';
import Distros from './distros.jsx';
import CreateUser from './userForm.jsx';
import {Link} from 'react-router';

const NavBar = React.createClass({
    render: function() {
        return (
            <div>
                <nav>
                    <Link to="/hello" className="active">Hello</Link>
                    <Link to="/articleForm">Article Form</Link>
                    <Link to="/distros">Distros</Link>
                    <Link to="/userForm">User Form</Link>
                </nav>
            </div>
        )
    }
})

export default NavBar;
