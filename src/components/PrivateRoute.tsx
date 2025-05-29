import { Navigate, Outlet  } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useState } from 'react';

// Controlar el acceso a rutas/components específicos basado en autenticación
// Se ejecuta cuando cambias de ruta
export default function PrivateRoute() {
  const token = localStorage.getItem('jwtToken');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  if(!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="min-h-screen flex">
      {/* Sidebar con botón integrado */}
      <Sidebar 
        collapsed={sidebarCollapsed}
        toggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      {/* Contenedor principal */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}