import React,{useState} from 'react';
import {
    Link
  } from "react-router-dom";
import {auth} from '../config/firebase';

const Signin = (props) => {

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [error,setError] = useState(null);

function valdEmail(){
	if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }
    return (false)
}

function handleSubmit(props){
	if(email==='' || password==='' || !valdEmail()){ 
		setError('Invalid credentials');
		return 0;
		} 
	else{
		auth.signInWithEmailAndPassword(email,password).then((userCredential) => {
			var user = userCredential.user;
            console.log(user);
            console.log(userCredential.user.email);
			setError(null);
		})
		.catch((error) => {
			setError(error.message);
			console.log(error.message);
		})
		

}  //else ends here
}

return(

<table>
<tbody>
{/*Row to enter email*/}
<tr>
<td>
	<p>
	Email
	</p>
</td>
<td>
	<input 
	type='text' 
	onChange={(e) => setEmail(e.target.value)}
	required
	/>
</td>
</tr>
{/*Row to enter email ends here*/}

{/*Row to enter password*/}
<tr>
<td>
	<p>
	Password
	</p>
</td>
<td>
	<input
	type='password'
	onChange={(e) => setPassword(e.target.value)}
	required
	/>
</td>
</tr>
{/*Row to enter passwprd ends here*/}
<tr>
	<td>
		{error && <p style={{color:'red'}}>Invalid</p>}
	</td>
</tr>
{/*Submit button*/}
<tr>
<td>
	<Link
	onClick={() => handleSubmit()}
	to='/chat'
	>
	Submit
	</Link>
</td>
</tr>
<tr>
<td>
	<Link
	to='/signup'
	>
	Need an account?
	</Link>
</td>
</tr>
{/*Submit button ends here*/}
</tbody>
</table>

)
}
export default Signin;