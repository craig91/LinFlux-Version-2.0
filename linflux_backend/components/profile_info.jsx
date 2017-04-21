import React from 'react';
import $ from 'jquery';


const ProfileInfo = React.createClass({
  getInitialState() {
    return {
      user: null
    }
  },
  componentDidMount() {
    const apiCall = '/api/users/private'
    {
      $.ajax({
        url: apiCall,
        type: 'GET'
      })
      .done((data) => {
        this.setState({ user: data})
      })
    }
  },
  render: function() {
    console.log('users', this.state.user)
    return(
      <div>
        {this.state.user === null ? 'Loading...' :
          <div>
            <p>{this.state.user.userName}</p>
            <p>{this.state.user.firstName}</p>
            <p>{this.state.user.lastName}</p>
            <p>{this.state.user.company}</p>
            <p>{this.state.user.location}</p>

          </div>

      }
      </div>
    )
  }
})

export default ProfileInfo;




//
// if(this.state.user) {
//   let profileInfo = this.state.user;
//   console.log(profileInfo)
//   return (
//     <div>
//       <p>{profileInfo.userName}</p>
//       <p>{profileInfo.firstName}</p>
//     </div>
//   )
// } else {
//   return (
//     <div>Loading...</div>
