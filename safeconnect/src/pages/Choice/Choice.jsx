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
      <h1>One Brand   <span><img src="/src/assets/peach.svg" alt="&" height="60" /></span> Two Solutions</h1>
      <p>
        Empower your organization and ensure personal safety with our comprehensive solutions. Discover how we integrate cutting-edge technology to protect individuals and enhance workplace safety.
      </p>
    </header>

    <div className="options-container">
      {/* Message Option */}
      
      <div className="option-box option-box1">
      <Link to="/message">      
        <div className="option-content">
          <h2>Message App</h2>
          <p>Send messages securely and quickly.</p>
      </div></Link>
      </div>

      {/* Call Option */}
      
      <div className="option-box option-box2">
      <Link to="/call">
        <div className="option-content">
          <h2>Call App</h2>
          <p>Connect with safety contacts instantly.</p>
        </div>
      </Link>
      </div>
    </div>
  </div>
);


export default Choice;

