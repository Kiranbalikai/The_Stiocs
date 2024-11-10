import { Link } from "react-router-dom";
import "./Choice.css";

// const Choice = () => (
//   <div className="home-container">
//     <div className="options-container">
//       {/* Message Option */}
//       <div className="option">
//         <div className="icon-placeholder">
//           <span role="img" aria-label="Message Icon">💬</span>
//           <p className="option-text">Message</p>
//         </div>
//       </div>

//       {/* Call Option */}
//       <div className="option">
//         <Link to="/caller" className="call-link">
//           <div className="icon-placeholder">
//             <span role="img" aria-label="Call Icon">📞</span>
//             <p className="option-text">Call</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   </div>
// );

const Choice = () => (
  <div className="main-container">
    <header className="Choice-header">
      <h1>One Brand & Two Solutions</h1>
      <p>
        Empower your organization and ensure personal safety with our comprehensive solutions. Discover how we integrate cutting-edge technology to protect individuals and enhance workplace safety.
      </p>
      <span id="starsvg"><img src="/src/assets/star.svg" alt="Star Icon" /></span>
    </header>

    <div className="options-container">
      {/* Message Option */}
      <div className="option-box 1">
        <Link to="/message">
          <img src="src/Group-78631.svg" alt="Message Icon" className="option-image" />
          <h2>Message App</h2>
        </Link>
      </div>

      {/* Call Option */}
      <div className="option-box 2">
        <Link to="/call">
          <img src="vector-person-calling_844724-19410.jpg" alt="Call Icon" className="option-image" />
          <h2>Call App</h2>
        </Link>
      </div>
    </div>
  </div>
);


export default Choice;

