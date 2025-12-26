import { useState } from 'react'
import { FichaHabitacion } from './assets/componentes/FichaHabitacion'
import './App.css'
import { listado_habitaciones } from './assets/constantes/ListadoHabitaciones'
import { checkDisponibilidad } from './assets/logica/Disponibilidad'
import { localStorageHabitaciones } from './assets/logica/UltimasReservas'



function App() {
  const [habitaciones, setHabitaciones] = useState(() => {
    const habitacionesDeStorage = window.localStorage.getItem('habitaciones');
    if (habitacionesDeStorage) return JSON.parse(habitacionesDeStorage)
    return listado_habitaciones
  })

  // Logica para actualizar la disponibilidad de las habitaciones
  const actualizacionDisponibilidad = (index) => {
    const habitacionesActualizadas = [...habitaciones];

    // Verificar si la habitacion esta ocupada, disponible o en reserva
    if (checkDisponibilidad(habitacionesActualizadas[index - 1].disponibilidad) === "Disponible") {
      habitacionesActualizadas[index - 1].disponibilidad = "Reservado"
      setHabitaciones(habitacionesActualizadas)
    } else if (checkDisponibilidad(habitacionesActualizadas[index - 1].disponibilidad) === "Reservado" || "Ocupada") {
      alert("Habitacion ocupada");
    }

    localStorageHabitaciones(habitacionesActualizadas);

  }

  return (
    <section className='App'>
      {
        habitaciones.map(({ id, nombre, precio, disponibilidad, descripcion }) => (
          <FichaHabitacion
            key={id}
            index={id}
            nombre={nombre}
            precio={precio}
            disponibilidad={checkDisponibilidad(disponibilidad)}
            actualizacionDisponibilidad={actualizacionDisponibilidad}
          // TODO : Agregar logica de separación de habitaciones
          >
            <p>{descripcion}</p>
          </FichaHabitacion>
        ))
      }
    </section>

  )
}

export default App
