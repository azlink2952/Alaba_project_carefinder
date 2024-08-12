import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faAmbulance, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-green-100 text-gray-900 transition-colors duration-500">
      <section className="container mx-auto py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 transition-transform duration-500 transform hover:scale-105">
          About CareFinder
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed text-center">
          Welcome to CareFinder, your ultimate healthcare companion in Nigeria. We are dedicated to providing you with the most accurate and up-to-date information about hospitals and healthcare services across the country. Whether you&rsquo;re looking for immediate medical assistance or planning ahead, CareFinder is designed to support your healthcare needs with ease and efficiency.
        </p>
        
        <section className="bg-white rounded-lg shadow-lg p-6 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Why Choose CareFinder?
          </h2>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-4">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faHospital} className="text-blue-500 text-xl" />
              <span>Comprehensive Database: Access a wide range of hospitals and clinics with detailed information, including location, contact details, and services offered.</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faAmbulance} className="text-red-500 text-xl" />
              <span>Emergency Assistance: Quickly find nearby hospitals in case of emergencies, ensuring you get timely medical care when you need it most.</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faHeartbeat} className="text-green-500 text-xl" />
              <span>Health Optimization: Plan your visits to hospitals based on user reviews and ratings, helping you choose the best healthcare provider for your needs.</span>
            </li>
          </ul>
        </section>
        
        <section className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            How CareFinder Can Help You
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            In times of health crises or emergencies, every second counts. CareFinder ensures that you are never far from the help you need. Our platform helps you quickly locate hospitals that are closest to your current location, view their contact details, and understand what medical services they offer. With CareFinder, you can be confident that you&rsquo;re making informed decisions about your healthcare, which can be crucial in high-pressure situations.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Additionally, our user-friendly interface and responsive design make it easy for you to access information on any device, whether you&rsquo;re at home or on the go. The time you save finding the right healthcare provider can be used to focus on what really matters&mdash;getting the care you need.
          </p>
        </section>
      </section>
    </main>
  );
}

export default AboutPage;
