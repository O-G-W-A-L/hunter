import React from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon } from 'lucide-react';

export default function Resume() {
  const skills = ['React', 'Node.js', 'TypeScript', 'GraphQL', 'AWS', 'Docker'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-8 flex items-center justify-center">
      <motion.div 
        className="w-full max-w-4xl bg-[#0A4D68]/30 backdrop-blur-sm p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          My Journey
        </motion.h1>
        <motion.p 
          className="text-lg text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Dive into my professional odyssey, exploring the depths of technology and innovation. Uncover the treasures of my skills and achievements below.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#7FDBFF]">Experience</h2>
            <ul className="list-disc list-inside">
              <li>Backend Developer at Afraco Tech</li>
              <li>Software Engineer at Hunters</li>
              <li>AI Researcher and Innovations</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#7FDBFF]">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-[#0A4D68] px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="flex justify-center">
          <motion.a
            href="/path-to-resume.pdf"
            download
            className="bg-[#7FDBFF] text-[#001F3F] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#AEEEEE] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DownloadIcon size={20} />
            Download Full Expedition Log
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

