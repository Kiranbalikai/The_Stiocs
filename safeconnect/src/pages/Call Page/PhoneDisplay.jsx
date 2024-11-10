import PropTypes from "prop-types"; // Import PropTypes
import "./call.css";

function PhoneDisplay({ number, handleEndCall }) {
  return (
    <div className="phone-display">
      <div className="phone-number">{number}</div>
      <div className="call-time">10:15</div>
      <div className="icons">
        <div>🔊</div>
        <div>🔒</div>
        <div>🔇</div>
        <div>➕</div>
      </div>
      <div className="end-call" onClick={handleEndCall}>📞</div>
    </div>
  );
}

// Add prop validation
PhoneDisplay.propTypes = {
  number: PropTypes.string.isRequired, // Validate that number is a string and is required
  handleEndCall: PropTypes.func.isRequired, // Validate that handleEndCall is a function and is required
};

export default PhoneDisplay;
