import { Link, useLocation } from 'react-router-dom';
import type { IconType } from 'react-icons';
import {
    FiHome, FiSettings,
    FiCalendar, FiMail, FiChevronLeft, FiChevronRight,
    FiWatch,
    FiUsers,
    FiFolder
} from 'react-icons/fi';
import { useEffect, useState } from 'react';

type MenuItem = {
    path: string;
    name: string;
    icon: IconType;
};

const menuItems: MenuItem[] = [
    { path: '/', name: 'Inicio', icon: FiHome },
    { path: '/projects', name: 'Proyectos', icon: FiFolder },
    { path: '/clients', name: 'Clientes', icon: FiUsers },
    { path: '/calendar', name: 'Calendario', icon: FiCalendar },
    { path: '/messages', name: 'Mensajes', icon: FiMail },
    { path: '/settings', name: 'Configuración', icon: FiSettings },
];

const Sidebar = ({ collapsed, toggleCollapse }: {
    collapsed: boolean;
    toggleCollapse: () => void;
}) => {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(intervalo); // Limpia el intervalo al desmontar
    }, []);
    const location = useLocation();

    return (
        <div className={`bg-gray-800 text-white h-screen sticky top-0 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'
            }`}>
            <div className="h-full flex flex-col">
                {/* Encabezado del Sidebar con botón */}
                <div className={`p-4 border-b border-gray-700 flex ${collapsed ? 'justify-center' : 'justify-between items-center'
                    }`}>
                    {!collapsed && <><FiWatch /><h1>{hora.toLocaleTimeString()}</h1></>}
                    <button
                        onClick={toggleCollapse}
                        className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-700"
                        aria-label={collapsed ? 'Expandir menú' : 'Colapsar menú'}
                    >
                        {collapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
                    </button>
                </div>

                {/* Menú principal */}
                <div className="flex-1 overflow-y-auto py-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center p-3 mx-2 rounded-lg mb-2 transition-colors ${location.pathname === item.path
                                    ? 'bg-indigo-600 text-white'
                                    : 'hover:bg-gray-700 text-gray-300'
                                } ${collapsed ? 'justify-center' : 'px-4'
                                }`}
                            title={collapsed ? item.name : undefined}
                        >
                            <item.icon className={collapsed ? '' : 'mr-3'} />
                            {!collapsed && <span>{item.name}</span>}
                        </Link>
                    ))}
                </div>

                {/* Pie del Sidebar (opcional) */}
                {!collapsed && (
                    <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
                        Versión 1.0.0
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;