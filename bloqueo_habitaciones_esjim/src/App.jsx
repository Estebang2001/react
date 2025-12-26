import { useState } from 'react'
import { FichaHabitacion } from './assets/componentes/FichaHabitacion'
import './App.css'
import { listado_habitaciones } from './assets/constantes/ListadoHabitaciones'
import { checkDisponibilidad } from './assets/logica/Disponibilidad'
import { actualizacionDisponibilidad } from './assets/logica/actualizacionDisponibilidad'


function App() {
  const [habitaciones, setHabitaciones] = useState(listado_habitaciones)


  return (
    <section className='App'>
      {
        habitaciones.map(({ id, nombre, precio, disponibilidad, descripcion }) => (
          <FichaHabitacion
            key={id}
            nombre={nombre}
            precio={precio}
            // TODO : Agregar logica de separación de habitaciones
          >
            <button onClick={actualizacionDisponibilidad(disponibilidad)}>{checkDisponibilidad(disponibilidad)}</button>
            <p>{descripcion}</p>
          </FichaHabitacion>
        ))
      }
    </section>

  )
}

export default App
