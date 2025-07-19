import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-2xl font-bold">LOGO</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {isOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto flex-grow md:flex-grow-0`}>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Request a Call Back
            </button>
            <button className="w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
              Existing Customer
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-100 py-2 px-4 text-center">
        <p className="text-gray-700">Welcome to our platform! Discover amazing products and services.</p>
      </div>

      
    </nav>
  );
}

export default Navbar;