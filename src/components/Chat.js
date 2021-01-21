import React from 'react';
import ChatList from './ChatList';
import 'firebase/storage';
import {db} from '../config/firebase';
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
}  //constructor ends here
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
	if(this.props.auth){
return(
<div>
	<button onClick={() => {console.log('Sign me out!')}}>Sign out</button>
<ChatList />
<input type='text' name='message' value={this.state.message} onChange={(e) => this.handleChange(e)} />
<button onClick={() => this.handleSubmit()} >Submit</button>
</div>
)
}
else{
	return (
		<div>
		<h1>Access Denied</h1>
		{console.log(this.props.auth)}
		</div>
		)
}
}
}

export default Chat;