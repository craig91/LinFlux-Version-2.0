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
      <div className="card_wrapper">
        {this.state.user === null ? 'Loading...' :
          <div className=" card-2 card-margin top-margin ">

          <div className="profile_photo_container">
            <div className="profile_photo_2" style={{backgroundImage: `url(${this.state.user.userPhoto})` }}></div>
          </div>
          

            <div className="white descript-container2">
              <h1>{this.state.user.userName}</h1>
              <p>{this.state.user.firstName}</p>
              <p>{this.state.user.lastName}</p>
              <p>{this.state.user.company}</p>
              <p>{this.state.user.location}</p>
            </div>



          </div>

      }
      </div>
    )
  }
})
// class ProfileInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null
//     };
//   }
//   componentDidMount() {
//       const apiCall = '/api/users/private'
//
//         $.ajax({
//           url: apiCall,
//           type: 'GET'
//         })
//         .done((data) => {
//           this.setState({ user: data})
//         })
//
//     }
//     render() {
//       return(
//         <div>
//           {this.state.user === null ? 'Loading...' :
//             <div>
//               <img className="profile_photo" src={this.state.user.userPhoto}/>
//               <p>{this.state.user.userName}</p>
//               <p>{this.state.user.firstName}</p>
//               <p>{this.state.user.lastName}</p>
//               <p>{this.state.user.company}</p>
//               <p>{this.state.user.location}</p>
//
//             </div>
//
//         }
//         </div>
//       )
//     }
// }

export default ProfileInfo;
