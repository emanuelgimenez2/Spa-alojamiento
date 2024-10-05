import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Button } from '../components/ui/button'

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 md:w-5 md:h-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Home = () => {
  const carouselItems = [
    {
      image: '/src/assets/spa1.jpg',
      title: 'Bienvenido a AlojamientoSPA',
      description: 'Descubre el lujo y la comodidad en nuestro exclusivo complejo',
      buttonText: 'Reserva ahora'
    },
    {
      image: '/src/assets/spa2.jpg',
      title: 'Experiencias Inolvidables',
      description: 'Crea recuerdos duraderos en nuestro paraíso tropical',
      buttonText: 'Explora nuestras ofertas'
    },
    {
      image: '/src/assets/spa3.jpg',
      title: 'Relájate y Rejuvenece',
      description: 'Disfruta de nuestros tratamientos de spa de clase mundial',
      buttonText: 'Ver tratamientos'
    },
    {
      image: '/src/assets/spa4.jpg',
      title: 'Gastronomía Excepcional',
      description: 'Deléitate con nuestra cocina gourmet y vistas espectaculares',
      buttonText: 'Descubre nuestro menú'
    }
  ]

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

  const testimonials = [
    {
      name: "María García",
      role: "Huésped frecuente",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      quote: "Mi estancia en AlojamientoSPA fue simplemente mágica. El servicio, las instalaciones y la atención al detalle superaron todas mis expectativas.",
      rating: 5
    },
    {
      name: "Juan Pérez",
      role: "Viajero de negocios",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Como viajero frecuente, puedo decir que AlojamientoSPA ofrece una experiencia única. El equilibrio perfecto entre lujo y comodidad.",
      rating: 4
    },
    {
      name: "Ana Martínez",
      role: "Luna de miel",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Elegimos AlojamientoSPA para nuestra luna de miel y fue la mejor decisión. Momentos inolvidables en un entorno paradisíaco.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <Carousel 
          infiniteLoop 
          autoPlay 
          interval={5000} 
          showStatus={false} 
          showThumbs={false}
          showArrows={true}
          showIndicators={true}
        >
          {carouselItems.map((item, index) => (
            <div key={index}>
              <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center flex items-center" 
                   style={{backgroundImage: `url("${item.image}")`}}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10 text-white">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">{item.title}</h1>
                  <p className="text-lg sm:text-xl mb-4 sm:mb-8">{item.description}</p>
                  <Button variant="secondary" size="lg" className="text-sm sm:text-base">
                    {item.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      
      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Nuestras Características
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Lo que dicen nuestros huéspedes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{testimonial.role}</p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-gray-700 italic text-sm sm:text-base">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para una experiencia inolvidable?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">Reserva ahora y obtén un 15% de descuento en tu primera estancia</p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-sm sm:text-base"
          >
            Reserva con descuento
          </Button>
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </section>
    </div>
  )
}

export default Home