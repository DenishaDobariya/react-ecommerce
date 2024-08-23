// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkAuthState } from './redux/actions/authActions'; 

import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import AddProduct from './components/AddProduct';
import Order from './components/Order';
import Product from './components/Product';
import EditProduct from './components/EditProduct';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState()); 
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/order' element={<Order />} />
            <Route path='/product' element={<Product />} />
            <Route path='/edit/:id' element={<EditProduct />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
