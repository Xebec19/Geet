import React from 'react';
import 'firebase/storage';
import {db} from '../config/firebase';
class ChatList extends React.Component{
constructor(){
super();
this.state = {
data:{},
loading:true
}
}  //constructor ends here

componentDidMount(){
db.child('messages').on('value',snapshot => {
if(snapshot.val()!=null){
let temp = []
/*this.setState({data: ...snapshot.val()});*/
snapshot.forEach((item) => {
	console.log('Check it out',item.val())
temp.push(item.node_.value_);
})
this.setState({data:temp})
this.setState({loading:false});
}
})
}

render(){
if(this.state.loading){
	return (<h1>Loading...</h1>)
	}else{
return(
<div>
<div>
<pre>
	{console.log(this.state.data)}
{this.state.data.map((item,index) => {
return <p key={index}>{item}</p>
})}
</pre>
</div>
</div>
)
}  //else returns here
}  //render ends here
}

export default ChatList;