import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import NavBar from './components/Navbar/NavBar.component.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import SignupPage from './pages/SignUp/SignupPage.jsx';
import Caller from './pages/Caller/Caller.jsx';
import './index.css';
import Choice from './pages/Choice/Choice.jsx';
import StoreContextProvider from './context/StoreContext'; // Import the context provider
import { ToastContainer } from 'react-toastify'; // Import ToastContainer to show toasts

function App() {
  return ( 
    <StoreContextProvider>  {/* Wrap the whole app in StoreContextProvider */}
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/call" element={<Caller />} />
            <Route path="/choice" element={<Choice />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />  {/* Render the toast notifications here */}
    </StoreContextProvider>
  );
}

export default App;
