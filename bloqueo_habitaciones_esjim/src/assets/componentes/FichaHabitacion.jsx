
export const FichaHabitacion = ({ index, children, nombre, precio, disponibilidad, actualizacionDisponibilidad }) => {
    const handleClick = () => {
        actualizacionDisponibilidad(index)
    }
    return (
        <div className="ej-ficha-habitacion">
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <h3>{children}</h3>
            <button onClick={handleClick}>{disponibilidad}</button>
        </div>
    )
}