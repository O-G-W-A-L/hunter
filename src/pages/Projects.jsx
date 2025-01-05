import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { name: "Abyssal Explorer", description: "A deep-sea adventure game showcasing underwater ecosystems.", link: "#" },
  { name: "Ocean Data Visualizer", description: "Interactive dashboard for marine research data analysis.", link: "#" },
  { name: "Bioluminescent UI Kit", description: "A glowing component library inspired by deep-sea creatures.", link: "#" },
  { name: "Pressure-Resistant CMS", description: "Content management system built to withstand the depths.", link: "#" },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-8">
      <motion.h1 
        className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Hunters Projects
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#0A4D68]/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-[#7FDBFF]/20 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold mb-3 text-[#7FDBFF]">{project.name}</h2>
            <p className="text-[#AEEEEE] mb-4">{project.description}</p>
            <a 
              href={project.link} 
              className="inline-block bg-[#7FDBFF] text-[#001F3F] px-4 py-2 rounded-full hover:bg-[#AEEEEE] transition-colors duration-300"
            >
              Dive In
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

