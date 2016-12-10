import React from 'react';

var Root = React.createClass({
	render : function(){
		return(
			<div>
			   
	          
			
			<div id="container">

			  {this.props.children}
			</div>
		    </div>
        )
	}
})

export default Root;