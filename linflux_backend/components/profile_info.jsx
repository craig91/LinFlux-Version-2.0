import React from 'react';
import $ from 'jquery';


const ProfileInfo = React.createClass({
  getInitialState() {
    return {user: null}
  },
  componentDidMount() {
      $.ajax({
        url: '/api/users/' + this.props.params.id,
        type: 'GET',
        data: {
          userName: this.userName.value,
          firstName: this.firstName.value
        }
      })
      .done((data) => {
        console.log(data)
        this.setState({user: data})
      })

  } ,
  render: function() {
    return(
        <div>
          <div>{this.state.user.length === 0 ? "loading..." : this.state.user.map(function(val, idx) {
            return (
              <div key={idx}>
                <p>{val.userName}</p>
              </div>
            )
          }) }</div>
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
