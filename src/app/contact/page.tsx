'use client'
import React from 'react';

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-100">
      <header className="w-full py-4 bg-blue-600 text-white">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
      </header>
      <section className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions or need further information, feel free to contact us. We&apos;re here to help!
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600">Name: Alaba Soneye</p>
            <p className="text-gray-600">Email: <a href="mailto:soneyeazla@gmail.com" className="text-blue-500 hover:underline">soneyeazla@gmail.com</a></p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>
            <form 
              action="/api/contact" // Update with your form handler URL
              method="POST"
              className="flex flex-col space-y-4"
            >
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input 
                  type="text" 
                  name="name"
                  required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Message</span>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="w-full py-4 bg-blue-600 text-white text-center mt-8">
        <p>&copy; {new Date().getFullYear()} CareFinder. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Contact;
