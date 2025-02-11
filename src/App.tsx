import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
// import Homepage from "./pages/Homepage";
// import ContactPage from "./pages/ContactPage";

// Main application component with navigation links
const App: React.FC = () => {
  return (
    <div>
      <h1>Chronometry</h1>
      <nav>
        <Link to="/login">Login</Link>
        {/* <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link> */}
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
        {/* <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
};

export default Root;