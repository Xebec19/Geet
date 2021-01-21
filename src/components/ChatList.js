import React from 'react';
import firebaseDb from '../config/firebase'
class ChatList extends React.Component{
constructor(){
super();
this.state = {
data:[],
loading:true
}
}  //constructor ends here

componentDidMount(){
firebaseDb.child('messages').on('value',snapshot => {
if(snapshot.val()!=null){
let temp = []
/*this.setState({data: ...snapshot.val()});*/
snapshot.forEach((item) => {
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