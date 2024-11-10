import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './SignupPage.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNo: '',
        dateOfBirth: '',
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup attempted with:', formData);
    };

    return (
        <div className="signup-page">
            <div className="left-section">
                <div className="brand-content">
                    <h1>Safe<br />Connect,</h1>
                    <p>Lorem Expoldj This Tagline Athis.</p>
                </div>
                <div className="decorative-cards">
                    <div className="card white-card"></div>
                    <div className="card coral-card"></div>
                </div>
            </div>
            <div className="right-section">
                <div className="signup-card">
                    <h2>Create an account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNo">Phone No</label>
                            <input
                                type="tel"
                                id="phoneNo"
                                name="phoneNo"
                                value={formData.phoneNo}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateOfBirth">Date Of Birth</label>
                            <input
                                type="text"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                placeholder="Enter your dob"
                                required
                            />
                        </div>
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
                                    type={showPassword ? "text" : "password"}
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
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="create-account-button">
                            Create account
                        </button>
                    </form>
                    <p className="login-text">
                        Already Have An Account?{' '}
                        <Link to="/login" className="login-link">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;