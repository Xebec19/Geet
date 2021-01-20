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

render(){
return(
<div>
    <Router>
<Switch>
          <Route exact path="/">
            <Signin />
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