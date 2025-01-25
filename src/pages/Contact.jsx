import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-8 flex items-center justify-center">
      <motion.div 
        className="w-full max-w-3xl bg-[#0A4D68]/20 backdrop-blur-sm p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Contact Me
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Email */}
          <motion.div 
            className="flex flex-col items-center justify-center p-6 bg-[#7FDBFF] text-[#001F3F] rounded-lg shadow-xl hover:bg-[#AEEEEE] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a href="mailto:huntertest02@gmail.com">
              <FaEnvelope className="text-4xl sm:text-5xl mb-4" />
              <p className="text-xl sm:text-2xl font-bold">Email</p>
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div 
            className="flex flex-col items-center justify-center p-6 bg-[#0A4D68] text-[#AEEEEE] rounded-lg shadow-xl hover:bg-[#34D399] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/jonathan-amos-ogwal-725926285/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl sm:text-5xl mb-4" />
              <p className="text-xl sm:text-2xl font-bold">LinkedIn</p>
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div 
            className="flex flex-col items-center justify-center p-6 bg-[#7FDBFF] text-[#001F3F] rounded-lg shadow-xl hover:bg-[#AEEEEE] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="https://github.com/O-G-W-A-L" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl sm:text-5xl mb-4" />
              <p className="text-xl sm:text-2xl font-bold">GitHub</p>
            </a>
          </motion.div>

          {/* X (Twitter) */}
          <motion.div 
            className="flex flex-col items-center justify-center p-6 bg-[#0A4D68] text-[#AEEEEE] rounded-lg shadow-xl hover:bg-[#34D399] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="https://x.com/Ogwal_Jonathan" target="_blank" rel="noopener noreferrer">
              <SiX className="text-4xl sm:text-5xl mb-4" />
              <p className="text-xl sm:text-2xl font-bold">X</p>
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div 
            className="flex flex-col items-center justify-center p-6 bg-[#7FDBFF] text-[#001F3F] rounded-lg shadow-xl hover:bg-[#AEEEEE] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a href="https://wa.me/+256774114216" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-4xl sm:text-5xl mb-4" />
              <p className="text-xl sm:text-2xl font-bold">WhatsApp</p>
            </a>
          </motion.div>

          {/* Telegram */}
          <motion.div 
            className="flex flex-col items-center justify-center p-6 bg-[#0A4D68] text-[#AEEEEE] rounded-lg shadow-xl hover:bg-[#34D399] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <a href="https://t.me/+256774114216" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-4xl sm:text-5xl mb-4" />
              <p className="text-xl sm:text-2xl font-bold">Telegram</p>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
