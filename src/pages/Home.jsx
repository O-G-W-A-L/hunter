import React from "react";
import { motion } from "framer-motion";

const skills = ["React", "Tailwind CSS", "JavaScript", "Node.js", "UI/UX Design"];

const floatingAnimation = {
  y: ["0%", "3%", "-3%", "0%"],
  transition: {
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-teal-950 text-teal-100 overflow-hidden relative flex items-center justify-center">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={floatingAnimation}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Content */}
      <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-teal-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Creative Universe
        </motion.h1>
        <motion.p
          className="text-xl mb-12 text-teal-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Dive into a world where creativity meets technology. Explore my projects and the digital
          wonders I've crafted.
        </motion.p>
        {/* Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-teal-800 px-4 py-2 rounded-full cursor-pointer hover:bg-teal-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
        {/* Button */}
        <motion.button
          className="bg-teal-500 text-teal-950 px-8 py-3 rounded-full font-bold text-lg hover:bg-teal-400 transition-colors duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </motion.button>
      </div>
    </div>
  );
}
