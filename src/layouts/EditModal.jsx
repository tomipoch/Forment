import React, { useState } from 'react';

const EditModal = ({ item, onSave, onClose }) => {
  const [formData, setFormData] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 px-4 sm:px-0">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Editar Datos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Primer Nombre', name: 'nombre1' },
              { label: 'Segundo Nombre', name: 'nombre2' },
              { label: 'Apellido Paterno', name: 'apellido1' },
              { label: 'Apellido Materno', name: 'apellido2' },
              { label: 'Rut', name: 'rut', maxLength: 10 },
              { label: 'Edad', name: 'edad', type: 'number' },
              { label: 'Ayuda Técnica', name: 'ayudaTecnica' },
              { label: 'Talla', name: 'talla' },
              { label: 'Cantidad', name: 'cantidad', type: 'number' },
              { label: 'Centro de Salud', name: 'centroDeSalud' },
            ].map(({ label, name, maxLength, type }) => (
              <div key={name}>
                <label className="block text-lg font-medium text-gray-700">{label}</label>
                <input
                  type={type || 'text'}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  maxLength={maxLength}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
