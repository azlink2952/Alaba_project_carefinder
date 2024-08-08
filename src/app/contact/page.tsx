'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('visitedAboutPage', 'true');
    }
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700">
        We are dedicated to providing the best care possible. Our team of professionals is here to help you with all your healthcare needs.
      </p>
    </div>
  );
};

export default Dashboard;