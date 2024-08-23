import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(email, password));
    navigate('/')
  };

  return (
    <div className="login-container" style={{ marginTop: '120px', marginBottom: '50px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
