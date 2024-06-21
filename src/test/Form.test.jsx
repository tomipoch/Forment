// src/test/Form.test.jsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Actualizado
import Form from '../components/Form';

test('renders Form and submits data correctly', () => {
  render(<Form />);

  // Fill out the form fields
  fireEvent.change(screen.getByLabelText(/primer nombre/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/segundo nombre/i), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText(/apellido paterno/i), { target: { value: 'Smith' } });
  fireEvent.change(screen.getByLabelText(/apellido materno/i), { target: { value: 'Johnson' } });
  fireEvent.change(screen.getByLabelText(/rut/i), { target: { value: '12345678-9' } });
  fireEvent.change(screen.getByLabelText(/edad/i), { target: { value: '30' } });
  fireEvent.change(screen.getByLabelText(/ayuda técnica/i), { target: { value: 'Silla de ruedas' } });
  fireEvent.change(screen.getByLabelText(/talla/i), { target: { value: 'M' } });
  fireEvent.change(screen.getByLabelText(/cantidad/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/centro de salud/i), { target: { value: 'Cesfam Magisterio' } });

  // Submit the form
  fireEvent.click(screen.getByText(/enviar/i));

  // Check for success popup
  expect(screen.getByText(/¡el formulario se ha enviado correctamente!/i)).toBeInTheDocument();
});
