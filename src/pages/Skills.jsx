import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "React.js", description: "A JavaScript library for building user interfaces.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python", description: "A versatile programming language for web development, AI, and more.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Firebase", description: "A platform for building web and mobile applications.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Framer Motion", description: "A library for creating fluid animations in React.", logo: "https://www.svgrepo.com/show/354552/framer.svg" },
  { name: "Git & GitHub", description: "Version control and collaboration tools for developers.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "JavaScript", description: "A programming language essential for web development.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Vite", description: "A modern frontend tool for faster web development.", logo: "https://vitejs.dev/logo.svg" },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-4 sm:p-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Hunter's Skills
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#0A4D68]/30 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-[#7FDBFF]/20 transition-all duration-300 flex flex-col items-center justify-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4" />
            <div className="text-center">
              <h2 className="text-lg sm:text-xl font-semibold mb-1 text-[#7FDBFF] hidden sm:block">{skill.name}</h2>
              <p className="text-[#AEEEEE] text-xs sm:text-sm hidden md:block">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

