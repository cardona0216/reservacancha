
import PropTypes from 'prop-types';

export function ReservaCard({ reserva }) {

 
  
    
        
    return (
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Reserva de cancha {reserva.cancha}</h2>
        <p className="text-gray-300 mb-2">Ubicación: {reserva.cancha.ubicacion}</p>
        <p className="text-gray-300 mb-2">Capacidad: {reserva.cancha.capacidad} personas</p>
        <p className="text-gray-300 mb-2">Fecha: {reserva.fecha_reserva}</p>
        <p className="text-gray-300 mb-4">Hora: {reserva.hora_reserva}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => {/* Función para editar */}}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Editar
          </button>
          <button
            onClick={() => {/* Función para cancelar */}}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
      
    );
  }

  ReservaCard.propTypes = {
    reserva: PropTypes.shape({
        id: PropTypes.number.isRequired,
      cancha: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        ubicacion: PropTypes.string.isRequired,
        capacidad: PropTypes.number.isRequired,
      }).isRequired,
      fecha_reserva: PropTypes.string.isRequired,
      hora_reserva: PropTypes.string.isRequired,
    }).isRequired,
  };


