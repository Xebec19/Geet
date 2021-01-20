import React from 'react';
import firebaseDb from '../config/firebase'
class Chat extends React.Component{
	constructor(){
		super();
		this.state = {
			message: '',
			data:[]
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}  //constructor ends here
	handleChange(e){
		this.setState({[e.target.name]: e.target.value});
	}  //handleChange ends here

	componentDidMount(){
		firebaseDb.child('messages').on('value',snapshot => {
			if(snapshot.val()!=null){
				let temp = []
			/*this.setState({data: ...snapshot.val()});*/
				snapshot.forEach((item) => {
					temp.push(item);
				})
				console.log('temp:',temp)
				this.setState({data:temp})
			}
		})
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
				<div>
					{console.log('Value of data',this.state.data[0])}
				</div>
				<input type='text' name='message' onChange={(e) => this.handleChange(e)} />
				<button onClick={() => this.handleSubmit()}>Submit</button>
			</div>
			)
	}
}

export default Chat;