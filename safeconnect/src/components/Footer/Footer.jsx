import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();  // Use navigate hook for redirection

    // Function to handle Home link click and scroll to top of the page
    const handleHomeClick = (e) => {
        e.preventDefault();  // Prevent default link behavior
        navigate('/');  // Redirect to home page
        window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to the top smoothly
    };

    // Function to handle Services link click and scroll to top of the page
    const handleServicesClick = (e) => {
        e.preventDefault();  // Prevent default link behavior
        navigate('/choice');  // Redirect to services page (change '/choice' if your services page path is different)
        window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to the top smoothly
    };

    // Function to handle Contact Us link click and scroll to footer section of the Home page
    const handleContactClick = (e) => {
        e.preventDefault();  // Prevent default link behavior
        // First, redirect to the Home page
        navigate('/');
        // Then, after a slight delay, scroll to the footer
        setTimeout(() => {
            const footerElement = document.getElementById('footer');  // Get the footer element by ID
            if (footerElement) {
                footerElement.scrollIntoView({ behavior: 'smooth' });  // Scroll smoothly to the footer
            }
        }, 200); // Small delay to ensure the navigation to Home is complete
    };

    return (
        <footer className="footer" id="footer">
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
                    <a href="/" onClick={handleHomeClick}>Home</a>  {/* Handle home redirection */}
                    <a href="/choice" onClick={handleServicesClick}>Services</a>  {/* Handle services redirection */}
                    <a href="#footer" onClick={handleContactClick}>Contact Us</a>  {/* Handle contact redirection */}
                </div>

                {/* Contact Section */}
                <div className="footer-address-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@yourapp.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>If you have any questions or need assistance, feel free to <a href="tel:+11234567890">+1 (123) 456-7890</a> through our form.</p>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SafeConnect. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
