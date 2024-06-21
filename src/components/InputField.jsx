import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de campo de entrada reutilizable
 * @param {string} label - La etiqueta del campo
 * @param {string} name - El nombre del campo
 * @param {string} value - El valor del campo
 * @param {function} onChange - Función para manejar cambios en el campo
 * @param {string} type - Tipo de entrada (texto, número, etc.)
 * @param {number} maxLength - Longitud máxima permitida
 * @param {string} helperText - Texto de ayuda adicional
 */
const InputField = ({ label, name, value, onChange, type = 'text', maxLength, helperText }) => {
  return (
    <div>
      <label className="block text-lg font-medium text-gray-700">
        {label} {helperText && <span className="text-gray-500 text-sm">({helperText})</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg sm:text-lg p-2"
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  helperText: PropTypes.string,
};

export default InputField;
