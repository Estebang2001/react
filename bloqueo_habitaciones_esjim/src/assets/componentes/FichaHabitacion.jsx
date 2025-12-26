
export const FichaHabitacion = ({children, nombre, precio, disponibilidad, descripcion, checkDisponibilidad}) => {
    const disponibilidadActualizada = disponibilidad;
    const handleClick = () => {
        const disponibilidadActualizada = checkDisponibilidad(disponibilidad);
    }
    
    return (
        <div className="ej-ficha-habitacion">
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <h3>{children}</h3>
            <button onClick={handleClick}>
                <h1>{disponibilidadActualizada}</h1>
            </button>
        </div>
    )
}