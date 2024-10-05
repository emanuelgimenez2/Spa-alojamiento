import React from 'react'
import { Card } from '../ui/Card'

const LocationMap = () => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.978699548065!2d-57.94118976864001!3d-30.972831674470314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944f82d221fe2841%3A0x0!2zMzDCsDU4JzIxLjAiUyA1N8KwNTYnMzAuOSJX!5e0!3m2!1ses!2ses!4v1696328368743!5m2!1ses!2ses" 
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Card>
  )
}

export default LocationMap