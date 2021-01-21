import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {auth} from '../config/firebase';

function Signup(){
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
let history = useHistory();

function handleSubmit(email,password){
try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
	return
	auth().createUserWithEmailAndPassword(email,password)
}
return(
<div>
<form onSubmit={() => handleSubmit(email,password)}>
<fieldset>
<legend>Sign up</legend>
<table>
<tr>
<td>Email</td>
<td><input type='text' onChange={(e) => setEmail(e.targetValue)}/></td>
</tr>
<tr>
<td>Password</td>
<td><input type='password' onChange={(e) => setPassword(e.targetValue)}/></td>
</tr>
</table>
<br/>
<input type='submit' value='Sign in' />
<br/>
<input type='reset' value='Reset' />
</fieldset>
</form>
</div>
)  //return ends here
}  //function ends here

export default Signup;