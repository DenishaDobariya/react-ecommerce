import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';

const menu = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'bi bi-ui-checks-grid'
    },
    {
        path: '/addproduct',
        name: 'Add Product',
        icon: 'bi bi-plus-square'
    },
    {
        path: '/order',
        name: 'Order',
        icon: 'bi bi-bag-plus'
    },
    {
        path: '/product',
        name: 'Product',
        icon: 'bi bi-basket'
    }
];

function Sidebar() {
    return (
        <div className="sidebar col-3 vh-100 bg-color text-white border-end">
            <div className="logo d-flex p-3 h-70 border-bottom shadow-sm align-items-center">
                <img src={logo} alt="logo" className="logo-img" />
                <h2 className="fw-bold d-none d-lg-block ms-2">eStore</h2>
            </div>
            <div className="menu">
                <ul className="list-unstyled">
                    {menu.map((item, index) => (
                        <li key={index} className="border-bottom p-3 d-flex align-items-center fs-5">
                            <i className={`${item.icon} me-2 fs-4`}></i>
                            <Link to={item.path} className="text-white text-decoration-none d-none d-lg-block">{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
