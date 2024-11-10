import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'; // Correct path to StoreContext
import './NavBar.css';

const NavBar = () => {
    const { token, logout } = useContext(StoreContext);  // Get token and logout from context
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <div className="profile-icon" onClick={logout}>
                        <img
                            src="/src/assets/profile_icon.png"
                            alt="Profile"
                            className="profile-icon-img"
                        />
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
