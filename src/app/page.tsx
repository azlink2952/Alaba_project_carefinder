'use client'
import React from "react";
import { FC, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Layout from "./layout";

const Home: FC = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user && !sessionStorage.getItem('signedUp')) {
      router.push('/sign-up'); // Use router.push instead of window.location.href
    }
  }, [user, router]);

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <div className="container mx-auto py-10 px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Welcome to CareFinder
        </h2>
        <p className="text-lg md:text-xl mb-8 text-center">
          We connect you with the best healthcare providers in your area. Your health is our top priority.
        </p>
      </div>
    </main>
  );
};

export default Home;
