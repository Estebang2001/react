export const ReservacionHabitacion = ({ nombre, precio, cerrarModal, verificarPago }) => {
    const handleClick = () => {
        cerrarModal()
    }

    const paymentClick = () => {
        verificarPago()
    }

    return (
        <div className="ej-reservacion-habitacion">
            <h1>{nombre}</h1>
            <h1>${precio}</h1>
            <h2>Reservación de habitación</h2>
            <input id="nombre" type="text" placeholder="Nombre" />
            <input id="apellido" type="text" placeholder="Apellido" />
            <h2>Seleccione un metodo de pago</h2>
            <select>
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta</option>
                <option value="pse">PSE</option>
                <option value="nequi">Nequi</option>
            </select>

            <button onClick={paymentClick}>💲Pagar</button>
            <button onClick={handleClick}> ◀️ Volver</button>
        </div>
    )
}
