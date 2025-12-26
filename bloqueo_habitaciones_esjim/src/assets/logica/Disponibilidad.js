import { estado_habitaciones } from "../constantes/EstadoHabitaciones";

export const checkDisponibilidad = (disponibilidad) => {
    switch (disponibilidad) {
        case estado_habitaciones.DISPONIBLE:
            return estado_habitaciones.DISPONIBLE;
        case estado_habitaciones.RESERVADO:
            return estado_habitaciones.RESERVADO;
        case estado_habitaciones.OCUPADO:
            return estado_habitaciones.OCUPADO;
        default:
            return "Desconocido";
    }
}
