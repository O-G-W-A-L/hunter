import React from 'react';
import { motion } from 'framer-motion';

// Added skill images
const skills = [
  { 
    name: "Python", 
    description: "A versatile programming language for web development, AI, and more.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  { 
    name: "JavaScript", 
    description: "A programming language essential for web development.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  { 
    name: "MongoDB", 
    description: "A NoSQL database for storing large-scale data.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  { 
    name: "PostgreSQL", 
    description: "A powerful, open-source relational database management system.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  { 
    name: "React.js", 
    description: "A JavaScript library for building user interfaces.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  { 
    name: "Node.js", 
    description: "Server-side JavaScript runtime for building fast and scalable applications.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  { 
    name: "Express.js", 
    description: "A minimal web framework for building RESTful APIs.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  { 
    name: "Docker", 
    description: "A platform for containerizing applications for easy deployment.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  { 
    name: "Git & GitHub", 
    description: "Version control and collaboration tools for developers.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  { 
    name: "Linux", 
    description: "Open-source operating system widely used in development and servers.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  },
  { 
    name: "Firebase", 
    description: "A platform for building web and mobile applications.", 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
  },
  { 
    name: "Writer & Poet", 
    description: "I craft verses and narratives, blending passion with creativity.", 
    image: "https://img.icons8.com/ios-filled/50/ffffff/pen.png"
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#001a3f] text-[#AEEEEE] p-4 sm:p-8">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Hunter's Arsenal
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#001a3f]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={skill.image}
              alt={`${skill.name} logo`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-6"
            />
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#7FDBFF]">{skill.name}</h2>
              <p className="text-sm sm:text-base text-[#AEEEEE]">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}