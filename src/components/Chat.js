import React from 'react';
import {Link} from 'react-router-dom';
import ChatList from './ChatList';
import {auth,db} from '../config/firebase';
class Chat extends React.Component{
constructor(props){
super(props);
this.state                     = {
message: '',
data:[],
email:'',
uid:'',
loading:true,
authenticated:false
}
this.handleChange              = this.handleChange.bind(this);
this.handleSubmit              = this.handleSubmit.bind(this);
this.handleSignout             = this.handleSignout.bind(this);
}  //constructor ends here

componentDidMount(){
auth.onAuthStateChanged((user) => {
if(user){
var uid                        = user.uid;
this.setState({uid:uid})
console.log('Logged in');
this.setState({email:user.email})
this.setState({authenticated:true});
}else{
console.log('Logged out');
}
})
}

handleSignout(){
auth.signOut().then(()         => {
console.log('Success');
this.setState({authenticated:false})
}).catch((error)               => {
console.log('error')
})
}

handleChange(e){
this.setState({[e.target.name]: e.target.value});
}  //handleChange ends here

handleSubmit(){
db.child('messages').push({
content: this.state.message,
email: this.state.email
},
err                            => {
if(err)console.log(err)
}
)
this.setState({message:''})
}  //handleSubmit ends here

render(){
if(this.state.authenticated){return(
<div>
<Link
to='/' 
onClick                ={() => this.handleSignout()}>
Sign out
</Link>
<ChatList />
<input 
type                           ='text' 
name                           ='message' 
value                          ={this.state.message} 
onChange                       ={(e) => this.handleChange(e)} 
/>
<button 
onClick                ={() => this.handleSubmit()} >
Submit
</button>
</div>
) //return ends here
}else{
return (
<div>
<h1>Unknown User</h1>
<br/>
<Link to                       ='/'>Sign in</Link>
</div>

)
}
}
}

export default Chat;