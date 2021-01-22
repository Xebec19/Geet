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
	this.signup = this.signup.bind(this);
}

signup = (props) => {
	const {email,password} = props;
	console.log(`Successfully entered signup func value of email ${email} and password ${password}`)
}

render(){
return(
<div>
    <Router>
<Switch>
          <Route path="/signup">
            <Signup signup={this.signup}/>
          </Route>
          
          <Route exact path="/">
            <Signin/>
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
    </Router>
</div>
)  //return ends here
}
}  //App ends here

export default App;