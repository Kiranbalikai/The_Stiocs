import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = 'http://localhost:4000'; // API URL
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    // On initial load, check if a token is saved in localStorage
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            console.log("Token from localStorage:", savedToken);  // Debugging
            setToken(savedToken); // Set the token from localStorage when the app starts
        }
    }, []);

    // Save the token to localStorage whenever it changes
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token); // Save token when set
        } else {
            localStorage.removeItem('token'); // Remove token when logged out
        }
    }, [token]);

    // Login function
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${url}/api/user/login`, { email, password });

            if (response.data.success) {
                // If login is successful, store the token
                setToken(response.data.token); // Save token in context and localStorage
                return true; // Return success
            } else {
                return response.data.message; // Return failure message from backend
            }
        } catch (error) {
            console.error('Login Error:', error);
            return 'An error occurred during login.';
        }
    };

    // Logout function
    const logout = () => {
        setToken(''); // Clear token from context and localStorage
    };

    // Context value to pass to other components
    const contextValue = {
        token,
        setToken,
        login,
        logout,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children} {/* Render children passed to this component */}
        </StoreContext.Provider>
    );
};

// Define prop types for validation
StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is required and of type 'node'
};

export default StoreContextProvider;
