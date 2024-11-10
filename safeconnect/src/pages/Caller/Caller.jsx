import { useState } from "react";
import PhoneDisplay from "./PhoneDisplay.jsx";
import Receiver from "./Receiver";
import './Caller.css';

function Caller() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showReceiver, setShowReceiver] = useState(false);

  const validatePhoneNumber = (number) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(number);
  };

  const handleInputChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
  };

  const handleCall = () => {
    if (validatePhoneNumber(phoneNumber)) {
      setShowReceiver(true);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const handleEndCall = () => {
    setShowReceiver(false);
    setPhoneNumber("");
  };

  return (
    <div className="caller-receiver-container">
      <div className="caller-section">
        <h3>Caller Side:</h3>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter 10-digit number"
            value={phoneNumber}
            onChange={handleInputChange}
          />
          <button onClick={handleCall}>📞</button>
        </div>
        <PhoneDisplay number={phoneNumber} />
      </div>
      {showReceiver && (
        <div className="receiver-section">
          <Receiver handleEndCall={handleEndCall} />
        </div>
      )}
    </div>
  );
}

export default Caller;
