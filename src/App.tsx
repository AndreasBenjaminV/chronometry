import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import logo from "./assets/logo.png"; 
import logo_svg from "./assets/logo.svg";
import Contact from "./pages/Contact/Contact";
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

// Footer component
const Footer: React.FC = () => {
  const isLoggedIn = false; // Replace with actual login logic

  return (
    <footer className="footer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo_svg} alt="Chronometry Logo" style={{ width: "50px", marginRight: "10px" }} />
        <span>2025 Chronometry Inc.</span>
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flex: 1 }}> 
        <Link to="/" className="nav-link">Home</Link>
        {isLoggedIn ? (
          <Link to="/logout" className="nav-link">Cerrar sesión</Link>
        ) : (
          <>
        <Link to="/login" className="nav-link">Iniciar sesión</Link>
        <Link to="/register" className="nav-link">Registrarse</Link>
          </>
        )}
        <Link to="/contact" className="nav-link">Contacto</Link>
      </div>
    </footer>
  );
};

// Mounting the React application with Router
const Root: React.FC = () => {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />  
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Root;
