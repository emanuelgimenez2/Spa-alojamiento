import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AlojamientoSPA</h3>
            <p className="text-sm">Disfruta de una experiencia única en nuestro complejo de alojamiento.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Inicio</a></li>
              <li><a href="#" className="text-sm hover:underline">Habitaciones</a></li>
              <li><a href="#" className="text-sm hover:underline">Servicios</a></li>
              <li><a href="#" className="text-sm hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <p className="text-sm">123 Calle Principal, Ciudad, País</p>
            <p className="text-sm">Teléfono: +1 234 567 890</p>
            <p className="text-sm">Email: info@alojamientospa.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          © 2024 AlojamientoSPA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer