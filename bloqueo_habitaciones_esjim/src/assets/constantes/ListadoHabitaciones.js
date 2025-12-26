import { estado_habitaciones } from "./EstadoHabitaciones";

export const listado_habitaciones = [
    {
        id: 1,
        nombre: "Habitación compartida",
        precio: "500.000",
        disponibilidad: estado_habitaciones.RESERVADO,
        descripcion: "Habitación con lindas vistas, cerca a la escuela de la policía"
    },
    {
        id: 2,
        nombre: "Suite Ejecutiva",
        precio: "850.000",
        disponibilidad: estado_habitaciones.OCUPADO,
        descripcion: "Suite amplia con escritorio y wifi de alta velocidad"
    },
    {
        id: 3,
        nombre: "Cuarto Minimalista",
        precio: "350.000",
        disponibilidad: estado_habitaciones.DISPONIBLE,
        descripcion: "Espacio tranquilo y funcional para estancias cortas"
    },
    {
        id: 4,
        nombre: "Apartamento Estudio",
        precio: "650.000",
        disponibilidad: estado_habitaciones.RESERVADO,
        descripcion: "Incluye cocina pequeña y baño privado"
    },
    {
        id: 5,
        nombre: "Habitación Familiar",
        precio: "900.000",
        disponibilidad: estado_habitaciones.OCUPADO,
        descripcion: "Dos camas dobles y balcón con vista al parque"
    },
    {
        id: 6,
        nombre: "Ático Moderno",
        precio: "1.200.000",
        disponibilidad: estado_habitaciones.RESERVADO,
        descripcion: "Diseño contemporáneo con terraza privada"
    }
];