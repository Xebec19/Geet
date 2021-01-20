import React from 'react';

class Signin extends React.Component{
	
	constructor(){
		super();
		this.state={
		authenticated: false,
		loading: true
		}  //state ends here
		this.signInWithGoogle = this.signInWithGoogle.bind(this);
		}  //constructor ends here

		componentDidMount(){
		auth().onAuthStateChanged((user) => {
		if(user){
		this.setState({
		authenticated:true,
		loading:false
		});
		}else{
		this.setState({
		authenticated:false,
		loading:false
		});
		}
		})
		}  //componentDidMount ends here

		signInWithGoogle() {
			const provider = new auth.GoogleAuthProvider();
			return auth().signInWithPopup(provider);
		  }
	render(){
		return(
			<div>
				<button onClick={() => this.signInWithGoogle()}>Sign In</button>
			</div>
			)
	}
}

export default Signin;