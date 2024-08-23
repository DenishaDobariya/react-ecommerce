// src/components/HeroSection.js
import React from 'react';
import heroImage from '../assets/images/hero-bg.webp'; 
import About from './About';
import Contact from './Contact';
import Shop from './Shop';

const Home = () => {
    return (
        <>
        <section
            className="d-flex align-items-center justify-content-center text-center vh-100"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '80vh',
                color: '#fff',
                position: 'relative', 
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                    zIndex: 1,
                }}
            />
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h1 className="display-4 fw-bold text-dark">Women Collection 2024</h1>
                <p className="lead text-dark fw-bold">New Season</p>
                <a href="/shop" className="btn btn-primary btn-lg">
                    Shop Now
                </a>
            </div>
        </section>
        <Shop/><hr/>
        <About/><hr/>
        <Contact/>
        </>
    );
};

export default Home;
