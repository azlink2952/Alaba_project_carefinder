'use client'
import React from 'react';
import { auth, firestore } from '../firebase/config'; 
import hospitalData from '../../data/data.json'; 
import { collection, addDoc } from 'firebase/firestore'; 

type Hospital = {
  "Hospital name": string;
  address: string;
  contact: string;
};

type ShareHospitalsProps = {
  hospitals: Hospital[];
};

const ShareHospitals: React.FC<ShareHospitalsProps> = ({ hospitals }) => {
  const shareHospitals = async () => {
    const user = auth.currentUser;
    if (user) {
      const hospitalsRef = collection(firestore, 'sharedHospitals');
      try {
        await addDoc(hospitalsRef, {
          userId: user.uid,
          hospitals,
        });
      } catch (error) {
        console.error('Error sharing hospitals:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={shareHospitals}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Share Hospitals
      </button>
    </div>
  );
};

const defaultHospitals: Hospital[] = hospitalData;

export default function ShareHospitalsContainer() {
  return <ShareHospitals hospitals={defaultHospitals} />;
}
