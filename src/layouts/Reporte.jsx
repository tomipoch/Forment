import React, { useState, useEffect, useMemo } from 'react';
import * as XLSX from 'xlsx';
import { getUsers, updateUser, deleteUser } from '../firebase';
import Report from '../components/Report';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditModal from './EditModal';

const FilterInput = ({ label, value, onChange, type = 'text', placeholder = '', name, maxLength }) => (
  <div className="mb-4">
    {label && <label htmlFor={name} className="block text-gray-700">{label}</label>}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={name}
      name={name}
      maxLength={maxLength}
      className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const FilterSelect = ({ label, value, onChange, options, name }) => (
  <div className="mb-4">
    {label && <label htmlFor={name} className="block text-gray-700">{label}</label>}
    <select
      value={value}
      onChange={onChange}
      id={name}
      name={name}
      className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Selecciona una opción</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const Reporte = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    rut: '',
    fechaInicio: '',
    fechaFin: '',
    centroDeSalud: '',
    talla: ''
  });
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers();
        setData(users);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error al eliminar documento:', error);
    }
  };

  const handleSave = async (updatedItem) => {
    try {
      await updateUser(updatedItem.id, updatedItem);
      setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
      setEditItem(null);
    } catch (error) {
      console.error('Error al actualizar documento:', error);
    }
  };

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesRut = item.rut.toLowerCase().includes(filters.rut.toLowerCase());
      const matchesFechaInicio = filters.fechaInicio ? new Date(item.fecha) >= new Date(filters.fechaInicio) : true;
      const matchesFechaFin = filters.fechaFin ? new Date(item.fecha) <= new Date(filters.fechaFin) : true;
      const matchesCentroDeSalud = filters.centroDeSalud ? item.centroDeSalud.includes(filters.centroDeSalud) : true;
      const matchesTalla = filters.talla ? item.talla.includes(filters.talla.toUpperCase()) : true;
      return matchesRut && matchesFechaInicio && matchesFechaFin && matchesCentroDeSalud && matchesTalla;
    });
  }, [filters, data]);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reporte');
    XLSX.writeFile(wb, 'reporte.xlsx');
  };

  const centrosDeSalud = [
    'Cesfam Magisterio', 'Cesfam Faustino Gonzalez', 'Cesfam Carlos Trupp',
    'Cesfam Julio Contardo', 'Cesfam Las Americas', 'Cesfam Astaburuaga',
    'Cesfam La Florida', 'Cesfam Bicentenario', 'Cecosf Brilla el Sol',
    'Cecosf Carlos Trupp', 'Cecosf Nuevo Horizonte', 'Posta Mercedes',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header showLoginButton={false} showLogoutButton={true} />
      <div className="flex-grow container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">Reporte de Administrador</h1>
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <FilterInput
            type="text"
            name="rut"
            value={filters.rut}
            onChange={handleFilterChange}
            placeholder="Filtrar por RUT"
            label="RUT"
            maxLength={10}
          />
          <FilterInput
            label="Desde:"
            type="date"
            name="fechaInicio"
            value={filters.fechaInicio}
            onChange={handleFilterChange}
          />
          <FilterInput
            label="Hasta:"
            type="date"
            name="fechaFin"
            value={filters.fechaFin}
            onChange={handleFilterChange}
          />
          <FilterSelect
            label="Centro de Salud"
            name="centroDeSalud"
            value={filters.centroDeSalud}
            onChange={handleFilterChange}
            options={centrosDeSalud}
          />
          <FilterInput
            type="text"
            name="talla"
            value={filters.talla}
            onChange={handleFilterChange}
            placeholder="Filtrar por Talla"
            label="Talla"
          />
          <button
            onClick={exportToExcel}
            className="mb-4 w-full p-3 text-lg font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Exportar a Excel
          </button>
          <Report data={filteredData} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
      <Footer />
      {editItem && (
        <EditModal
          item={editItem}
          onSave={handleSave}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
};

export default Reporte;
