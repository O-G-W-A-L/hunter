import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const inputClass = "w-full p-3 bg-[#0A4D68]/30 border border-[#7FDBFF]/30 rounded-lg text-[#AEEEEE] placeholder-[#7FDBFF]/50 focus:outline-none focus:border-[#7FDBFF] transition-colors duration-300";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-8 flex items-center justify-center">
      <motion.div 
        className="w-full max-w-lg bg-[#0A4D68]/20 backdrop-blur-sm p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Dive into Contact
        </motion.h1>
        <form className="space-y-4">
          {['Your Name', 'Your Email', 'Your Message'].map((placeholder, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}>
              {placeholder === 'Your Message' ? (
                <textarea placeholder={placeholder} className={inputClass} rows="5" />
              ) : (
                <input type={placeholder.includes('Email') ? 'email' : 'text'} placeholder={placeholder} className={inputClass} />
              )}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            className="w-full bg-[#7FDBFF] text-[#001F3F] py-3 rounded-lg font-bold hover:bg-[#AEEEEE] transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

