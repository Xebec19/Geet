import React,{Component} from 'react';
import { auth,db } from './config/firebase';

class App extends Component{
constructor(){
super();
this.state={
authenticated: false,
loading: true
}  //state ends here
}  //constructor ends here
componentDidMount(){
auth().onAuthStateChanged((user) => {
if(user){
this.setState({
authenticated:true,
loading:false
});
}else{
this.setState({
authenticated:false,
loading:false
});
}
})
}

render(){
if(this.state.loading)return <h1>Loading</h1>;
else{
return(
<div>
{(this.state.autheticated)?<Signin />:<Chat />}
</div>
)  //return ends here
}  //return ends here
}
}  //App ends here

export default App;