// src/App.js
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authStateChanged } from './redux/actions/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChanged());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <div className="main-content" style={{ marginTop: '70px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:category' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
