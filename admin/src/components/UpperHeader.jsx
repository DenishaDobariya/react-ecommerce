// src/components/UpperHeader.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/actions/authActions';
import { getUserPhotoURL } from '../utils/firebaseUtils';
import { Link } from 'react-router-dom';

function UpperHeader() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    if (user && user.photoPath) {
      const fetchPhotoURL = async () => {
        const url = await getUserPhotoURL(user.photoPath);
        setPhotoURL(url);
      };
      fetchPhotoURL();
    } else if (user) {
      setPhotoURL(user.photoURL); // Use the photoURL from the user object if available
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className="header">
      <span className="app-title">My App</span>
      {user ? (
        <div className="user-info">
          <img src={photoURL} alt="User Avatar" className="user-avatar" />
          <div className="user-info-content">
            <div className="user-details">
              <span className="user-name">{user.displayName}</span>
              <span className="user-email">{user.email}</span>
            </div>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
        </div>
      ) : (
        <Link to="/login" className="login-link">Login</Link>
      )}
    </header>
  );
}

export default UpperHeader;
