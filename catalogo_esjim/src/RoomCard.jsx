import { useState } from 'react'

export function RoomCard({ title, price, location,
    isAvailable, children }) {
    const [isFavorite, setFavorite] = useState(false)

    // Logica de boton de favorito
    const text = isFavorite ? '❤️' : '🤍';
    const buttonClassName = isFavorite
        ? 'aj-favoriteCard-button is-following'
        : 'aj-favoriteCard-button'
    const handleClick = () => {
        setFavorite(!isFavorite)
    }
    return (
        <section className='aj-hotelCard'>
            <h1 className='aj-hotelTitle'>{title}</h1>
            <p className='aj-hotelPrice'>${price}</p>
            <p className='aj-hotelLocation'>{location}</p>
            <p className='aj-hotelAvailable'>
                {isAvailable ? 'Disponible' : 'No disponible'}
            </p>
            {children}
            <button className={buttonClassName} onClick={handleClick}>
                <span className='aj-favoriteCard-text'>{text}</span>
            </button>
        </section>
    )
}