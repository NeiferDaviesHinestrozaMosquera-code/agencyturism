// src/app/page.tsx
"use client";

import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import '../App.css';
import '../styles/animations.css';

// Componentes principales
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  return (
    <HelmetProvider>
      <div className="App">
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <Hero />
          <Destinations />
          <About />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}