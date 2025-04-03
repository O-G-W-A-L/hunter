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
    link: "https://github.com/O-G-W-A-L/FreeMind.git",
    tags: ["JavaScript", "Firebase", "MongoDB", "React", "Express", "Node JS", "Tailwind CSS"]
  },
  {
    name: "TabSmart",
    description: "A browser extension for managing tabs and improving your browsing experience.",
    link: "https://github.com/O-G-W-A-L/TabSmart.git",
    tags: ["Chrome Extension", "JavaScript", "Browser API"]
  },
  {
    name: "AdFriend",
    description: "A chrome browser extension that intercepts and replaces ads with positive contents",
    link: "https://github.com/O-G-W-A-L/AdFriend.git",
    tags: ["Chrome Extension", "JavaScript", "React", "HTML", "Browser API"]
  },
  {
    name: "The Maze Game",
    description: "A retro maze 3D game with raycasting.",
    link: "https://github.com/O-G-W-A-L/the-maze_project.git",
    tags: ["C", "SDL2"]
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#001F3F] text-[#AEEEEE] p-4 sm:p-8">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Hunter's Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#001F3F]/80 backdrop-blur-xl ring-1 ring-[#0A4D68] rounded-3xl shadow-2xl p-10 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#7FDBFF] hover:shadow-[0_10px_25px_rgba(127,219,255,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#7FDBFF]">{project.name}</h2>
              <p className="text-base sm:text-lg mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-[#0A4D68]/60 text-[#7FDBFF] text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <motion.a
              href={project.link}
              className="inline-flex items-center justify-center bg-[#7FDBFF] text-[#001F3F] px-5 py-3 rounded-full hover:bg-[#AEEEEE] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Dive In
              <ExternalLink className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}