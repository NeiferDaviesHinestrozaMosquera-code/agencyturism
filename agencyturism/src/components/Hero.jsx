import React, { useRef, useEffect } from 'react'
import { ChevronDown, Play } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        heroRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Fondo con imagen */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/colombia-destinations.jpg')`
        }}
      />
      
      {/* Overlay con contenido */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            Descubre la
            <span className="block text-yellow-400">Magia de Colombia</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 fade-in-up">
            Paisajes únicos, cultura vibrante y experiencias inolvidables te esperan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              Explorar Destinos
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg rounded-lg transition-all duration-300 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Ver Video
            </button>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
      
      {/* Overlay de gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  )
}

export default Hero

