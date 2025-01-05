import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
  { name: 'Resume', id: 'resume' },
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-[#001F3F] to-[#0A4D68] p-4 shadow-lg fixed top-0 w-full z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo acting as Home */}
        <button
          onClick={() => handleScroll('home')}
          className="text-[#AEEEEE] text-2xl font-bold relative group"
        >
          <span className="relative z-10">THE HunteR</span>
          <motion.div
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7FDBFF]"
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-[#AEEEEE] hover:text-[#7FDBFF] relative group"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
              {hoveredItem === index && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7FDBFF]"
                  layoutId="underline"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
