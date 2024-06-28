import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Asegúrate de importar `auth` correctamente
import { FaWpforms } from 'react-icons/fa'; // Importa el ícono de formulario de react-icons

const Header = ({ showLoginButton = true, showLogoutButton = false }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaWpforms className="h-6 w-6 text-white mr-2" />
          <h1 className="text-white text-2xl font-bold">Forment</h1>
        </div>
        <div className="flex items-center">
          {showLoginButton && (
            <button
              onClick={() => navigate('/login')}
              className="text-white text-lg font-medium bg-transparent px-4 py-2 rounded-md hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar Sesión
            </button>
          )}
          {showLogoutButton && (
            <button
              onClick={handleLogout}
              className="text-white text-lg font-medium bg-transparent px-4 py-2 rounded-md hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
