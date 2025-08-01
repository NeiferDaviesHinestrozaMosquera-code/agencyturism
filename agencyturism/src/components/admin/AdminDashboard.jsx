import React from 'react'
import { BarChart3, Users, MapPin, Calendar, DollarSign, TrendingUp } from 'lucide-react'

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Reservas Totales',
      value: '1,234',
      change: '+12%',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'Ingresos del Mes',
      value: '$45,678',
      change: '+8%',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Clientes Activos',
      value: '892',
      change: '+15%',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Destinos Populares',
      value: '24',
      change: '+3%',
      icon: MapPin,
      color: 'bg-yellow-500'
    }
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
        <p className="text-gray-600">Bienvenido al sistema de gestión de Colombia Mágica</p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change} vs mes anterior</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reservas recientes */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Reservas Recientes</h3>
          <div className="space-y-4">
            {[
              { cliente: 'María García', destino: 'Cartagena', fecha: '2025-02-15', estado: 'Confirmada' },
              { cliente: 'Juan Pérez', destino: 'Eje Cafetero', fecha: '2025-02-20', estado: 'Pendiente' },
              { cliente: 'Ana López', destino: 'Tayrona', fecha: '2025-02-25', estado: 'Confirmada' }
            ].map((reserva, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{reserva.cliente}</p>
                  <p className="text-sm text-gray-600">{reserva.destino} - {reserva.fecha}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  reserva.estado === 'Confirmada' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {reserva.estado}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Destinos populares */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Destinos Más Populares</h3>
          <div className="space-y-4">
            {[
              { destino: 'Cartagena de Indias', reservas: 156, porcentaje: 85 },
              { destino: 'Eje Cafetero', reservas: 134, porcentaje: 72 },
              { destino: 'Parque Tayrona', reservas: 98, porcentaje: 53 },
              { destino: 'Valle de Cocora', reservas: 87, porcentaje: 47 }
            ].map((destino, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-900">{destino.destino}</span>
                  <span className="text-sm text-gray-600">{destino.reservas} reservas</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{ width: `${destino.porcentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
