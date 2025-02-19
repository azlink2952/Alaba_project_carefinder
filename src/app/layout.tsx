import '../app/globals.css'
import React from 'react';
import Head from 'next/head';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <title>CareFinder Nigeria</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default Layout