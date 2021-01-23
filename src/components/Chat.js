import React from 'react';
import {Link} from 'react-router-dom';
import ChatList from './ChatList';
import {auth,db} from '../config/firebase';
import 'tachyons';

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
<article class="vh-100 dt w-100">
  <div class="dtc v-mid tc ph3 ph4-l">
<Link
class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black"
to='/' 
onClick                ={() => this.handleSignout()}>
Sign out
</Link>
<ChatList />

<div class="pa4-l">
  <form class="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
    <fieldset class="cf bn ma0 pa0">
      <legend class="pa0 f5 f4-ns mb3 black-80">Write your message</legend>
      <div class="cf">
      <input 
type                           ='text' 
name                           ='message' 
value                          ={this.state.message} 
onChange                       ={(e) => this.handleChange(e)} 
/>
<button 
class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black"
onClick                ={() => this.handleSubmit()} >
Submit
</button>  
      </div>
    </fieldset>
  </form>
</div>

</div>
</article>
</div>
) //return ends here
}else{
return (
<div>
<h1>Unknown User</h1>
<br/>
<Link to                       ='/'>
Sign in
</Link>

</div>

)
}
}
}

export default Chat;