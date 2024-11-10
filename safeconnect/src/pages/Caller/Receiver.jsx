import { useState, useEffect } from "react";
import PhoneDisplay from "./PhoneDisplay";
import PropTypes from "prop-types";
import './Caller.css';

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
      <h3>Receiver End:</h3>
      <PhoneDisplay number={randomNumber} handleEndCall={handleEndCall} />
    </div>
  );
}

Receiver.propTypes = {
  handleEndCall: PropTypes.func.isRequired,
};

export default Receiver;
