'use client'
import React from 'react';
import { saveAs } from 'file-saver';
import hospitalData from '../../data/data.json'

type Hospital = {
  "Hospital name": string;
  address: string;
  contact: string;
};


type ExportHospitalsProps = {
  hospitals: Hospital[];
};

const ExportHospitals: React.FC<ExportHospitalsProps> = ({ hospitals }) => {
  const exportToCSV = () => {
    const csvRows = [];
    const headers = Object.keys(hospitals[0]);
    csvRows.push(headers.join(','));

    for (const hospital of hospitals) {
      const values = headers.map(header => {
        const value = hospital[header as keyof typeof hospital];
        return `"${value}"`; // Escape quotes in the value
      });
      csvRows.push(values.join(','));
    }

    const csvData = csvRows.join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'hospitals.csv');
  };

  return (
    <div>
      <button
        onClick={exportToCSV}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Export Hospitals
      </button>
    </div>
  );
};

const defaultHospitals: Hospital[] = hospitalData;

export default function ExportHospitalsContainer() {
  return <ExportHospitals hospitals={defaultHospitals} />;
}