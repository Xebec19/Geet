import React from 'react';
import {Redirect} from 'react-router-dom';
import ChatList from './ChatList';
import {auth,db} from '../config/firebase';
class Chat extends React.Component{
constructor(props){
super(props);
this.state = {
message: '',
data:[],
loading:true
}
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handleSignout = this.handleSignout.bind(this);
}  //constructor ends here

componentDidMount(){
	auth.onAuthStateChanged((user) => {
		if(user){
			var uid = user.uid;
			console.log('Logged in');
		}else{
			console.log('Logged out');
			<Redirect to="/" />
		}
	})
}

handleSignout(){
	auth.signOut().then(() => {
		console.log('Success');
	}).catch((error) => {
		console.log('error')
	})
}

handleChange(e){
this.setState({[e.target.name]: e.target.value});
}  //handleChange ends here

handleSubmit(){
db.child('messages').push(
this.state.message,
err => {
if(err)console.log(err)
}
)
this.setState({message:''})
}  //handleSubmit ends here

render(){
return(
<div>
	<button onClick={() => this.handleSignout()}>Sign out</button>
<ChatList />
<input 
type='text' 
name='message' 
value={this.state.message} 
onChange={(e) => this.handleChange(e)} 
/>
<button onClick={() => this.handleSubmit()} >Submit</button>
</div>
) //return ends here
}
}

export default Chat;