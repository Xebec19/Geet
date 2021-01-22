import React,{Component} from 'react';
import Chat from './components/Chat';
import Signup from './components/Signup';
import Signin from './components/Signin';
import {auth} from './config/firebase';
import 'firebase/auth';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
/*import { auth,db } from './config/firebase';*/

class App extends Component{
constructor(){
	super();
	this.state = {
	user:{}
	}
	this.handleRoute = this.handleRoute.bind(this);
}

handleRoute(){
	/*const {email,password} = props;*/
	console.log(`Successfully entered signup func `)
}

render(){
return(
<div>
    <Router>
<Switch>
          <Route path="/signup">
            <Signup handleRoute={this.handleRoute}/>
          </Route>
          
          <Route exact path="/">
            <Signin handleRoute={this.handleRoute}/>
          </Route>

          <Route path="/chat">
            <Chat handleRoute={this.handleRoute}/>
          </Route>
        </Switch>
    </Router>
</div>
)  //return ends here
}
}  //App ends here

export default App;