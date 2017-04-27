import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';


class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  handleSubmit(event) {
    // event.preventDefault();
      $.ajax({
        url: 'api/users',
        type: 'POST',
        data: {
          userName: this.userName.value,
          userPhoto: this.userPhoto.value,
          password: this.password.value,
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          location: this.location.value,
          company: this.company.value
          // contact: this.contact.value,
          // website: this.website.value,
          // linkedIn: this.linkedIn.value,
          // facebook: this.facebook.value,
          // twitter: this.twitter.value,
          // github: this.github.value
       }
      }).done((data) => {
        this.setState({ user: data })
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    console.log(this.userName.value)
    console.log(this.userPhoto.value)
    console.log(this.password.value)
    console.log(this.firstName.value)
    console.log(this.lastName.value)
    console.log(this.location.value)
    console.log(this.company.value)
    // console.log(this.contact.value)
  }
  render() {
    return(
    <div className="form-master">
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>

          <span>Enter Your User Name</span>
          <input type="text" placeholder="7 to 14 characters" ref={(input) => {
            this.userName = input;
          }} required/>

          <span>Link your photo</span>
          <input type="text" placeholder="enter url here" ref={(input) => {
            this.userPhoto = input;
          }} required/>

          <span>Enter Your password</span>
          <input type="password" placeholder="7 to 14 characters" ref={(input) => {
            this.password = input;
          }} required/>

          <span>First Name</span>
          <input type="text" ref={(input) =>{
            this.firstName = input;
          }} required/>

          <span>Last Name</span>
          <input type="text" ref={(input) =>{
            this.lastName = input;
          }} required/>

          <span>Location</span>
          <input type="text" ref={(input) =>{
            this.location = input;
          }}/>

          <span>Where do you work?</span>
          <input type="text" ref={(input) => {
            this.company = input;
          }} />

          <input type="submit" />
        </form>
      </div>
    </div>
    )
  }
}



export default CreateUser;



          // <span>Company</span>
          // <input type="text" ref={(input) => {
          //   this.company = input;
          // }}/>

          // <span>Contact</span>
          // <input type="text" ref={(input) => {
          //   this.company = input;
          // }} required/>

          // <span>Website</span>
          // <input type="text" ref={(input) => {
          //   this.company = input;
          // }} />

          // <span>LinkedIn</span>
          // <input type="text" ref={(input) => {
          //   this.company = input;
          // }} />

          // <span>Facebook</span>
          // <input type="text" ref={(input) => {
          //   this.company = input;
          // }} />

          // <span>Twitter</span>
          // <input type="text" ref={(input) => {
          //   this.company = input;
          // }} />

          // <span>Github</span>
          // <input type="text" ref={(input) => {
          //   this.company = input;
          // }} />
