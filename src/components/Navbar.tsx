import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Sesión cerrada correctamente');
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md sticky top-0 z-10">
      <div className="px-6 py-3 flex justify-end">
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm bg-indigo-800 rounded-md hover:bg-indigo-700 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;