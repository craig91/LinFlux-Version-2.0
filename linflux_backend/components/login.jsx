import React from 'react';
import LogoutButton from './logout.jsx';
import $ from 'jquery';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  handleSubmit(event) {
    event.preventDefault();

      $.ajax({
        url: 'api/users/login',
        type: 'POST',
        data: {
          userName: this.userName.value,
          password: this.password.value
       }
      }).done((data) => {
        this.setState({ user: data })
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    console.log(this.userName.value)
  }
  render() {
    return(
    <div className="form-master">
      <div className="form-container">
        <form onSubmit={this.handleSubmit} >

          <span>Enter Your User Name</span>
          <input type="text" placeholder="7 to 14 characters" ref={(input) => {
            this.userName = input;
          }} required/>

          <span>Password</span>
          <input type="password" ref={(input) =>{
            this.password = input;
          }} required/>


          <input type="submit" />

        </form>
        <LogoutButton />
      </div>
    </div>
    )
  }
}



export default LoginForm;
