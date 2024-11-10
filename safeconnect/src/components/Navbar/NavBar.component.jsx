import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'; 
import { LogOut } from 'lucide-react'; 
import './NavBar.css';

const NavBar = () => {
    const { token, logout } = useContext(StoreContext);  // Get token and logout from context
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // New state for dropdown visibility
    const location = useLocation();  // Get current location (URL path)
    const navigate = useNavigate();  // For programmatic navigation

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);  // Toggle dropdown visibility
    };

    const handleLogout = () => {
        logout();  // Call the logout function from context
        setIsDropdownOpen(false);  // Close dropdown after logging out
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to the top smoothly
    };

    // Scroll to bottom of the Home page
    const handleContactScroll = (e) => {
        e.preventDefault();
        // First, redirect to home
        navigate('/');  // Navigate to home page
        // Then scroll to the footer after a slight delay (to ensure the page loads)
        setTimeout(() => {
            const footerElement = document.getElementById('footer');
            if (footerElement) {
                footerElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200); // Add a small delay to ensure the navigation is complete
    };

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            scrollToTop();  // Scroll to top if already on the home page
        } else {
            navigate('/');  // Redirect to home if not on the home page
        }
    };

    const handleServicesClick = () => {
        navigate('/choice');  // Redirect to services page
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {/* Logo with conditional behavior based on the current page */}
                <img
                    src="/src/assets/logo1.png"
                    alt="SafeConnect"
                    onClick={handleHomeClick}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                <a href="/" onClick={handleHomeClick}>Home</a>
                <a href="#services" onClick={handleServicesClick}>Services</a>
                <a href="#footer" onClick={handleContactScroll}>Contact Us</a>  {/* Contact Us link */}
                {/* Conditionally render Log In or Profile Icon */}
                {token ? (
                    <div className="profile-icon-container">
                        <img
                            src="/src/assets/profile_icon.png"
                            alt="Profile"
                            className="profile-icon"
                            onClick={toggleDropdown}  // Toggle dropdown visibility
                        />
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <button onClick={handleLogout} className="dropdown-item">
                                    <LogOut size={20} style={{ marginRight: '8px' }} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="navbar-button" onClick={toggleMenu} style={{ color: '#ffffff' }}>
                        Log In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
