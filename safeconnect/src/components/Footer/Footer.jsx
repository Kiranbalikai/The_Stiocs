import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Logo and Description */}
                <div className="footer-logo-section">
                    <img src="/src/assets/logo1.png" alt="SafeConnect Logo" className="footer-logo" />
                    <p className="footer-description">
                        SafeConnect – Secure your connections effortlessly with our app. Providing safety and security at your fingertips.
                    </p>
                </div>



            
                {/* Address Section */}
                <div className="footer-address-section">
                    <h4>Address</h4>
                    <p>123 SafeConnect Ave,<br /> Tech City, Innovation Park,<br /> Zip Code 123456</p>
                </div>
                {/* Redirections Section */}
                <div className="footer-links-section">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>





                {/* Social Media Icons
                <div className="footer-social-section">
                    <h4>Follow Us</h4>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div> */}

    {/* Contact Section */}
    <div className="footer-address-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@yourapp.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>If you have any questions or need assistance, feel free to <a href="+1 (123) 456-7890">+1 (123) 456-7890</a> through our form.</p>
                </div>
                

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SafeConnect. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
