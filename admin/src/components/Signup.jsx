import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../redux/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector(state => state.auth);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    await dispatch(signUp(email, password, displayName, photoURL));
    navigate('/login'); // Redirect to login after successful sign-up
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
