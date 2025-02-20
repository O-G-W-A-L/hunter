import React from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon, Briefcase } from 'lucide-react';

const experiences = [
  { role: "Software Engineer", company: "Freelance" },
  { role: "IT Specialist", company: "Afraco Co" },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-4 sm:p-8 flex items-center justify-center">
      <motion.div 
        className="w-full max-w-2xl bg-[#0A4D68]/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          My Journey
        </motion.h1>
        
        <motion.div 
          className="space-y-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="flex items-center space-x-4 bg-[#001F3F]/30 p-4 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <Briefcase className="text-[#7FDBFF] flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-[#7FDBFF]">{exp.role}</h2>
                <p className="text-sm text-[#AEEEEE]">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.a
            href="mailto:huntertest02@gmail.com?subject=Request%20for%20Resume&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThank%20you."
            className="bg-[#7FDBFF] text-[#001F3F] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#AEEEEE] transition-colors duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DownloadIcon size={20} />
            Request Full Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
