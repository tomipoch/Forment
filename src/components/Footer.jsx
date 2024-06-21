import React from 'react';
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} Sistema de Encuesta. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/tomipoch" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="mailto:ft.fernandotomas@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Correo Electrónico">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.instagram.com/tomaspobletech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tomipoch/?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=cl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
