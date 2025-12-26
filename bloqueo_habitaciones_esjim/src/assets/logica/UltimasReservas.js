export const localStorageHabitaciones = (habitacionesActualizadas) => {
    window.localStorage.setItem('habitaciones', JSON.stringify(habitacionesActualizadas))
}