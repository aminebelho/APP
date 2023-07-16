import React,  { useEffect, useState } from 'react';
// import logo from './logo_sonatrach.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Successful login
        setLoginError('');
        // Redirect to a different page or perform other actions
      } else {
        // Invalid credentials
        const errorData = await response.json();
        setLoginError(errorData.message || 'Invalid username or password');
      }
    } catch (error) {
      // Error handling for network or server-related issues
      console.error('Error during login:', error);
      setLoginError('An error occurred during login');
    }
  };
  

  return (
    
    <div className="App">
      <div class="son">
    
    
    {/* <img src={logo} alt="" class="img-fluid"/> */}
  
</div>
      <div class="login-box border border-dark border-5">
    <h2>Login</h2>
   
    <form onSubmit={handleLogin} >  
      <div class="user-box">
      <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        <label htmlFor='username'>Username</label>
      </div>

      
      <div class="user-box">
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <label>Password</label>
      </div>

      {loginError && <div className="error">{loginError}</div>}
        <button type="submit" class="btn" >Login</button>
      
       
    </form>
  </div>
    </div>
  );
}

export default Login;
