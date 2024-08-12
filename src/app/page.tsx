'use client'
import React from "react";
import { FC } from 'react';
import { useEffect, useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";






const Home: FC = () => {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');
  
  

  console.log({user})

  if (!user && !userSession){
    router.push('/sign-up')
  }
  
  
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

        {/* Optional: Sign out button
        <button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          Log out
        </button> */}
      </div>
    </main>
  );
}
export default Home;