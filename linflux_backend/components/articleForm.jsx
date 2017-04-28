import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

const ArticleForm = React.createClass ({
  getInitialState() {
    return {
      article: null
    }
  },
  handleSubmit(event) {
    {
      $.ajax({
        url: 'api/articles',
        type: 'POST',
        data: {
          hero: this.hero.value,
          title: this.title.value,
          sDescript: this.sDescript.value,

        }
      }).done((data) => {
        console.log(data)
        this.setState({ article: data})
      }).catch((error) => {
        console.log(error)
      })
    }
    console.log(this.hero.value)
    console.log(this.title.value)
    console.log(this.sDescript.value)
  },
  render: function() {
    console.log(this.state.article)
    return (
    <div className="form-master">
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <span> Article Image </span>
          <input type="text" ref={ (input) => {
            this.hero = input;
          }} required/>


          <span> Title of your article </span>
          <input type="text" ref={ (input) => {
            this.title = input;
          }} required/>


          <span> A short description of your article </span>
          <input type="text" ref={ (input) => {
            this.sDescript = input;
          }} required/>

          <input type="submit" />
        </form>
      </div>
    </div>
    )
  }
})

export default ArticleForm;
