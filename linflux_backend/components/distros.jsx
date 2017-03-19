import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const Distros = React.createClass({
  getInitialState() {
    return {
      distros: []
    }
  },
  componentDidMount() {
    {
      $.ajax({
        url: '/api/distros',
        type: 'GET'
      })
      .done((data) => {
        console.log(data)
        this.setState({ distros: data })
      })
    }
  },
  render: function() {
    console.log('distros', this.state.distros)
    return(
      <div>
        <div>{this.state.distros.length === 0 ? "Loading...." : this.state.distros.map(function(val, idx) {
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
})

export default Distros;
