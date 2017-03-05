import React from 'react';
import '../../public/css/navBar.css';



const Nav = React.createClass({
  render: function() {
    return (
      <div id="nav-wrapper">
        <ul id="nav-ul">
          <li><a className="active" href="">Sign out</a></li>
          <li><a href="">Sign in</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Distros</a></li>
        </ul>
      </div>

    )
  }
})

export default Nav;
