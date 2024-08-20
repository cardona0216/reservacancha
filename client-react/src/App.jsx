import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate,  useNavigate } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TasksFormPage } from './pages/TaskFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Para manejar la pantalla de carga
  const navigate = useNavigate(); // Hook para redirigir al login

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login'); // Redirigir al login después de cerrar sesión
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex' }}>
      {isAuthenticated && <Navigation handleLogout={handleLogout} />}
      <main style={{ marginLeft: '350px', padding: '20px', flexGrow: 1 }}>
        <Routes>
          <Route
            path='/'
            element={isAuthenticated ? <Navigate to='/tasks' /> : <Navigate to='/login' />}
          />
          <Route
            path='/tasks'
            element={isAuthenticated ? <TasksPage /> : <Navigate to='/login' />}
          />
          <Route
            path='/tasks-create'
            element={isAuthenticated ? <TasksFormPage /> : <Navigate to='/login' />}
          />
          <Route
            path='/tasks/:id'
            element={isAuthenticated ? <TasksFormPage /> : <Navigate to='/login' />}
          />
          <Route
            path='/login'
            element={isAuthenticated ? <Navigate to='/tasks' /> : <Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
        </Routes>
      </main>
      <Toaster />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
