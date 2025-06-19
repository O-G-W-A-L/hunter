import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../assets/test.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-[#00153f] text-[#AEEEEE] p-4 sm:p-8 flex items-center justify-center">
      <motion.div
        className="max-w-4xl w-full bg-[#00153f]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 sm:p-16 flex flex-col md:flex-row items-center gap-12 sm:gap-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 h-64 rounded-full bg-[#7FDBFF] overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.05 }}
        >
          <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>
        <div className="flex-1">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A software engineer who merges technical expertise with creative storytelling. I develop innovative tools like Trace-It, Adfriend, and TabSmart to solve real-world challenges, from lost property recovery to digital wellness.
            I craft intuitive digital experiences that address user needs and drive results. With a focus on clear communication and collaboration, I manage projects from concept to deployment. Let’s work together to tackle your challenges and bring your ideas to life!          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
