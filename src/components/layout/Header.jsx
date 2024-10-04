import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { ThemeContext } from '../../contexts/ThemeContext'

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary dark:text-white">AlojamientoSPA</div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/"><Button variant="ghost">Inicio</Button></Link></li>
            <li><Link to="/rooms"><Button variant="ghost">Habitaciones</Button></Link></li>
            <li><Link to="/services"><Button variant="ghost">Servicios</Button></Link></li>
            <li><Link to="/contact"><Button variant="ghost">Contacto</Button></Link></li>
            <li><Button>Reservar</Button></li>
            <li>
              <Button variant="outline" onClick={toggleDarkMode}>
                {darkMode ? '☀️' : '🌙'}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header