'use client'
import { useState, FormEvent } from 'react';
import { db } from '../firebase/config';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { Error } from '@types/node';

interface Hospital {
    id: string;
    name: string;
    location: string;
  }
  
  const HospitalSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const searchHospitals = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!searchQuery.trim()) return;
  
      setLoading(true);
      try {
        const querySnapshot = await getDocs(
          query(collection(db, 'hospitals'), where('location', '==', searchQuery))
        );
        setHospitals(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Hospital)));
      } catch (error: Error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Hospital Search</h1>
        <form onSubmit={searchHospitals}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by location"
            className="w-full p-2 mb-4"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : hospitals.length === 0 ? (
          <p>No hospitals found.</p>
        ) : (
          <ul>
            {hospitals.map((hospital) => (
              <li key={hospital.id} className="mb-4">
                {hospital.name} ({hospital.location})
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default HospitalSearch;