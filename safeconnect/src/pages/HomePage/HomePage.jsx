// src/pages/HomePage.jsx
import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <header className="home-header">
                <h1>One Brand <span><img src="/src/assets/peach.svg" alt="&" height="60" /></span> Two Solutions</h1>
                <p>
                    Empower your organization and ensure personal safety with our comprehensive solutions. Discover how we integrate cutting-edge technology to protect individuals and enhance workplace safety.
                </p>
                <span id='starsvg'><img src="/src/assets/star.svg" alt="" /></span>
            </header>

            {/* New Section for Cards */}
            

            {/* Loreum Ipsum Below Cards */}
            <div className="loreum-section">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                <p>Donec vehicula cursus at eget dolor. Cras tincidunt quam id fermentum facilisis.</p>
                <img src="/src/assets/girllong.png" alt="" />
            </div>
            <div>
            </div>
            
        </div>
    );
};

export default HomePage;
