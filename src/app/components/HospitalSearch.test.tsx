import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import HospitalSearch from './HospitalSearch';

describe('HospitalSearch component', () => {
  it('renders search form', () => {
    const { getByText } = render(<HospitalSearch />);
    expect(getByText('Search for hospitals')).toBeInTheDocument();
  });

  it('renders search results', async () => {
    const { getByText } = render(<HospitalSearch />);
    const searchInput = getByText('Search for hospitals').previousSibling as HTMLInputElement;
    const searchButton = getByText('Search');
    fireEvent.change(searchInput, { target: { value: 'Abuja' } });
    fireEvent.click(searchButton);
    await waitFor(() => expect(getByText('Hospital 1')).toBeInTheDocument());
  });

  it('handles search error', async () => {
    const { getByText } = render(<HospitalSearch />);
    const searchInput = getByText('Search for hospitals').previousSibling as HTMLInputElement;
    const searchButton = getByText('Search');
    fireEvent.change(searchInput, { target: { value: 'Invalid location' } });
    fireEvent.click(searchButton);
    await waitFor(() => expect(getByText('Error: Unable to find hospitals')).toBeInTheDocument());
  });
});