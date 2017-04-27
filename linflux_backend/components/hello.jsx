import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import Article from './articles.jsx';



class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    $.ajax({
      url: '/api/users',
      type: 'GET'
    })
    .done((data) => {
      console.log(data)
      this.setState({ users: data })
    })
 }
  render() {
    console.log('users', this.state.users)
    return (
      <div>
        <div>{this.state.users.length === 0 ? "Loading...." : this.state.users.map(function(val, idx){
          return (
            <ul key={idx}>
              <Link to={"/profile/" + val.id} key={idx}>  {val.firstName} {val.lastName} </Link>
            </ul>
          )
        })}</div>

      </div>

    )
  }
}


export default Greeting
