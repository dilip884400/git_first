import React from 'react'
import log from './Login.module.css'


const Login=()=>{
	return(
		<div className={log.logdiv}>
			<form action=""> 
				<div> 
					<label htmlFor="email">Email</label>
                    <br/>
					<input type="text" name="email" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
                    <br/>
					<input type="text" name="passw" id="passw"/> 
				</div>  
                <br/>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login    