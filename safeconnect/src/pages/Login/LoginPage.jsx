import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { StoreContext } from '../../context/StoreContext'; // Import the context
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useContext(StoreContext); // Get the login function from context
    const navigate = useNavigate(); // Use navigate to redirect after successful login

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call the login function and await the result
        const result = await login(email, password);

        if (result === true) {
            // If login is successful, redirect to dashboard
            navigate('/dashboard');
        } else {
            // If login fails, show an alert with the error message
            alert(result); // This will display the error message like "Incorrect email or password"
        }
    };

    return (
        <div className="login-page">
            <div className="login-page-wrapper">
                <div className="login-card">
                    <h1>Login to your account</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <div className="password-header">
                                <label htmlFor="password">Password</label>
                                <Link to="/forgot-password" className="forgot-link">
                                    Forgot?
                                </Link>
                            </div>
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="login-button">
                            Login now
                        </button>
                    </form>
                    <p className="signup-text">
                        Don’t Have An Account?{' '}
                        <Link to="/signup" className="signup-link">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
