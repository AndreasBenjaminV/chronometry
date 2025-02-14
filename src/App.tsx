import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import logo from "./assets/logo.png"; 
import "./App.css"; 

// Main application component with navigation links
const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", textAlign: "center" }}>
      <img src={logo} alt="Chronometry Logo" style={{ width: "150px", marginBottom: "20px" }} />
      <h1 style={{ color: "#cee7ff" }}>Chronometry</h1>
      <nav>
        <Link to="/login" className="nav-link">
          <button>Login</button>
        </Link>
        <br /> <br />
        <Link to="/register" className="nav-link">
          <button>Register</button>
        </Link>
      </nav>
    </div>
  );
};

// Mounting the React application with Router
const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Root;
