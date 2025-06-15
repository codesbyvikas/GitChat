import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // import your footer

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-white">
      <main className="flex-grow">
        <Outlet /> {/* All routed pages will render here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
