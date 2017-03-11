import React from 'react';


const Signup = React.createClass({
  render: function() {
    return (
      <div>
        <form onSubmit={}>
          <span>First Name</span>
            <input type="text"> </input>
          <span>Last Name</span>
            <input type="text"> </input>

          <span>User Name</span>
            <input type="text"> </input>

          <span>Email</span>
            <input type="text"> </input>

          <span>Password</span>
            <input type="text"> </input>

        </form>
      </div>
    )
  }
})

export default Singup;
