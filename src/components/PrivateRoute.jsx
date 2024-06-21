import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const sessionDuration = 2 * 60 * 60 * 1000; // 2 horas en milisegundos
        const sessionExpiryTime = new Date(user.metadata.lastSignInTime).getTime() + sessionDuration;
        const currentTime = new Date().getTime();

        if (currentTime < sessionExpiryTime) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          auth.signOut(); // Cerrar sesión si ha expirado
        }
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Puedes mostrar un spinner de carga aquí
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
