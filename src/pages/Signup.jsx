import { useState, useContext } from 'react';
import PageNav from '../components/PageNav';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';


function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setCurrentUser} = useContext(UserContext)
  
  

  const handleLogin = async e => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    try {
      e.preventDefault();

      const response = await axios.post('http://localhost:8080/jpa/users/signup', {
        username: trimmedUsername,
        password: trimmedPassword,
      });
      console.log('Login successful:', response.data);
      setCurrentUser(response.data.username);
      console.log('the current user is', response.data.username )

      navigate('/');
      // Handle successful login response, e.g., redirecting the user
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, e.g., displaying an error message to the user
    }
  };

  return (
    <div className='loginPage'>
      <div className='login'>
        <header>
          <h1>Signup</h1>
        </header>
        <form
          onSubmit={e => {
            handleLogin(e);
          }}>
          <p>
            <label>
              <b>Username:</b>
            </label>
            <input
              className='input'
              type='text'
              name='Username'
              value={username}
              onChange={e => setUsername(e.target.value)}></input>
          </p>
          <label>
            <b>Password:</b>
          </label>
          <input
            className='input'
            type='password'
            name='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}></input>
          <button className='login-button'>Submit</button>
        </form>
        <Link className='pagelink' to={'/login'}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
