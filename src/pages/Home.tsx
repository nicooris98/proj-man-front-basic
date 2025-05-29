import { useEffect, useState } from 'react';
import { FiUsers, FiDollarSign, FiPackage, FiCalendar } from 'react-icons/fi';

const Home = () => {
  const [stats] = useState([
    { title: 'Usuarios activos', value: '1,342', icon: <FiUsers className="text-blue-500" />, change: '+12%' },
    { title: 'Ventas hoy', value: '$8,420', icon: <FiDollarSign className="text-green-500" />, change: '+5.2%' },
    { title: 'Nuevos pedidos', value: '156', icon: <FiPackage className="text-purple-500" />, change: '+3.1%' },
    { title: 'Eventos', value: '24', icon: <FiCalendar className="text-orange-500" />, change: '-2%' }
  ]);

  const [recentActivities] = useState([
    { id: 1, user: 'Juan Pérez', action: 'Nuevo pedido #4521', time: 'Hace 5 min', icon: <FiPackage /> },
    { id: 2, user: 'María Gómez', action: 'Actualizó perfil', time: 'Hace 12 min', icon: <FiUsers /> },
    { id: 3, user: 'Carlos Ruiz', action: 'Realizó pago', time: 'Hace 25 min', icon: <FiDollarSign /> },
    { id: 4, user: 'Ana López', action: 'Creó nuevo evento', time: 'Hace 1 hora', icon: <FiCalendar /> }
  ]);

  // Simular carga de datos
  useEffect(() => {
    // Aquí iría tu llamada API real
    const timer = setTimeout(() => {
      // Datos simulados
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* Bienvenida */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800">Bienvenido de vuelta</h1>
        <p className="text-gray-600">Aquí tienes un resumen de tu actividad reciente</p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} vs ayer
                </p>
              </div>
              <div className="p-3 rounded-full bg-gray-100">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico y actividades (2 columnas) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico principal */}
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Rendimiento mensual</h2>
            <select className="border rounded-md px-3 py-1 text-sm">
              <option>Últimos 30 días</option>
              <option>Últimos 7 días</option>
              <option>Este año</option>
            </select>
          </div>
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500">Aquí iría tu gráfico (Chart.js, ApexCharts, etc.)</p>
          </div>
        </div>

        {/* Actividades recientes */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Actividad reciente</h2>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start">
                <div className="p-2 rounded-full bg-gray-100 mr-3">
                  {activity.icon}
                </div>
                <div>
                  <p className="font-medium">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-blue-600 hover:text-blue-800">
            Ver toda la actividad
          </button>
        </div>
      </div>

      {/* Tabla de últimos pedidos */}
      <div className="bg-white p-6 rounded-lg shadow overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Últimos pedidos</h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            Ver todos
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map(item => (
                <tr key={item}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{4520 + item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cliente {item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-{10 + item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${(120 + item * 20).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item % 3 === 0 ? 'bg-green-100 text-green-800' : 
                      item % 2 === 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item % 3 === 0 ? 'Completado' : item % 2 === 0 ? 'Pendiente' : 'En proceso'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;