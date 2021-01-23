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
<div>
<main className="pa4 black-80">
<form className="measure center">
<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
<legend className="f4 fw6 ph0 mh0">Sign In</legend>
<div className="mt3">
<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={(e) => setEmail(e.target.value)}
required/>
</div>
<div className="mv3">
<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={(e) => setPassword(e.target.value)}
required />
</div>
</fieldset>
<div class="lh-copy mt3">
<Link
class="f6 link dim black db"
onClick={() => handleSubmit()}
to='/chat'
>
Submit
</Link>
{error && <p style={{color:'red'}}>Invalid</p>}
<Link
to='/signup'
class="f6 link dim black db"
>
Need an account?
</Link>
</div>
</form>
</main>
</div>
)
}
export default Signin;