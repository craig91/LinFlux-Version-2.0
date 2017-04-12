import React from 'react';
import {Link} from 'react-router';
import NavBar from './nav_bar.jsx';

const Home = React.createClass({
    render: function() {
        return (
            <div className="home-body">
                <div><NavBar/></div>

                <div className="image_container">

                    <img className="home_page_background" src="../public/images/Splash_back2.png"></img>

                </div>
                {/* <div className="home_page_slogan">
                   Linux Lives Here!
                   All the linux info in one place!
                </div> */}
            </div>
        )
    }
})

export default Home;
