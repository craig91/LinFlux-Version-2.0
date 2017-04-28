import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import ProfileInfo from './profile_info.jsx';
import NavBar from './nav_bar.jsx';



// const OneUser = React.createClass({
//   getInitialState() {
//     return {
//       user: null
//     }
//   },
//   componentDidMount() {
//     var apiCall = '/api/users/private'
//     // console.log(apiCall)
//    {
//     $.ajax({
//       url: apiCall,
//       type: 'GET'
//     })
//     .done((data) => {
//       console.log(data)
//       this.setState({ user: data })
//     })
//    }
//  },
//   render: function(){
//     console.log('users', this.state.user)
//     return (
//       <div>
//           <div>{this.state.user === null ? 'Loading......' : this.state.user.Articles.map(function(val, idx) {
//               return (
//                 <div key={idx}>
//                    <Link to={"/articles/" + val.id} key={idx}>{val.title}</Link>
//                </div>
//               )
//             })
//           }
//           </div>
//         <div>
//             <ProfileInfo />
//
//         </div>
//     </div>
//   )
// }})


class OneUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    var apiCall = '/api/users/private'
      {
       $.ajax({
         url: apiCall,
         type: 'GET'
       })
       .done((data) => {
         console.log(data)
         this.setState({ user: data })
       })
      }
    }
    render() {
          console.log('users', this.state.user)
          return (
            <div>
              {/* <NavBar /> */}
                <div>
                 {this.state.user === null ? 'Loading......' : this.state.user.Articles.map(function(val, idx) {

                    return (
                      <div key={idx} className="card-2 card-margin top-margin ">


                        <div className="profile_photo" style={{backgroundImage: `url(${val.hero})` }}></div>


                        <div className="white descript-container">
                          <h1>{val.title}</h1>
                          <h2> Date Posted </h2>
                          <p>{val.sDescript}Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.</p>
                          <div className="read_more">
                            <Link to={"/articles/" + val.id} key={idx}>Read More</Link>
                          </div>
                        </div>



                      </div>
                    )
                  })
                }
              </div>
           </div>
        )
    }
  }


export default OneUser;
