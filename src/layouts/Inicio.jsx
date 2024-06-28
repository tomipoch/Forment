import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';

const Inicio = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-cyan-500 to-blue-500">
      <Header />
      <main className="flex-grow container mx-auto p-8" role="main">
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default Inicio;
