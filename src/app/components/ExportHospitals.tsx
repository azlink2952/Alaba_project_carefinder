'use client'
import { storage } from '../firebase/config';

const ExportHospitals = () => {
  const exportHospitals = async () => {
    const hospitalsRef = storage.ref('hospitals.csv');
    hospitalsRef.putString(hospitals.map((hospital) => `${hospital.name},${hospital.location}`).join('\n'));
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={exportHospitals} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Export Hospitals
      </button>
    </div>
  );
};

export default ExportHospitals;