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
          lastName: this.lastName.value,
          company: this.company.value,
          contact: this.contact.value,
          website: this.website.value,
          linkedIn: this.linkedIn.value,
          facebook: this.facebook.value,
          twitter: this.twitter.value,
          github: this.github.value
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

          <span>Company</span>
          <input type="text" ref={(input) => {
            this.company = input;
          }} required/>

          <span>Contact</span>
          <input type="text" ref={(input) => {
            this.company = input;
          }} required/>

          <span>Website</span>
          <input type="text" ref={(input) => {
            this.company = input;
          }} required/>

          <span>LinkedIn</span>
          <input type="text" ref={(input) => {
            this.company = input;
          }} required/>

          <span>Facebook</span>
          <input type="text" ref={(input) => {
            this.company = input;
          }} required/>
          
          <span>Twitter</span>
          <input type="text" ref={(input) => {
            this.company = input;
          }} required/>
         
          <span>Github</span>
          <input type="text" ref={(input) => {
            this.company = input;
          }} required/>


          <input type="submit" />
        </form>
      </div>
    )
  }
})



export default CreateUser;
