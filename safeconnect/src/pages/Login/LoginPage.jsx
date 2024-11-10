// LoginPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempted with:', { email, password });
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
