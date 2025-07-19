import React from 'react';
import { motion } from 'framer-motion';

function LeftSide({img, title, description, isButton}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full bg-gray-100 p-4 gap-8 w-full max-w-7xl mx-auto pt-20 pb-20">
        {/* Text Content */}
        <div className="flex flex-col items-start justify-center w-full max-w-2xl p-8">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className="mb-3">{description}</p>
          {isButton && (
            <button
              className="mt-4 px-6 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white font-semibold shadow transition-colors duration-300"
            >
              Contact Us
            </button>
          )}
        </div>
       
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-lg h-[380px] rounded-lg overflow-hidden shadow-xl bg-white flex items-center justify-center"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={img}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default LeftSide;