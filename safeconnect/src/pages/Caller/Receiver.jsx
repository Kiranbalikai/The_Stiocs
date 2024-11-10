import { useState, useEffect } from "react";
import PhoneDisplay from "./PhoneDisplay";
import PropTypes from "prop-types"; // Import PropTypes
import './Caller.css';

// import './call.css';

function Receiver({ handleEndCall }) {
  const [randomNumber, setRandomNumber] = useState("");

  useEffect(() => {
    const generateRandomNumber = () => {
      return Math.floor(1000000000 + Math.random() * 9000000000).toString();
    };
    setRandomNumber(generateRandomNumber());
  }, []);

  return (
    <div className="receiver-section">
      <h2>Receiver End :</h2>
      <PhoneDisplay number={randomNumber} handleEndCall={handleEndCall} />
    </div>
  );
}

// Add prop validation
Receiver.propTypes = {
  handleEndCall: PropTypes.func.isRequired, // Validate that handleEndCall is a function and is required
};

export default Receiver;
