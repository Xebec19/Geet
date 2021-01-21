import React,{Component} from 'react';
import Chat from './components/Chat';
import Signin from './components/Signin';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
/*import { auth,db } from './config/firebase';*/

class App extends Component{
constructor(){
	super();
	this.state = {
		authenticated:false
	}
	this.setAuth = this.setAuth.bind(this);
}
setAuth(props){
	this.setState({authenticated:props})
	console.log('change in state',this.state.authenticated);
}
render(){
return(
<div>
    <Router>
<Switch>
          <Route exact path="/">
            <Signin auth={this.state.authenticated} setAuth={this.setAuth}/>
          </Route>
          <Route path="/chat">
            <Chat auth={this.state.authenticated} />
          </Route>
        </Switch>
    </Router>
</div>
)  //return ends here
}
}  //App ends here

export default App;