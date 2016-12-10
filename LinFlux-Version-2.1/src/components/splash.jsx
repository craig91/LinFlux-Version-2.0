import React from 'react';
import ReactBootstrap from 'react-bootstrap';


export default React.createClass({
  render: function (){
    return (
       <div>
          <div id="my-side-nav" className="sidenav">
              <center><a href="javascript:void(0)" className="closebtn" onClick={this.onClose}>Close</a></center>
              <img src="/images/ubuntu-logo.png" alt="Ubuntu" height="120px" width="120px"/>
              <br />
              <img src="/images/Studio-logo.png" alt="Ubuntu-Studio" height="120px" width="120px"/>
              <br />
              <img src="/images/openSUSE.png" alt="openSuse" height="120px" width="120px"/>
              <br />
              <img src="/images/centOS.png" alt="centOS" height="120px" width="120px" />
          </div>

          <button onClick={this.onOpen}>Choose your distro</button>
    

          <div id="main">
             <center><h1> It worked </h1></center>
          </div>
         
       </div>
    )
  },
  onOpen: function(){
           document.getElementById("my-side-nav").style.width = "100%";
          //  document.getElementById("main").style.marginLeft = "250px";
          //  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  },
  onClose: function(){
           document.getElementById("my-side-nav").style.width = "0";
          //  document.getElementById("main").style.marginLeft = "0";
          //  document.body.style.backgroundColor = "white";
  }


})


// export default React.createClass({
//   getInitialState: function(){
//     return {
//       text: 'Hello world'
//     }
//   },
//   render: function () {
//     return (
//       <div>
//          <h1>{this.state.text}</h1>
//          <form>
//              <input type="text" onChange={this.changeText} value={this.state.text} />
//               <button>change the text</button>
//          </form>
        
//       </div>
//     )
//   },
//   changeText: function(e){
//     this.setState({text: e.target.value});
//   }
// })