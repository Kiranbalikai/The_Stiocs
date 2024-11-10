import { Link } from "react-router-dom";
import "./Home.css";

const Choice = () => (
  <div className="home-container">
    <div className="options-container">
      {/* Message Option */}
      <div className="option">
        <div className="icon-placeholder">
          <span role="img" aria-label="Message Icon">💬</span>
          <p className="option-text">Message</p>
        </div>
      </div>

      {/* Call Option */}
      <div className="option">
        <Link to="/caller" className="call-link">
          <div className="icon-placeholder">
            <span role="img" aria-label="Call Icon">📞</span>
            <p className="option-text">Call</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Choice;
