import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import NavBar from './components/Navbar/NavBar.component.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;