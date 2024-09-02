
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navigation.css'

export function Navigation({ handleLogout , user }) {
  const navigate = useNavigate(); // Llama a useNavigate dentro del componente
  const logout = () => {
    handleLogout();  // Llama a la función pasada como prop
    navigate('/login'); // Redirige al usuario a la página de login
    localStorage.removeItem('token');

  };

  return (
    <nav className="sidebar">
      <h1 className="sidebar-title">Reserva de Cancha</h1>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/tasks" className="sidebar-link">Reservas App</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/tasks-create" className="sidebar-link">Crear Reserva</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/cancha" className="sidebar-link">Canchas</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/reserva" className="sidebar-link">Mis reservas</Link>
        </li>
        <li className="sidebar-item">
          <button onClick={logout} className="sidebar-link">Cerrar sesión</button>
        </li>
      </ul>
          {user && <p className="sidebar-username">Bienvenido: {user}</p>} {/* Mostrar el nombre del usuario */}
    </nav>
  );
}

// Define la validación de prop-types
Navigation.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.string,
};

export default Navigation;
