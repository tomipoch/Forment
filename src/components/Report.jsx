import React from 'react';

const Report = ({ data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full bg-white border-collapse">
        <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm">
          <tr>
            <th className="py-2 px-4 text-center">Nombre Completo</th>
            <th className="py-2 px-4 text-center">RUT</th>
            <th className="py-2 px-4 text-center">Edad</th>
            <th className="py-2 px-4 text-center">Ayuda Técnica</th>
            <th className="py-2 px-4 text-center">Centro de Salud</th>
            <th className="py-2 px-4 text-center">Fecha</th>
            <th className="py-2 px-4 text-center">Talla</th>
            <th className="py-2 px-4 text-center">Cantidad</th>
            <th className="py-2 px-4 text-center">Archivo</th>
            <th className="py-2 px-4 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="border px-4 py-2 text-center whitespace-nowrap">{`${item.nombre1} ${item.nombre2} ${item.apellido1} ${item.apellido2}`}</td>
              <td className="border px-4 py-2 text-center whitespace-nowrap">{item.rut}</td>
              <td className="border px-4 py-2 text-center">{item.edad}</td>
              <td className="border px-4 py-2 text-center">{item.ayudaTecnica}</td>
              <td className="border px-4 py-2 text-center">{item.centroDeSalud}</td>
              <td className="border px-4 py-2 text-center whitespace-nowrap">{item.fecha}</td>
              <td className="border px-4 py-2 text-center">{item.talla}</td>
              <td className="border px-4 py-2 text-center">{item.cantidad}</td>
              <td className="border px-4 py-2 text-center">
                {item.fileURLs && item.fileURLs.length > 0 ? item.fileURLs.map((fileURL, fileIndex) => (
                  <div key={fileIndex}>
                    <a href={fileURL} className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">Descargar</a>
                  </div>
                )) : 'No disponible'}
              </td>
              <td className="border px-4 py-2 text-center">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
