import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Distros extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      distros: []
    };
  }
  componentDidMount() {
      $.ajax({
        url: '/api/distros',
        type: 'GET'
      })
      .done((data) => {
        console.log(data)
        this.setState({ distros: data })
      })
  }
  render() {
    console.log('distros', this.state.distros)
    return(
      <div>
        <div className="distros_container">{this.state.distros.length === 0 ? "Loading...." : this.state.distros.map(function(val, idx) {
          return (

          <div key={idx}>

              <img src={val.dImage}/>
              <p>{val.description}</p>

          </div>
          )
        })}</div>
      </div>
    )
  }
}

export default Distros;
