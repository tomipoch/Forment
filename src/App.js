import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './components/PrivateRoute';

const Inicio = lazy(() => import('./layouts/Inicio'));
const Reporte = lazy(() => import('./layouts/Reporte'));
const Login = lazy(() => import('./layouts/Login'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/reporte"
                element={
                  <PrivateRoute>
                    <Reporte />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
