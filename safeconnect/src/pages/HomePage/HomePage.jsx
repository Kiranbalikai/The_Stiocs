// src/pages/HomePage.jsx
import React from 'react';
import './HomePage.css'; // Import the CSS file here

const HomePage = () => {
    return (
        <div>
            <header className="home-header">
                <h1>One Brand <span><img src="/src/assets/peach.svg" alt="&" /></span> Two Solutions</h1>
                <p>
                    Empower your organization and ensure personal safety with our comprehensive solutions. Discover how we integrate cutting-edge technology to protect individuals and enhance workplace safety.
                </p>
            </header>
            <section className="solutions">
                <div className="solution-box">
                    <h2>Women's Safety App</h2>
                    <p>Features: Safe OTP, SOS, Track Me, Ask For Help</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
