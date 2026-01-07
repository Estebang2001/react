import { useState } from 'react'
import { FichaHabitacion } from './assets/componentes/FichaHabitacion'
import './App.css'
import { listado_habitaciones } from './assets/constantes/ListadoHabitaciones'
import { checkDisponibilidad } from './assets/logica/Disponibilidad'
import { localStorageHabitaciones } from './assets/logica/UltimasReservas'
import { ReservacionHabitacion } from './assets/componentes/ReservacionHabitacion'
import { useRef } from 'react'


function App() {
  // Referencia de timer
  const timerRef = useRef(null);
  // Estado actualizado de las habitaciones disponibles
  // Estado actualizado de las habitaciones disponibles
  const [habitaciones, setHabitaciones] = useState(() => {
    const habitacionesDeStorage = window.localStorage.getItem('habitaciones');
    if (habitacionesDeStorage) {
      const habitacionesParsed = JSON.parse(habitacionesDeStorage);

      // LOGICA DE LIMPIEZA:
      // Si hay alguna "Reservado" al cargar, es un error (se refrescó la página).
      // Las devolvemos a "Disponible".
      return habitacionesParsed.map(habitacion => {
        if (habitacion.disponibilidad === "Reservado") {
          return { ...habitacion, disponibilidad: "Disponible" };
        }
        return habitacion;
      });
    }
    return listado_habitaciones
  })
  // Estado para mostrar el formulario de reservación
  const [reservaActiva, setReservaActiva] = useState(null);

  // Estado para verificar si se pagó la habitación
  const [pago, setPago] = useState(false)

  // Logica para actualizar la disponibilidad de las habitaciones
  const actualizacionDisponibilidad = (index) => {
    const habitacionesActualizadas = [...habitaciones];

    // Verificar si la habitacion esta ocupada, disponible o en reserva
    if (checkDisponibilidad(habitacionesActualizadas[index - 1].disponibilidad) === "Disponible") {
      habitacionesActualizadas[index - 1].disponibilidad = "Reservado"
      setHabitaciones(habitacionesActualizadas)
      // Ventana de pago de 5 segundos, si no paga, se restablecen los valores iniciales
      setReservaActiva(index - 1)
      timerRef.current = setTimeout(() => {
        // Si entra aquí, es que NO pagó a tiempo.
        alert("¡Tiempo agotado!");
        const habsVencidas = [...habitaciones]; // leer el estado inicial
        habsVencidas[index - 1].disponibilidad = "Disponible";
        setHabitaciones(habsVencidas);
        setReservaActiva(null);
      }, 5000);
    } else if (checkDisponibilidad(habitacionesActualizadas[index - 1].disponibilidad) === "Reservado" || "Ocupada") {
      alert("Habitacion ocupada");
    }
    // Esto en caso de ser local, si fuese un backend, se enviaria a la base de datos para que todos 
    // puedan ver los cambios
    localStorageHabitaciones(habitacionesActualizadas);

  }

  // Funcion para volver al home desde el formulario de reservación

  const cerrarModal = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const habsLibres = [...habitaciones];
    // Si cerramos sin pagar, liberamos la habitación
    if (reservaActiva !== null) {
      habsLibres[reservaActiva].disponibilidad = "Disponible";
      setHabitaciones(habsLibres);
    }
    setReservaActiva(null);
  }

  // Función para verificar pago
  const verificarPago = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    const habitacionesPagadas = [...habitaciones];
    habitacionesPagadas[reservaActiva].disponibilidad = "Ocupada";
    setHabitaciones(habitacionesPagadas);

    setReservaActiva(null);
    alert("¡Pago Exitoso!");
    localStorageHabitaciones(habitacionesPagadas);
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
      {
        reservaActiva !== null && (
          <ReservacionHabitacion
            key={reservaActiva}
            nombre={habitaciones[reservaActiva].nombre}
            precio={habitaciones[reservaActiva].precio}
            cerrarModal={cerrarModal}
            verificarPago={verificarPago}
          > </ReservacionHabitacion>
        )
      }
    </section>

  )
}

export default App
