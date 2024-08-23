// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>About Us</h5>
                        <p>
                            We are dedicated to offering high-quality fashion products. Explore our wide range of clothing and accessories designed for all occasions.
                        </p>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Home</a></li>
                            <li><a href="/shop" className="text-light">Shop</a></li>
                            <li><a href="/about" className="text-light">About</a></li>
                            <li><a href="/contact" className="text-light">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p><i className="bi bi-house-door text-white"></i> 1234 Fashion St, San Francisco, CA 94103</p>
                        <p><i className="bi bi-envelope text-white"></i> support@estore.com</p>
                        <p><i className="bi bi-phone text-white"></i> (123) 456-7890</p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} eStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
