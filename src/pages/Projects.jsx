import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: "Trace-It",
    description: "A web app for tracking and managing your tasks with real-time updates and notifications.",
    link: "https://trace-it-tau.vercel.app/",
    tags: ["React", "Firebase", "Real-time", "Python"]
  },
  {
    name: "FreeMind",
    description: "A mind mapping tool to help users brainstorm ideas and organize thoughts effectively.",
    link: "#",
    tags: ["JavaScript", "D3.js", "React","LocalStorage"]
  },
  {
    name: "TabSmart",
    description: "A browser extension for managing tabs and improving your browsing experience.",
    link: "#",
    tags: ["Chrome Extension", "JavaScript", "Browser API"]
  },
  {
    name: "CodeCollab",
    description: "Real-time collaborative coding platform for remote pair programming.",
    link: "#",
    tags: ["WebSockets", "Monaco Editor", "Node.js"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-4 sm:p-8 overflow-hidden">
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Hunter's Projects
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#0A4D68]/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-[#7FDBFF]/20 transition-all duration-300 flex flex-col justify-between"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#7FDBFF]">{project.name}</h2>
              <p className="text-[#AEEEEE] mb-4 text-sm sm:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-[#001F3F]/50 text-[#7FDBFF] text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <motion.a 
              href={project.link} 
              className="inline-flex items-center justify-center bg-[#7FDBFF] text-[#001F3F] px-4 py-2 rounded-full hover:bg-[#AEEEEE] transition-colors duration-300 text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Dive In
              <ExternalLink className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

