import React from 'react';
import '../../../public/css/homePage.css';


const HomePage = React.createClass({
  render: function() {
    return(
      <div className="bg-color">
         <img src={"http://8-themes.com/wp-content/uploads/2015/12/Space_View_of_Saturn_with_its_moon_094903_-2208x1242.jpg"} alt="bg" className="bg" />
         <div className="h-class-slogan">
           <div className="signUp"><p id="signUp-text">Sign Up</p></div>
         </div>
      </div>

    )
  }
})

export default HomePage;
