import './App.css'
import { RoomCard } from './RoomCard.jsx'


const rooms = [
  { id: 1, title: 'Habitación Suite San Pablo', price: 450000, location: 'A 5 min de ESJIM', isAvailable: true },
  { id: 2, title: 'Cuarto Compartido Centro', price: 300000, location: 'Cerca al parque principal', isAvailable: false },
];

function App() {

  return (
    <section className='App'>
      {
        rooms.map(({ id, title, price, location, isAvailable }) => (
          <RoomCard
            key={id}
            title={title}
            price={price}
            location={location}
            isAvailable={isAvailable}
            children='Aloja Esjim'
          >
          </RoomCard>
        ))
      }
    </section>
  )
}

export default App
