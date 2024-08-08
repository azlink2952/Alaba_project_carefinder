'use client'
import React from "react";
import { useEffect, useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');
  

  console.log({user})

  if (!user && !userSession){
    router.push('/sign-up')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        }}>
        Log out
      </button> */}
      <Navbar />
      <Hero />
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Welcome to CareFinder</h2>
        <p className="mt-4 text-lg text-center">
          We connect you with the best healthcare providers in your area. Your health is our top priority.
        </p>
      </div>
      
    </main>
  );
}
