import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';

const Inicio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-8" role="main">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">Formulario de Usuario</h1>
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inicio;
