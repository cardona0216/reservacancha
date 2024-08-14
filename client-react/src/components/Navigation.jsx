import { Link } from "react-router-dom";
import './Navigation.css';

 export function Navigation() {
  return (
    <nav className="sidebar">
    <h1 className="sidebar-title">Reserva de Cancha</h1>
    <ul className="sidebar-menu">
      <li className="sidebar-item">
        <Link to="/tasks" className="sidebar-link">Task App</Link>
      </li>
      <li className="sidebar-item">
        <Link to="/tasks-create" className="sidebar-link">Crear Tarea</Link>
      </li>
    </ul>
  </nav>
  )
}


