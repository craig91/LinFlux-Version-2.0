import React from 'react';

const LogoutButton = React.createClass({
  getInitialState() {
    return  { user: null }
  },
  handleLogout(event) {
    // event.preventDefault();
    {
      $.ajax({
        url: 'api/users/logout',
        type: 'GET',
      })
    }
  },
  render: function() {
    return (
      <div>
        <button onClick={this.handleLogout}>LogOut</button>
      </div>
    )
  }
})

export default LogoutButton;
