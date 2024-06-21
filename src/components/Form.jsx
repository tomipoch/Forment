import React, { useState } from 'react';
import { addUser, uploadFile } from '../firebase';
import Popup from './Popup';
import InputField from './InputField';
import FileInput from './FileInput';
import DOMPurify from 'dompurify';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre1: '',
    nombre2: '',
    apellido1: '',
    apellido2: '',
    rut: '',
    edad: '',
    ayudaTecnica: '',
    talla: '',
    cantidad: '',
    centroDeSalud: '',
    fecha: new Date().toISOString().slice(0, 10),
  });

  const [files, setFiles] = useState([null, null]); // Array para dos archivos
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateRUT = (rut) => {
    const rutPattern = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
    return rutPattern.test(rut);
  };

  const validateEdad = (edad) => {
    return edad > 0 && edad < 120;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'talla' ? sanitizedValue.toUpperCase() : sanitizedValue,
    }));

    if (name === 'rut' && !validateRUT(sanitizedValue)) {
      setErrorMessage('RUT no es válido. Asegúrese de incluir el guion y no usar puntos.');
    } else if (name === 'edad' && !validateEdad(sanitizedValue)) {
      setErrorMessage('Edad no es válida. Debe estar entre 1 y 120 años.');
    } else {
      setErrorMessage('');
    }
  };

  const handleFileChange = (index, e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      const newFiles = [...files];
      newFiles[index] = selectedFile;
      setFiles(newFiles);
      setErrorMessage('');
    } else {
      setErrorMessage('Cada archivo debe ser menor a 5 MB');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateRUT(formData.rut)) {
      setErrorMessage('RUT no es válido.');
      return;
    }
    if (!validateEdad(formData.edad)) {
      setErrorMessage('Edad no es válida.');
      return;
    }

    setLoading(true);
    console.log('Enviando datos del formulario:', formData);

    try {
      const folderName = `${formData.rut}_${Date.now()}`;
      const fileURLs = await Promise.all(files.map(file => file ? uploadFile(file, folderName) : Promise.resolve(null)));

      console.log('File URLs:', fileURLs);

      await addUser({
        ...formData,
        fileURLs,
      });

      console.log('Datos enviados exitosamente a Firestore');
      setShowPopup(true);
      setLoading(false);
    } catch (error) {
      console.error('Error al enviar datos:', error);
      setErrorMessage(`Hubo un error al enviar el formulario: ${error.message}`);
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({
      nombre1: '',
      nombre2: '',
      apellido1: '',
      apellido2: '',
      rut: '',
      edad: '',
      ayudaTecnica: '',
      talla: '',
      cantidad: '',
      centroDeSalud: '',
      fecha: new Date().toISOString().slice(0, 10),
    });
    setFiles([null, null]);
  };

  const centrosDeSalud = [
    'Cesfam Magisterio', 'Cesfam Faustino Gonzalez', 'Cesfam Carlos Trupp',
    'Cesfam Julio Contardo', 'Cesfam Las Americas', 'Cesfam Astaburuaga',
    'Cesfam La Florida', 'Cesfam Bicentenario', 'Cecosf Brilla el Sol',
    'Cecosf Carlos Trupp', 'Cecosf Nuevo Horizonte', 'Posta Mercedes',
  ];

  return (
    <form className="space-y-8 bg-white p-8 max-w-4xl mx-auto" onSubmit={handleSubmit} aria-label="Formulario de encuesta">
      {showPopup && <Popup message="¡El formulario se ha enviado correctamente!" onClose={closePopup} />}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" aria-live="assertive">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {errorMessage}</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'Primer Nombre', name: 'nombre1' },
          { label: 'Segundo Nombre', name: 'nombre2' },
          { label: 'Apellido Paterno', name: 'apellido1' },
          { label: 'Apellido Materno', name: 'apellido2' },
          { label: 'RUT', name: 'rut', maxLength: 10, helperText: 'Con guión y sin puntos' },
          { label: 'Edad', name: 'edad', type: 'number' },
          { label: 'Ayuda Técnica', name: 'ayudaTecnica' },
          { label: 'Talla', name: 'talla' },
          { label: 'Cantidad', name: 'cantidad', type: 'number' },
        ].map(({ label, name, maxLength, type, helperText }) => (
          <InputField
            key={name}
            label={label}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            type={type}
            maxLength={maxLength}
            helperText={helperText}
          />
        ))}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Centro de Salud
          </label>
          <select
            name="centroDeSalud"
            value={formData.centroDeSalud}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg sm:text-lg p-2"
            aria-label="Centro de Salud"
          >
            <option value="">Selecciona un centro de salud</option>
            {centrosDeSalud.map((centro) => (
              <option key={centro} value={centro}>
                {centro}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-lg font-medium text-gray-700">
            Subir Archivos <span className="text-gray-500 text-sm">(Máximo 5MB cada archivo)</span>
          </label>
          <div className="mt-1 flex space-x-4">
            {[0, 1].map(index => (
              <FileInput
                key={index}
                index={index}
                file={files[index]}
                onFileChange={handleFileChange}
              />
            ))}
          </div>
        </div>
        <button type="submit" disabled={loading} className="md:col-span-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  );
};

export default Form;

