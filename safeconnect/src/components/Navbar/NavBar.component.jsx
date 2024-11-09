import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/src/assets/logo.svg" alt="SafeConnect" />
                <span>SafeConnect</span>
            </div>
            <div className="navbar-links">
                <a href="#personal">Personal</a>
                <a href="#organisation">Organisation</a>
                <a href="#testimonials">Testimonial</a>
                <a href="#contact">Contact Us</a>
            </div>
            <Link to="/login" className="navbar-button">Log In</Link>
        </nav>
    );
};

export default NavBar;