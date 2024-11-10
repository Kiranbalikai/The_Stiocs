import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import NavBar from './components/Navbar/NavBar.component.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import SignupPage from './pages/SignUp/SignupPage.jsx';
import Caller from './pages/Call Page/Caller.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/call" element={<Caller />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;