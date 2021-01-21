import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

class Signin extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
		authenticated: false,
		loading: true
		}  //state ends here
		this.signInWithGoogle = this.signInWithGoogle.bind(this);
		}  //constructor ends here

		componentDidMount(){
		firebase.auth().onAuthStateChanged((user) => {
		if(user){
		this.setState({
		authenticated:true,
		loading:false
		});
		this.props.setAuth(true)
		}else{
		this.setState({
		authenticated:false,
		loading:false
		});
		}
		})
		}  //componentDidMount ends here

		signInWithGoogle() {
			const provider = new firebase.auth().GoogleAuthProvider();
			return firebase.auth().signInWithPopup(provider);
		  }
	render(){
		return(
			<div>
			<button onClick={() => this.signInWithGoogle}>Sign in</button>
			</div>
			)
	}
}

export default Signin;