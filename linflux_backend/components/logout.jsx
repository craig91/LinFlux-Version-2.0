import React from 'react';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  handleLogout(event) {
    // event.preventDefault();
      $.ajax({
        url: 'api/users/logout',
        type: 'GET',
      })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogout}>LogOut</button>
      </div>
    )
  }
}

export default LogoutButton;
