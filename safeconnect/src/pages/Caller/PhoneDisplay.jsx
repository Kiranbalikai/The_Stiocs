import PropTypes from "prop-types";
import './Caller.css';

function PhoneDisplay({ number, handleEndCall }) {
  return (
    <div className="phone-display">
      <div className="phone-number">{number}</div>
      <div className="call-time">10:15</div>
      <div className="icons">
        <div className="icon">🔊</div>
        <div className="icon">🔒</div>
        <div className="icon">🔇</div>
        <div className="icon">➕</div>
      </div>
      <div className="end-call" onClick={handleEndCall}>📞</div>
    </div>
  );
}

PhoneDisplay.propTypes = {
  number: PropTypes.string.isRequired,
  handleEndCall: PropTypes.func.isRequired,
};

export default PhoneDisplay;
