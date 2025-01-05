import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = ['About', 'Projects', 'Contact', 'Skills', 'Resume'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-[#001F3F] to-[#0A4D68] p-4 shadow-lg fixed top-0 w-full z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => handleScroll('home')} className="text-[#AEEEEE] text-2xl font-bold group">
          <span className="relative z-10">THE HunteR</span>
          <motion.div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7FDBFF] group-hover:w-full transition-all duration-300" />
        </button>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavItem key={item} name={item} onClick={() => handleScroll(item)} />
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#AEEEEE]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <button key={item} onClick={() => handleScroll(item)} className="block w-full text-left text-[#AEEEEE] hover:bg-[#0A4D68] p-2">
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

const NavItem = ({ name, onClick }) => (
  <motion.button
    onClick={onClick}
    className="text-[#AEEEEE] hover:text-[#7FDBFF] relative"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {name}
    <motion.div
      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7FDBFF]"
      initial={{ width: 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
);

