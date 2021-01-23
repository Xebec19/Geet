import React from 'react';
import Spinner from './Spinner';
import 'firebase/database';
import {db} from '../config/firebase';
import 'tachyons';

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
/*this.setState({data: ...snapshot.val()});*/
snapshot.forEach((item)                  => {
temp.push(item.val())
})
/*this.setState({data:temp})*/

this.setState({data:temp});
this.setState({loading:false});
}
})
}

render(){
if(this.state.loading){
return <Spinner />
}else{
return(
<div>
<div style={{overFlow:'auto',wordBreak:'breakAll'}}>
<pre style={{margin:'0',padding:'0'}}>

{this.state.data.map((item,index)        => {
return <span className='' key={index}>{item.email} :<br/> {item.content}<br/></span>
})}
</pre>
</div>
</div>
)
}  //else returns here
}  //render ends here
}

export default ChatList;