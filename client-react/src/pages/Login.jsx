import { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from "../api/authApi";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ username, password });

      // Guardar el token en el localStorage
      localStorage.setItem('token', response.data.token);

      // Cambiar el estado de autenticación
      setIsAuthenticated(true);

      // Redirigir a tasks
      navigate('/tasks');
    } catch  {
      setError('Usuario invalido o contarseña');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ background: 'red' }}>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <img src="src/assets/cancha.jpg" alt="Descripción de la imagen" />
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={Login}>
          <div className="mb-8">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Dont have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Login;
