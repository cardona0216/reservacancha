import { useState, useEffect } from 'react';
import axios from 'axios';
import ReservaForm from '../pages/ReservaForm'; // Importa el componente del formulario de reserva

function CanchasList() {
  const [canchas, setCanchas] = useState([]);
  const [selectedCancha, setSelectedCancha] = useState(null); // Estado para almacenar la cancha seleccionada
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCanchas = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cancha/api/v1/cancha/');
        console.log(response);
        
        setCanchas(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCanchas();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSelectCancha = (cancha) => {
    console.log('Cancha seleccionada:', cancha); // Agrega este log para verificar la cancha seleccionada
    console.log('esta es la cancha',cancha);
    
    setSelectedCancha(cancha); // Almacena la cancha seleccionada en el estado
  };

  return (
    <div className="container mx-auto mt-8">
     <h1 className="text-2xl font-bold text-center mb-6 text-white">Lista de Canchas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {canchas.map(cancha => (
          <div key={cancha.id} className="bg-gray-800 shadow-lg rounded-lg p-6 text-white">
            <h2 className="text-xl font-semibold mb-2">{cancha.nombre}</h2>
            <p className="text-gray-300">Ubicación: {cancha.ubicacion}</p>
            <p className="text-gray-300">Capacidad: {cancha.capacidad} personas</p>
            <button 
              onClick={() => handleSelectCancha(cancha)} 
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Reservarrrr
            </button>
          </div>
        ))}
      </div>

  {selectedCancha && (
    <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl text-center text-gray-800 font-semibold mb-4">
        Reservar {selectedCancha.nombre}
      </h2>
      <ReservaForm canchaId={selectedCancha.id} /> {/* Pasamos el ID de la cancha seleccionada */}
    </div>
  )}
</div>

  );
}

export default CanchasList;
