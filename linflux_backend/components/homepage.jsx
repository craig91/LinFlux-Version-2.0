import React from 'react';
import { Link } from 'react-router';


const Home = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li>Sign Up</li>
          <li>Log In</li>
          <Link to={'/distros'}> <li>Distros</li> </Link>
          <li>About</li>
        </ul>

     </div>
    )
  }
})


export default Home;
