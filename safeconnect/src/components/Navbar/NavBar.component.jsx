import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
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
            <div className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/about" onClick={toggleMenu}>About</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
                <Link to="/login" className="navbar-button" onClick={toggleMenu} style={{ color: "#ffffff" }}>Log In</Link>
            </div>
        </nav>
    );
};

export default NavBar;
