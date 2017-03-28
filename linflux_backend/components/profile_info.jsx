import React from 'react';
import $ from 'jquery';


const ProfileInfo = React.createClass({
  getInitialState() {
    return {user: null}
  },
  componentDidMount() {
      $.ajax({
        url: '/api/users/' + this.props.params.id,
        type: 'GET'
      })
      .done((data) => {
        console.log(data)
        this.setState({user: data})
      })

  } ,
  render: function() {
    return(
        <div>HI</div>
    )

    // if(this.state.user) {
    //   let profileInfo = this.state.user;
    //   console.log(profileInfo)
    //   return (
    //     <div>
    //       <p>{profileInfo.firstName}</p>
    //       <p>{profileInfo.lastName}</p>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>Loading...</div>
    //   )
    // }

  }
})


export default ProfileInfo;
