import { useState } from "react";
import PhoneDisplay from "./PhoneDisplay";
import Receiver from "./Receiver";
import "./call.css";

function Caller() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showReceiver, setShowReceiver] = useState(false);

  // Validation for 10-digit phone number
  const isValidPhoneNumber = (number) => {
    // Regex to check if the number is exactly 10 digits
    return /^\d{10}$/.test(number);
  };

  const handleCall = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      setShowReceiver(true);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  // Resets Caller to its original state
  const resetCaller = () => {
    setShowReceiver(false); // Hide the Receiver component
    setPhoneNumber(""); // Clear the phone number input field
  };

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="caller-receiver-container">
      <div className="caller-section">
        <h2>Caller Side:</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handleInputChange}
            maxLength={10} // Limit to 10 digits for input
          />
          <button onClick={handleCall}>📞</button>
        </div>
        <PhoneDisplay number={phoneNumber} />
      </div>
      {showReceiver && <Receiver handleEndCall={resetCaller} />}
    </div>
  );
}

export default Caller;
