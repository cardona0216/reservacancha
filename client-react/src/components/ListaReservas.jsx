

import { useEffect, useState } from 'react';
import { getAllReservas } from '../api/reservaApi'; // Asegúrate de tener esta función configurada
import { ReservaCard } from './ReservaCard';

import '../styles/ListaTasks.css'

export function ListaReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      const response = await getAllReservas();
      setReservas(response.data);
    };
    fetchReservas();
  }, []);

  return (
    <div style={{color: 'white'}} className="grid grid-cols-3 gap-3 lista" >
      {
        reservas.map((reserva) => (
          
        <ReservaCard key={reserva.id} reserva={reserva} canchaId={reserva.cancha} />
      ))
      
      }
     
    </div>
  );
}

