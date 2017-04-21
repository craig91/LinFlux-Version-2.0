import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import ProfileInfo from './profile_info.jsx';



const OneUser = React.createClass({
  getInitialState() {
    return {
      user: null
    }
  },
  componentDidMount() {
    var apiCall = '/api/users/private'
    // console.log(apiCall)
   {
    $.ajax({
      url: apiCall,
      type: 'GET'
    })
    .done((data) => {
      console.log(data)
      this.setState({ user: data })
    })
   }
 },
  render: function(){
    console.log('users', this.state.user)
    return (
      <div>
          <div>{this.state.user === null ? 'Loading......' : this.state.user.Articles.map(function(val, idx) {
              return (
                <div key={idx}>
                   <Link to={"/articles/" + val.id} key={idx}>{val.title}</Link>
               </div>
              )
            })
          }
          </div>
          <div>
            <ProfileInfo />
            {/* {this.state.user === null ? 'Loading......' :
              <div>

                    <p>{this.state.user.userName}</p>
                    <p>{this.state.user.firstName}</p>
                    <p>{this.state.user.lastName}</p>
                    <p>{this.state.user.company}</p>
                    <p>{this.state.user.location}</p>


              </div>

          } */}
        </div>
    </div>
  )
}})


export default OneUser;
