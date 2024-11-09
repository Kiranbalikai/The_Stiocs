import NavBar from '/components/navbar';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
    <div className="home-container">
      <div className="options-container">
        <div className="option">
          <div className="icon-placeholder">Message</div>
        </div>
        <div className="option">
          <Link to="/caller" className="call-link">
            <div className="icon-placeholder">Call</div>
          </Link>
        </div>
      </div>
    </div>
  );



  
  
  export default Home;