import React from 'react';



const Splash = React.createClass({
  render: function() {
    return(
      <div> Splash </div>
    )
  }
})

export default Splash;

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
