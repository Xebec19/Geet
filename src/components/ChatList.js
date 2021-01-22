import React from 'react';
import 'firebase/storage';
import {db} from '../config/firebase';
class ChatList extends React.Component{
constructor(){
super();
this.state                               = {
data:[],
loading:true
}
}  //constructor ends here

componentDidMount(){
db.child('messages').on('value',snapshot => {
if(snapshot.val()                        !=null){
let temp                                 = [];
let count                                = 0;
/*this.setState({data: ...snapshot.val()});*/
snapshot.forEach((item)                  => {
console.log('Check it out',item.val())
temp.push(item.val())
})
/*this.setState({data:temp})*/
console.log('Values',temp);
this.setState({data:temp});
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
{this.state.data.map((item,index)        => {
return <p key                            ={index}>{item.email} : {item.content}<hr/></p>
})}
</pre>
</div>
</div>
)
}  //else returns here
}  //render ends here
}

export default ChatList;