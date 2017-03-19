import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';


const CreateUser = React.createClass({
  getInitialState() {
    return { user: null }
  },
  handleSubmit(event) {
    // event.preventDefault();
    {
      $.ajax({
        url: 'api/users',
        type: 'POST',
        data: {
          firstName: this.firstName.value,
          lastName: this.lastName.value
        }
      }).done((data) => {
        console.log(data)
        this.setState({ user: data })
      }).catch((error) => {
        console.log(error)
      })
    }
    console.log(this.firstName.value)
    console.log(this.lastName.value)
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <span>First Name</span>
          <input type="text" ref={(input) =>{
            this.firstName = input;
          }} required/>

          <span>Last Name</span>
          <input type="text" ref={(input) =>{
            this.lastName = input;
          }} required/>

          <input type="submit" />
        </form>
      </div>
    )
  }
})



export default CreateUser;
