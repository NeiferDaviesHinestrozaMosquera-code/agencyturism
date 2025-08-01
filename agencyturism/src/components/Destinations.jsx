import React, { useState } from 'react'
import { MapPin, Star, Calendar, Users } from 'lucide-react'

const Destinations = () => {
  const [activeDestination, setActiveDestination] = useState(0)
  
  const destinations = [
    {
      id: 1,
      name: "Cartagena de Indias",
      description: "Ciudad amurallada llena de historia, cultura y arquitectura colonial única.",
      image: "/images/cartagena.jpg",
      price: "$299",
      duration: "4 días",
      rating: 4.9,
      highlights: ["Ciudad Amurallada", "Playas del Caribe", "Gastronomía Local"]
    },
    {
      id: 2,
      name: "Eje Cafetero",
      description: "Paisajes montañosos, plantaciones de café y la cultura paisa más auténtica.",
      image: "/images/coffee-region.jpg",
      price: "$249",
      duration: "5 días",
      rating: 4.8,
      highlights: ["Plantaciones de Café", "Valle de Cocora", "Pueblos Patrimonio"]
    },
    {
      id: 3,
      name: "Valle de Cocora",
      description: "Hogar de las palmas de cera más altas del mundo y paisajes únicos.",
      image: "/images/cocora-valley.jpg",
      price: "$199",
      duration: "3 días",
      rating: 4.9,
      highlights: ["Palmas de Cera", "Senderismo", "Naturaleza Exuberante"]
    },
    {
      id: 4,
      name: "Tayrona",
      description: "Parque nacional con playas paradisíacas y selva tropical exuberante.",
      image: "/images/tayrona.jpg",
      price: "$199",
      duration: "3 días",
      rating: 4.7,
      highlights: ["Playas Vírgenes", "Selva Tropical", "Cultura Indígena"]
    }
  ]

  const currentDestination = destinations[activeDestination]

  return (
    <section id="destinations" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Destinos <span className="text-yellow-500">Mágicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora los lugares más increíbles de Colombia con nuestras experiencias únicas y personalizadas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Galería de destinos */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="grid grid-cols-2 gap-4 h-96">
                {destinations.map((destination, index) => (
                  <div
                    key={destination.id}
                    onClick={() => setActiveDestination(index)}
                    className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                      activeDestination === index 
                        ? 'ring-4 ring-yellow-500 scale-105' 
                        : 'hover:scale-102'
                    }`}
                  >
                    <img 
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-white">
                      <h4 className="font-semibold text-sm">{destination.name}</h4>
                      <p className="text-xs opacity-90">{destination.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controles de navegación */}
            <div className="flex justify-center mt-6 space-x-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDestination(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeDestination === index 
                      ? 'bg-yellow-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Información del destino activo */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={currentDestination.image}
                alt={currentDestination.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">{currentDestination.name}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{currentDestination.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{currentDestination.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {currentDestination.name}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {currentDestination.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Destacados del viaje:</h4>
                <ul className="space-y-2">
                  {currentDestination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <span className="text-3xl font-bold text-yellow-600">
                    {currentDestination.price}
                  </span>
                  <span className="text-gray-500 ml-2">por persona</span>
                </div>
                
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destinations

