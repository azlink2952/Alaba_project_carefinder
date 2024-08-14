'use client'
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut(auth);
    sessionStorage.removeItem('user');
  };

  return (
    <nav className="bg-blue-600 p-4 fixed w-full z-10 top-0 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/" legacyBehavior>
            <a>CareFinder</a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>Contact</a>
          </Link>
          <button 
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 text-[13px]"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            Log out
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none text-2xl">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" legacyBehavior>
            <a className="block text-white py-2 px-4 hover:bg-blue-700">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block text-white py-2 px-4 hover:bg-blue-700">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block text-white py-2 px-4 hover:bg-blue-700">Contact</a>
          </Link>
          <button 
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 mx-4 mt-2 text-[13px]"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            Log out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
