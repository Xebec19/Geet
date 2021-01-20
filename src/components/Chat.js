import React from 'react';
import firebaseDb from '../config/firebase'
class Chat extends React.Component{
	constructor(){
		super();
		this.state = {
			message: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}  //constructor ends here
	handleChange(e){
		this.setState({[e.target.name]: e.target.value});
	}
	handleSubmit(e){
		firebaseDb.child('messages').push(
			this.state.message,
			err => {
				if(err)console.log(err)
			}
		)
	}  //handleSubmit ends here
	render(){
		return(
			<div>
				<input type='text' name='message' onChange={(e) => this.handleChange(e)} />
				<button onClick={() => this.handleSubmit()}>Submit</button>
			</div>
			)
	}
}

export default Chat;