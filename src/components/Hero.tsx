'use client'
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Find the Best Care</h1>
        <p className="mt-4 text-xl md:text-2xl">Your health, our priority.</p>
        <Link href="/get-started" legacyBehavior>
          <a className="mt-6 bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-gray-200 inline-block">
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
