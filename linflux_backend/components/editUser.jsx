import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

const EditUser = React.createClass({
    getInitialState() {
        return {
            user: {
                firstName: "",
                lastName: ""
            }
        }
    },
    componentDidMount() {
        $.ajax({
            url: '/api/users/' + this.props.params.id,
            type: 'GET'
        }).done((data) => {
            this.setState({user: data})
        }).catch((error) => {
            console.log(error)
        })
    },
    handleChange(eType, event) {
        this.setState({
            user: {
                [eType]: event.target.value
            }
        })
    },
    handleSubmit(event) {
        event.preventDefault();
        {
            $.ajax({
                url: '/api/users/' + this.props.params.id,
                type: 'PUT',
                data: {
                    firstName: this.state.user.firstName,
                    lastName: this.state.user.lastName
                }
            }).done((data) => {
                console.log(data)
                this.setState({user: data})
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <span>First Name</span>
                    <input value={this.state.user.firstName} type="text" onChange={(e) => this.handleChange('firstName', e)} required/>

                    <span>Last Name</span>
                    <input value={this.state.user.lastName} type="text" onChange={(e) => this.handleChange('lastName', e)} required/>

                    <button type="submit">
                        Update User
                    </button>
                </form>
            </div>
        )
    }
})

export default EditUser;
