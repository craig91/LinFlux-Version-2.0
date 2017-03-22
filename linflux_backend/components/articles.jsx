import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const Article = React.createClass({
    getInitialState() {
        return {articles: null}
    },
    componentDidMount() {
            $.ajax({
              url: '/api/articles/' + this.props.params.id,
              type: 'GET'
            })
            .done((data) => {
                console.log(data)
                this.setState({articles: data})
            })

    },
    render: function() {
           if(this.state.articles) {
             let article = this.state.articles;
             console.log(article)
             return(
               <div className="hero-container" style={{backgroundImage: `url(${article.hero})` }}></div>
             )
           } else {
             return (
               <div>Loading....</div>
             )
           }

        // return (
        //     <div>
        //         <div>{this.state.articles === null
        //                 ? "Loading...."
        //                 : this.state.articles.map(function(val, idx) {
        //                     return (
        //                         <div key={idx}>
        //
        //
        //
        //                             <div className="hero-container" style={{backgroundImage: `url(${val.hero})` }}>
        //
        //                             </div>
        //                             <div className="blog-text">
        //                                 Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.
        //
        //
        //                             </div>
        //
        //
        //
        //
        //
        //                         </div>
        //                     )
        //                 })}
        //         </div>
        //     </div>
        // )
    }
})

export default Article;
