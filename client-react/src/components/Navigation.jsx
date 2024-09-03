
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navigation.css'
import '../styles/EditPerfil.css'
import { useState } from 'react';

export function Navigation({ handleLogout , user }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
          <Link to="/cancha" className="sidebar-link">Canchas</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/reserva" className="sidebar-link">Mis reservas</Link>
        </li>
        {/* <li className="sidebar-item">
          <Link to="/tasks" className="sidebar-link">Mis Tareas App</Link>
        </li> */}
        {/* <li className="sidebar-item">
          <Link to="/tasks-create" className="sidebar-link">Crear Tarea</Link>
        </li> */}
        <li className="sidebar-item">
          <button onClick={logout} className="sidebar-link">Cerrar sesión</button>
        </li>
      {user && (
        <div className="sidebar-user-section">
          <button onClick={toggleDropdown} className="sidebar-username">
             {user}
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/edit-profile">Editar Perfil</Link>
              </li>
              <li>
                <button onClick={logout}>Cerrar Sesión</button>
              </li>
            </ul>
          )}
        </div>
      )}
      </ul>
    </nav>
  );
}

// Define la validación de prop-types
Navigation.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.string,
};

export default Navigation;
