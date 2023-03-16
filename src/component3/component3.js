import React, { useState } from 'react';
import component3 from "./component3.css"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {//This line defines a function called handleSubmit that is called when the login form is submitted. 
    e.preventDefault();//It prevents the default behavior of the form, which is to reload the page, 
    // and does nothing else. The comment suggests that the code for handling the form submission would go here.
  };
  return (
    <div className="main-container">
      <h2>Welcome</h2>
      <h4>Log In your account!</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input className='iinput' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br/>
        <label>
          Password:
          <input className='iinput' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br/>
        <button type="submit">Login</button>
      </form>
      <div className="social-buttons">
        <a href="https://www.facebook.com/"><button className="facebook-button">Continue with Facebook</button></a>
        <a href="https://www.google.com/"><button className="google-button">Continue with Google</button></a>
    
      </div>
      <a href="https://www.facebook.com/"><p >Don't have account - sign up</p></a>
    </div>
  );
};




export default Login;