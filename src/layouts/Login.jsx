import React, { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import { FaWpforms, FaArrowLeft } from 'react-icons/fa';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/reporte'); // Redirigir a la página de reporte
    } catch (error) {
      setErrorMessage('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="absolute top-8 flex items-center text-white">
        <FaWpforms className="h-8 w-8 mr-2" />
        <h1 className="text-3xl font-bold">Forment</h1>
      </div>
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-3xl relative mt-16">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-cyan-600 to-blue-600 focus:outline-none"
        >
          <FaArrowLeft className="h-4 w-4" />
        </button>
        <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Iniciar Sesión
        </h1>
        {errorMessage && (
          <div className="mb-4 text-red-600">
            {errorMessage}
          </div>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg sm:text-lg p-2"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Contraseña</label>
            <div className="relative mt-1">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg sm:text-lg p-2"
                aria-required="true"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 focus:outline-none"
                aria-label={passwordVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {passwordVisible ? (
                  <Eye className="h-6 w-6 text-gray-500" />
                ) : (
                  <EyeOff className="h-6 w-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>
          <div className="text-right">
            <button 
              type="submit" 
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{ outline: 'none' }} // Asegura que el outline esté desactivado
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
