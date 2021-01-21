import React from 'react';
import {auth} from '../config/firebase';

class Signin extends React.Component{
render(props){
	return(
		<div>
		<h1>Hello SignUp</h1>
		<button onClick={() => this.props.setAuth(true)}>Sign Up</button>
		</div>
		)
}
}

export default Signin;