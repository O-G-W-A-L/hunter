import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Python", description: "A versatile programming language for web development, AI, and more.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", description: "A programming language essential for web development.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MongoDB", description: "A NoSQL database for storing large-scale data.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", description: "A powerful, open-source relational database management system.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "React.js", description: "A JavaScript library for building user interfaces.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", description: "Server-side JavaScript runtime for building fast and scalable applications.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", description: "A minimal web framework for building RESTful APIs.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Docker", description: "A platform for containerizing applications for easy deployment.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git & GitHub", description: "Version control and collaboration tools for developers.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Linux", description: "Open-source operating system widely used in development and servers.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Firebase", description: "A platform for building web and mobile applications.", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
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
        The Hunter's Arsenal
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
            className="bg-[#0A4D68]/30 backdrop-blur-sm p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all duration-300 relative"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4"
            />
            <div className="text-center">
              <h2 className="text-lg sm:text-xl font-semibold mb-1 text-[#7FDBFF] hidden sm:block">{skill.name}</h2>
              <p className="text-[#AEEEEE] text-xs sm:text-sm hidden md:block">{skill.description}</p>
            </div>

            {/* On smaller screens, show the description on hover */}
            <div className="absolute inset-0 bg-[#0A4D68]/90 p-4 rounded-lg flex items-center justify-center text-white opacity-0 transition-opacity duration-300 sm:hidden hover:opacity-100">
              <p className="text-center text-sm">{skill.description}</p>
            </div>

            {/* Make the text clearer on hover */}
            <div className="absolute inset-0 bg-[#0A4D68]/60 p-4 rounded-lg flex items-center justify-center text-white opacity-0 transition-opacity duration-300 sm:hidden hover:opacity-100 hover:bg-[#0A4D68]/40">
              <p className="text-center text-sm">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
