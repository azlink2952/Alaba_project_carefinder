'use client'
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/dashboard"><a>Dashboard</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;