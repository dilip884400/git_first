import React from 'react'
import reg from './Register.module.css'


const Register=()=>{
	return(
		<div className={reg.regdiv}>
			<form action=""> 
				<div > 
					<label htmlFor="firstName">firstName</label>
                    <br/>
					<input type="text" name="firstName" id="firstName"/> 
				</div> 
				<div> 
					<label htmlFor="lastName">lastName</label>
                    <br/>
					<input type="text" name="lastName" id="lastName"/> 
				</div>  
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
				<button type="submit">Register</button>
			</form>
		</div>
	)
}

export default Register    