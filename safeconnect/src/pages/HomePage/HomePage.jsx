// src/pages/HomePage.jsx
import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            {/* Header Section */}
            <header className="home-header">
                <h1>One Brand <span><img src="/src/assets/peach.svg" alt="&" height="60" /></span> Two Solutions</h1>
                <p>
                    Empowering women with secure and discreet communication tools. Our platform offers virtual numbers for privacy and advanced message filtering to shield against harmful content, ensuring a safe and respectful digital experience.
                </p>
            </header>

            {/* Main Content with alternating images and text */}
            <section className="content-section">
                {/* Section 1: Image Left, Text Right */}
                <div className="content-block">
                    <div className="content-image">
                        <img src="/src/assets/girl.png" alt="Empowerment" />
                    </div>
                    <div className="content-text">
                        <p>Our platform prioritizes a safe and respectful messaging experience. Each message is analyzed by an intelligent filtering system that checks for offensive or harmful language. If a message is identified as potentially toxic, users receive a notification, alerting them that the sender may be engaging in inappropriate or offensive communication. This feature empowers users to be aware of any concerning interactions without blocking the message outright, helping them make informed decisions while fostering a safe and supportive environment.</p>
                    </div>
                </div>

                {/* Section 2: Text Left, Image Right */}
                <div className="content-block reverse">
                    <div className="content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec vehicula cursus at eget dolor. Cras tincidunt quam id fermentum facilisis.</p>
                    </div>
                    <div className="content-image">
                        <img src="/src/assets/Fakecall2.png" alt="Fake Call Feature" />
                    </div>
                </div>

                {/* Section 3: Image Left, Text Right */}
                {/* <div className="content-block">
                    <div className="content-image">
                        <img src="/src/assets/Recordbg.png" alt="Record Background" />
                    </div>
                    <div className="content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec vehicula cursus at eget dolor. Cras tincidunt quam id fermentum facilisis.</p>
                    </div>
                </div> */}
            </section>

            {/* Contact Us Section */}
            {/* <section className="contact-section">
                <div className="contact-content">
                    <h2>Contact Us</h2>
                    <p>We’d love to hear from you! Fill out the form below and we’ll get in touch with you soon.</p>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
                <div className="contact-image">
                    <img src="/src/assets/FlowerGirl1.png" alt="Contact Us" />
                </div>
            </section> */}
        </div>
    );
};

export default HomePage;
