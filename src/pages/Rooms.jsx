import React from 'react'
import { Button } from '../components/ui/button'

const rooms = [
  {
    id: 1,
    name: 'Habitación Estándar',
    description: 'Perfecta para viajeros individuales o parejas.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 100
  },
  {
    id: 2,
    name: 'Suite de Lujo',
    description: 'Espaciosa suite con vistas panorámicas.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 250
  },
  {
    id: 3,
    name: 'Villa Familiar',
    description: 'Ideal para familias o grupos de amigos.',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 400
  }
]

const Rooms = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestras Habitaciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${room.price}/noche</span>
                <Button>Reservar</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rooms