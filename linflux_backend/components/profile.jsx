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
    var apiCall = '/api/users/' + this.props.params.id
    console.log(apiCall)
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

      <div>{this.state.user === null ? 'Loading......' : this.state.user.Articles.map(function(val, idx) {
          return (
            <div key={idx}>
               <Link to={"/articles/" + val.id} key={idx}>{val.title}</Link>
               <p>{val.firstName}</p>
               {/* <ProfileInfo /> */}
            </div>
          )
      })}</div>
    )
  }
})


export default OneUser;
