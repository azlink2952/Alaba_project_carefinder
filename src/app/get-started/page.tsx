'use client'
import Head from 'next/head';
import HospitalSearch from '../../components/hospitalsearch/HospitalSearch';
import ExportHospitals from '../../components/exporthospital/ExportHospitals';
import ShareHospitals from '../../components/sharehospital/ShareHospitals';
import MarkdownEditor from '../../components/markdown/MarkdownEditor';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


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
