import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'; // Correct path to StoreContext
import { LogOut } from 'lucide-react'; // Assuming you want to use an icon for logout
import './NavBar.css';

const NavBar = () => {
    const { token, logout } = useContext(StoreContext);  // Get token and logout from context
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // New state for dropdown visibility

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

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/src/assets/logo1.png" alt="SafeConnect" />
            </div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/choice" onClick={toggleMenu}>Services</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>

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
