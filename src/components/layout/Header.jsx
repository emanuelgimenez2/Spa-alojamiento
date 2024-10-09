import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png' // Asegúrate de que la ruta sea correcta

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const MenuItem = ({ to, children }) => (
    <li className="mb-2 md:mb-0">
      <Link to={to}>
        <Button variant="ghost" className="w-full md:w-auto" onClick={() => setIsMenuOpen(false)}>
          {children}
        </Button>
      </Link>
    </li>
  )

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Aquí se agrega el logo */}
          <div className="flex items-center">
            <img src={logo} alt="El Mangrullo Logo" className="h-20 mr-2" />
            
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-2 items-center">
              <MenuItem to="/">Inicio</MenuItem>
              <MenuItem to="/rooms">Habitaciones</MenuItem>
              <MenuItem to="/services">Servicios</MenuItem>
              <MenuItem to="/contact">Contacto</MenuItem>
              <li><Button className="ml-2">Reservar</Button></li>
              <li>
                <Button variant="outline" onClick={toggleDarkMode} className="ml-2">
                  {darkMode ? '☀️' : '🌙'}
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <MenuItem to="/">Inicio</MenuItem>
              <MenuItem to="/rooms">Habitaciones</MenuItem>
              <MenuItem to="/services">Servicios</MenuItem>
              <MenuItem to="/contact">Contacto</MenuItem>
              <li><Button className="w-full">Reservar</Button></li>
              <li>
                <Button variant="outline" onClick={toggleDarkMode} className="w-full mt-2">
                  {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
