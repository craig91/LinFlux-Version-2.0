import React from 'react';
import {Link} from 'react-router';
import NavBar from './nav_bar.jsx';

const Home = React.createClass({
    render: function() {
        return (
            <div className="home-body">
                <div><NavBar/></div>
                  <img className="home_page_background" src="../public/images/Splash_back2.png"></img>
                <div className="home_page_slogan">
                   <p>You & Linux</p>
                   <p>A Love story</p>
                </div>
            </div>
        )
    }
})

export default Home;
