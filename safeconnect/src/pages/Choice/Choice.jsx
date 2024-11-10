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
      <h1>Secure   <span><img src="/src/assets/peach.svg" alt="&" height="60" /></span> Connect</h1>
      <p>
        Discover how our innovative solutions ensure personal safety and improve organizational workflows. Cutting-edge technology designed to keep people connected and secure.      </p>
    </header>

    <div className="options-container">
      {/* Message Option */}
      
      <Link to="/message" className="option-box option-box1"></Link>

      {/* Call Option */}
      
      <Link to="/call" className="option-box option-box2"></Link>
    </div>
  </div>
);


export default Choice;

