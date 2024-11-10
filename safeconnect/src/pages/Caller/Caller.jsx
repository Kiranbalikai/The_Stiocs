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
  const callerSectionStyle = {
    width: "300px",
    height: "500px",
    backgroundColor: "#002147",
    borderRadius: "45px",
    marginBottom: "80px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    backgroundImage: `url(${'../assets/412555143.png'})`, // Change this path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
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
        <PhoneDisplay number={phoneNumber}  handleEndCall={handleEndCall} />
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
