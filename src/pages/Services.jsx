import React from 'react'

const services = [
  {
    id: 1,
    name: 'Spa y Bienestar',
    description: 'Relájate con nuestros tratamientos de spa y masajes.',
    icon: '🧖‍♀️'
  },
  {
    id: 2,
    name: 'Restaurante Gourmet',
    description: 'Disfruta de la mejor gastronomía local e internacional.',
    icon: '🍽️'
  },
  {
    id: 3,
    name: 'Gimnasio',
    description: 'Mantén tu rutina de ejercicios en nuestro gimnasio totalmente equipado.',
    icon: '🏋️‍♀️'
  },
  {
    id: 4,
    name: 'Piscina Infinita',
    description: 'Sumérgete en nuestra impresionante piscina con vistas al océano.',
    icon: '🏊‍♀️'
  },
  {
    id: 5,
    name: 'Excursiones',
    description: 'Explora la belleza natural de la zona con nuestras excursiones guiadas.',
    icon: '🧭'
  },
  {
    id: 6,
    name: 'Servicio de Habitaciones 24/7',
    description: 'Disfruta de nuestro servicio de habitaciones las 24 horas del día.',
    icon: '🛎️'
  }
]

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services