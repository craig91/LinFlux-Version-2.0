import React from 'react';
import {Link} from 'react-router';
import NavBar from './nav_bar.jsx';
import CreateUser from './userForm.jsx';


class Home extends React.Component {
    render () {
        return (

            <div className=" bgImage display-container gScale">
              <div><NavBar/></div>
              <div className="display-left text-white">
                <span className="jumbo hide-small">Is Linux really hard?</span>

                <span className="large">Start learning Linux here.</span>
                <p className="signUp-container"><Link to="/userForm" className="signUp-button white padding-large large top-margin opaque hover-opacity">Sign Up</Link></p>

              </div>


                  {/* <img className="bgImage" src="../public/images/dark.jpg"></img> */}

            </div>
        )
    }
}

export default Home;



{/* <div className="home_page_slogan">
   <p>You & Linux</p>
   <p>A Love story</p>
</div> */}
