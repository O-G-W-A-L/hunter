import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../assets/test.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-8 flex flex-col items-center justify-center">
      <motion.div
        className="max-w-4xl w-full bg-[#0A4D68]/30 backdrop-blur-sm rounded-lg shadow-xl p-8 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 h-64 rounded-full bg-[#7FDBFF] overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img src={ProfileImage} alt="Smile" className="w-full h-full object-cover" />
        </motion.div>
        <div className="flex-1">
          <motion.h1 
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Jonathan Amos Ogwal - Hunter, is a software engineer and writer who merges technical expertise with creative
             storytelling to solve human-centered problems. Whether you need a sleek software, to showcase your services, 
             a robust oline store, or literaly anything else, i build it. From web apps to custom tools. from concept to 
             deployment, full project management ensuring every pixel and line of code aligns with your vision.
             I craft code that communicates as clearly as it functions proving technology thrives when logic meets creativity.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
