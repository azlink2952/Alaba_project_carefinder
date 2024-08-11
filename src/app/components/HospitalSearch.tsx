import { useState } from 'react';
import hospitalData from '../../data/data.json';
import ExportHospital from './ExportHospitals';


type Hospital = {
  "Hospital name": string;
  address: string;
  contact: string;
};

const HospitalSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hospitals, setHospitals] = useState<Hospital[]>(hospitalData);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filteredHospitals = hospitalData.filter(
      (hospital) =>
        hospital["Hospital name"].toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setHospitals(filteredHospitals);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = e.target.value;
    if (selectedIndex !== "") {
      setSelectedHospital(hospitals[Number(selectedIndex)]);
    } else {
      setSelectedHospital(null);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 min-h-screen p-8">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Hospital Search</h1>
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for hospitals"
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
          >
            Search
          </button>
        </form>

        <select
          onChange={handleSelect}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          defaultValue=""
        >
          <option value="">Select a hospital</option>
          {hospitals.map((hospital, index) => (
            <option key={index} value={index}>
              {hospital["Hospital name"]}
            </option>
          ))}
        </select>

        {selectedHospital && (
          <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedHospital["Hospital name"]}</h2>
            <p className="text-gray-600">{selectedHospital.address}</p>
            <p className="text-gray-600">{selectedHospital.contact}</p>
          </div>
        )}

        <ExportHospital hospitals={hospitals} />
      </div>
    </div>
  );
};

export default HospitalSearch;
