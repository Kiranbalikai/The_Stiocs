import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios'; // Import axios for sending HTTP requests
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for DatePicker
import './SignupPage.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneno: '',
        dob: null, // Initialize as null to work with DatePicker
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); // To show a loading state
    const [error, setError] = useState(''); // To handle error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value || '', // Default to an empty string if value is undefined
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prev) => ({
            ...prev,
            dob: date
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Set loading to true
        setLoading(true);
        setError('');

        try {
            // Send a POST request to the backend API
            const response = await axios.post(
                'http://localhost:4000/api/user/register',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',  // Ensure proper content type is set
                    }
                }
            );

            // Check if the response is successful
            if (response.data.success) {
                // If successful, you can navigate to login or display success message
                alert('Account created successfully!');
                // Optionally, redirect to login page
                // window.location.href = '/login'; // Or use react-router if you need to navigate programmatically
            } else {
                // Handle errors returned from the server
                setError(response.data.message || 'Something went wrong, please try again.');
            }
        } catch (err) {
            // Handle network errors
            console.error('Error during registration:', err.response || err.message);  // Log the error
            setError('An error occurred. Please try again later.');  // Set error message to display in UI
        } finally {
            // Set loading to false after the request
            setLoading(false);
        }
    };

    return (
        <div className="signup-page">
            <div className="left-section">
                <div className="brand-content">
                    <h1>Safe<br />Connect,</h1>
                    <p>Lorem Ipsum Tagline Here.</p>
                </div>
                <div className="decorative-cards">
                    <div className="card white-card"></div>
                    <div className="card coral-card"></div>
                </div>
            </div>
            <div className="right-section">
                <div className="signup-card">
                    <h2>Create an account</h2>
                    {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneno">Phone No</label>
                            <input
                                type="tel"
                                id="phoneno"
                                name="phoneno"
                                value={formData.phoneno}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
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
                            <label htmlFor="dob">Date of Birth</label>
                            <DatePicker
                                selected={formData.dob}
                                onChange={handleDateChange}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Select your date of birth"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
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
                        <button type="submit" className="create-account-button" disabled={loading}>
                            {loading ? 'Creating account...' : 'Create account'}
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
