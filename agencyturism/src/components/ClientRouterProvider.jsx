// src/components/ClientRouterProvider.jsx
"use client";

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function ClientRouterProvider({ children }) {
  return <Router>{children}</Router>;
}
