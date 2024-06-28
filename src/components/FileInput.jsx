import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de entrada de archivo reutilizable
 * @param {number} index - Índice del archivo
 * @param {object} file - Archivo seleccionado
 * @param {function} onFileChange - Función para manejar cambios en el archivo
 */
const FileInput = ({ index, file, onFileChange }) => {
  return (
    <div className="relative">
      <input
        type="file"
        onChange={(e) => onFileChange(index, e)}
        className="hidden"
        id={`file_input_${index}`}
      />
      <label htmlFor={`file_input_${index}`} className="flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
        Seleccionar archivo {index + 1}
      </label>
      {file && <span className="ml-2 text-lg">{file.name}</span>}
    </div>
  );
};

FileInput.propTypes = {
  index: PropTypes.number.isRequired,
  file: PropTypes.object,
  onFileChange: PropTypes.func.isRequired,
};

export default FileInput;
