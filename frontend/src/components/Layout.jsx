import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ background, children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      {background && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: `url(${background})` }}
          aria-hidden="true"
        ></div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
