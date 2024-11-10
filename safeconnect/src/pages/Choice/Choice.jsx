import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext"; // Import StoreContext
import "./Choice.css";

const Choice = () => {
    const { token } = useContext(StoreContext); // Get token from StoreContext
    const navigate = useNavigate();

    // Handler function to check authentication and navigate accordingly
    const handleOptionClick = (path) => {
        if (token) {
            navigate(path); // If authenticated, navigate to the chosen path
        } else {
            navigate("/login"); // Redirect to login if not authenticated
        }
    };

    return (
        <div className="main-container">
            <header className="Choice-header">
                <h1>
                    Secure <span><img src="/src/assets/peach.svg" alt="&" height="60" /></span> Connect
                </h1>
                <p>
                    Discover how our innovative solutions ensure personal safety and improve organizational workflows. Cutting-edge technology designed to keep people connected and secure.
                </p>
            </header>

            <div className="options-container">
                {/* Message Option */}
                <div
                    className="option-box option-box1"
                    onClick={() => handleOptionClick("/chatpage")}>
                </div>

                {/* Call Option */}
                <div
                    className="option-box option-box2"
                    onClick={() => handleOptionClick("/call")}>
                </div>
            </div>
        </div>
    );
};

export default Choice;
