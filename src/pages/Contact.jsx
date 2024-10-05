import React from 'react'
import { Button } from '../components/ui/button'
import LocationMap from '../components/layout/LocationMap'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contáctanos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <Button type="submit" className="w-full">Enviar mensaje</Button>
            </div>
          </form>
        </div>
        <div>
          <LocationMap />
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Dirección</h3>
              <p className="text-gray-600">Calle Gran Vía, 84, 28013 Madrid, España</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-600">+34 915 89 65 89</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@alojamientospa.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact