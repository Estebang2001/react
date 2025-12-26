
export const FichaHabitacion = ({children, nombre, precio, disponibilidad, descripcion}) => {
    return (
        <div className="ej-ficha-habitacion">
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <h3>{children}</h3>
      
        </div>
    )
}