import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000"; // API URL
    const [token, setToken] = useState("");

    // On initial load, check if a token is saved in localStorage
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    // Save the token to localStorage whenever it changes
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token); // Save token when set
        } else {
            localStorage.removeItem("token"); // Remove token when logged out
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
                // Return failure message from backend (e.g., "Incorrect email or password")
                return response.data.message;
            }
        } catch (error) {
            console.error("Login Error:", error);
            return "An error occurred during login."; // Return a fallback error message in case of a network error
        }
    };
    
    

    // Logout function
    const logout = () => {
        setToken(""); // Clear token from context and localStorage
    };

    // Context value to pass to other components
    const contextValue = {
        token,
        setToken,
        login, // Expose the login function
        logout, // Expose the logout function
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
