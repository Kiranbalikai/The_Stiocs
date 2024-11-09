import React from 'react';
import './Footer.css';  // Import Footer-specific styles

const Footer = () => (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-logo">
                <img src="../assets/logo.png" alt="I'm Safe Logo" />
                <p>I'm Safe is an innovative app that uses cutting-edge technology to ensure the safety of people at all times.</p>
            </div>
            <div className="footer-links">
                <a href="#">Personal</a>
                <a href="#">Organisation</a>
                <a href="#">Testimonials</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="footer-newsletter">
                <input type="email" placeholder="Subscribe to our newsletter" />
                <button>Subscribe</button>
            </div>
            <div className="footer-contacts">
                <div>
                    <p>India</p>
                    <p>🇮🇳 +91 9790911149</p>
                </div>
                <div>
                    <p>Australia</p>
                    <p>🇦🇺 +61 450 601 818</p>
                </div>
                <a href="mailto:info@imsafe.app">info@imsafe.app</a>
            </div>
            <div className="footer-social">
                <p>Connect with us</p>
                <a href="#"><img src="../assets/icon-x.png" alt="X" /></a>
                <a href="#"><img src="../assets/icon-facebook.png" alt="Facebook" /></a>
                <a href="#"><img src="../assets/icon-instagram.png" alt="Instagram" /></a>
                <a href="#"><img src="../assets/icon-linkedin.png" alt="LinkedIn" /></a>
            </div>
        </div>
        <div className="footer-bottom">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Disclaimer Policy</a>
            <p>Copyright © 2024 I’M SAFE APP. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
