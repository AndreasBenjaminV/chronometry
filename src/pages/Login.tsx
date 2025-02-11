import React from "react";
import './Login.css';
// import logo from '../assets/logo.png'; // Asegúrate de que la ruta sea correcta


const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
      {/* <img src={logo} alt="Chronometry Logo" className="logo" /> */}
        <h2 className="text-2xl font-semibold text-center mb-6">Chronometry</h2>
        <h3 className="text-2xl font-semibold text-center mb-6">Inciar sesión</h3>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="input-field"
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button
            type="submit"
            className="login-button"
          >
            Ingresar
          </button>
          <div className="separator">_________________________</div>
          <div className="social-login">
            <p className="text-center mt-4">O ingresa con:</p>
            <div className="social-icons">
              <button className="social-button google">Google</button>
              <button className="social-button facebook">Facebook</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;