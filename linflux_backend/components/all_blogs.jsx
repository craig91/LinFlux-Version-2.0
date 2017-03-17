import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const Allblogs = React.createClass({
    getInitialState() {
        return {blogs: []}
    },
    componentDidMount() {
        {
            $.ajax({
              url: '/api/blogs',
              type: 'GET'
            })
            .done((data) => {
                console.log(data)
                this.setState({blogs: data})
            })
        }
    },
    render: function() {
        return (
            <div>
                <div>{this.state.blogs.length === 0
                        ? "Loading"
                        : this.state.blogs.map(function(val, idx) {
                            return (
                                <div key={idx}>
                                    <div id="overlay">
                                        <div id="hero-container">
                                            <img src={val.hero}/>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h1>{val.title}</h1>
                                        <h2>{val.sDescript}</h2>

                                    </div>

                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
})

export default Allblogs;
