import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@shadcn/ui'; // Importar ShadCN-UI

const testimonials = [
  {
    name: 'Juan Pérez',
    testimonial: 'Este servicio es excelente, nunca había tenido una experiencia igual. ¡Altamente recomendado!',
    date: 'Septiembre 2024',
    image: 'https://randomuser.me/api/portraits/men/32.jpg', // Imagen de perfil
  },
  {
    name: 'Ana Martínez',
    testimonial: 'La atención al cliente es maravillosa y los productos superan las expectativas.',
    date: 'Agosto 2024',
    image: 'https://randomuser.me/api/portraits/women/65.jpg', // Imagen de perfil
  },
  {
    name: 'Carlos González',
    testimonial: 'Realmente me impresionó la calidad y el compromiso con los detalles.',
    date: 'Julio 2024',
    image: 'https://randomuser.me/api/portraits/men/45.jpg', // Imagen de perfil
  },
];

const TestimonialCard = ({ name, testimonial, date, image }) => (
  <Card className="mb-6 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
    <CardHeader className="flex items-center">
      <img 
        src={image} 
        alt={`${name} avatar`} 
        className="w-16 h-16 rounded-full border-4 border-indigo-500"
      />
      <div className="ml-4">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </CardHeader>
    <CardBody>
      <p className="text-lg italic text-gray-700">"{testimonial}"</p>
    </CardBody>
  </Card>
);

const Testimonials = () => (
  <div className="container mx-auto p-8">
    <h2 className="text-4xl font-bold text-center mb-8">Testimonios</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          testimonial={testimonial.testimonial}
          date={testimonial.date}
          image={testimonial.image}
        />
      ))}
    </div>
  </div>
);

export default Testimonials;
