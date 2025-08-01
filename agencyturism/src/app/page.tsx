'use client'

import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '../App.css'
import '../styles/animations.css'

// Componentes principales
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AdminPanel from '../components/admin/AdminPanel'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/admin/*" element={<AdminPanel />} />
              <Route path="/" element={
                <>
                  <Navbar />
                  <Hero />
                  <Destinations />
                  <About />
                  <Contact />
                  <Footer />
                </>
              } />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  )
}

