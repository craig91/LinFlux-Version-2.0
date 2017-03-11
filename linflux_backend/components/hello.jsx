import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const Greeting = React.createClass({
  getInitialState() {
    return {
      users: []
    }
  },
  componentDidMount() {
   {
    $.ajax({
      url: '/api/users',
      type: 'GET'
    })
    .done((data) => {
      console.log(data)
      this.setState({ users: data })
    })
   }
 },
  render: function(){
    console.log('users', this.state.users)
    return (
      <div>
        <div>{this.state.users.length === 0 ? "Loading...." : this.state.users.map(function(val, idx){
          return (
            <ul key={idx}>
              <li>{val.firstName}</li>
              <li>{val.lastName}</li>
            </ul>
          )
        })}</div>

      </div>

    )
  }
})


export default Greeting
