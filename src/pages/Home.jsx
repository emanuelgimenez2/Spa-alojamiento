import React from 'react'
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '../components/ui/Card'
import { Button } from '../components/ui/button'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  }

  const features = [
    { 
      title: "Habitaciones de Lujo", 
      description: "Disfruta de nuestras espaciosas y elegantes habitaciones con vistas impresionantes.",
      icon: "🏨"
    },
    { 
      title: "Restaurante Gourmet", 
      description: "Deléitate con nuestra exquisita cocina preparada por chefs de renombre.",
      icon: "🍽️"
    },
    { 
      title: "Spa y Bienestar", 
      description: "Relájate y rejuvenece en nuestro spa de clase mundial con tratamientos exclusivos.",
      icon: "💆‍♂️"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <Slider {...settings}>
          <div>
            <div className="h-[90vh] bg-cover bg-center flex items-center" 
                 style={{backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'}}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="container mx-auto px-4 relative z-10 text-white">
                <h1 className="text-5xl font-bold mb-4">Bienvenido a AlojamientoSPA</h1>
                <p className="text-xl mb-8">Descubre el lujo y la comodidad en nuestro exclusivo complejo</p>
                <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Reserva ahora
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[90vh] bg-cover bg-center flex items-center" 
                 style={{backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'}}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="container mx-auto px-4 relative z-10 text-white">
                <h1 className="text-5xl font-bold mb-4">Experiencias Inolvidables</h1>
                <p className="text-xl mb-8">Crea recuerdos duraderos en nuestro paraíso tropical</p>
                <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Explora nuestras ofertas
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nuestras Características
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div
           
          >
            <h2 className="text-4xl font-bold mb-4">¿Listo para una experiencia inolvidable?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Reserva ahora y obtén un 15% de descuento en tu primera estancia</p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Reserva con descuento
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </section>
    </div>
  )
}

export default Home