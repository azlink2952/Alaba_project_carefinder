'use client'
import Head from 'next/head';
import HospitalSearch from '../../components/hospitalsearch/HospitalSearch';
import ExportHospitals from '../../components/exporthospital/ExportHospitals';
import ShareHospitals from '../../components/sharehospital/ShareHospitals';
import MarkdownEditor from '../../components/markdown/MarkdownEditor';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const GetStarted = () => {
  const router = useRouter();

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
      <div className="container mx-auto py-4">
        <button
          onClick={() => router.back()} 
          className="flex items-center text-blue-600 hover:text-blue-500 transition-colors duration-200"
        >
          <span className="mr-2">&larr;</span> Back
        </button>
      </div>

      <nav className="w-full py-4 bg-gray-200">
        <div className="container mx-auto">
          <ol className="list-reset flex text-gray-600">
            <li><a href="/" className="text-blue-600 hover:text-blue-500">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li>Get Started</li>
          </ol>
        </div>
      </nav>

      <HospitalSearch />
      <ExportHospitals />
      <ShareHospitals />
      <MarkdownEditor />
    </div>
  );
};

export default GetStarted;
