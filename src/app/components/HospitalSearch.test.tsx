'use client'
import { render, screen } from '@testing-library/react';
import HospitalSearch from './HospitalSearch';

test('renders search input', () => {
  render(<HospitalSearch />);
  const inputElement = screen.getByLabelText(/Search by Location:/i);
  expect(inputElement).toBeInTheDocument();
});