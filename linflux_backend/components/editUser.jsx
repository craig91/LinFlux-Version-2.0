import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    }
  }
  componentDidMount() {
        $.ajax({
            url: '/api/users/' + this.props.params.id,
            type: 'GET'
        }).done((data) => {
            this.setState({user: data})
        }).catch((error) => {
            console.log(error)
        })
    }
    handleChange(eType, event) {
      console.log(eType)
        this.setState({

                [eType]: event.target.value

        })
    }
    handleSubmit(event) {
      console.log("first name: ", this.state.firstName)
      console.log("last name: ", this.state.lastName)
        event.preventDefault();
            $.ajax({
                url: '/api/users/' + this.props.params.id,
                type: 'PUT',
                data: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
                }
            }).done((data) => {
                console.log(data)
                this.setState({user: data})
            }).catch((error) => {
                console.log(error)
            })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <span>First Name</span>
                    <input value={this.state.firstName} type="text" onChange={(e) => this.handleChange('firstName', e)} required/>

                    <span>Last Name</span>
                    <input value={this.state.lastName} type="text" onChange={(e) => this.handleChange('lastName', e)} required/>

                    <button type="submit">
                        Update User
                    </button>
                </form>
            </div>
        )
    }
}

export default EditUser;
