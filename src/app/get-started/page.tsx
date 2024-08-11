'use client'
import Head from 'next/head';
import HospitalSearch from '../components/HospitalSearch';
import ExportHospitals from '../components/ExportHospitals';
import ShareHospitals from '../components/ShareHospitals';
import MarkdownEditor from '../components/MarkdownEditor';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Hospital } from '@/types/Hospital';

const hospitals: Hospital[] = [
  { "hospital name": 'Hospital A', address: 'Address A', contact: '1234567890' },
  { "hospital name": 'Hospital B', address: 'Address B', contact: '0987654321' },
];
const GetStarted = () => {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('visitedAboutPage', 'true');
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Hospital Search</title>
      </Head>
      <HospitalSearch />
      <ExportHospitals />
      <ShareHospitals />
      <MarkdownEditor />
    </div>
  );
};


export default GetStarted;
