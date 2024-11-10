import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'; // Import StoreContext
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';

const LoginPage = () => {
    const { login } = useContext(StoreContext); // Get login function from context
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError('');

        // Use the login function from the context
        const loginResult = await login(formData.email, formData.password);
        console.log("Login result:", loginResult);  //test

        if (loginResult === true) {
            // Show success toast
            toast.success('Login successful!');

            // Redirect to the choice page after a short delay
            setTimeout(() => {
                navigate('/choice'); // Redirect to the /choice page
            }, 2000); // 2-second delay to let the user see the toast
        } else {
            setError(loginResult || 'Invalid credentials, please try again.');
            setLoading(false); // Stop loading when there is an error
        }
    };

    return (
        <div className="login-page">
            <div className="left-section">
                <div className="brand-content">
                    <h1>Safe Connect</h1>
                    <p>Lorem Ipsum Tagline Here.</p>
                    <img src="/src/assets/contact.png" alt="Brand Image" />
                </div>
            </div>
            <div className="right-section">
                <div className="login-card">
                    <h2>Login to your account</h2>
                    {error && <p className="error-message">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <div className="password-header">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="login-button" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    <p className="signup-text">
                        Dont have an account?{' '}
                        <Link to="/signup" className="signup-link">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer /> {/* Toast container for notifications */}
        </div>
    );
};

export default LoginPage;
