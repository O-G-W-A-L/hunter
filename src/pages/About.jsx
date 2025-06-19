import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Lightbulb, Target, Users } from 'lucide-react';
import ProfileImage from '../assets/test.jpg';

const highlights = [
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Crafting clean, efficient code with modern technologies"
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description: "Turning complex challenges into elegant solutions"
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering results that matter"
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Building bridges between ideas and implementation"
  }
];

export default function About() {
  const [activeHighlight, setActiveHighlight] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-[#00153f] via-[#001a3f] to-[#00243f] text-[#AEEEEE] py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          ref={ref}
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] bg-clip-text text-transparent">
              About The Hunter
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Profile Image */}
                <motion.div
                  className="w-80 h-80 mx-auto relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] rounded-full p-1">
                    <div className="w-full h-full bg-[#00153f] rounded-full p-4">
                      <img 
                        src={ProfileImage}
                        alt="Ogwal Jonathan Amos" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-[#7FDBFF]/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Code className="text-[#7FDBFF]" size={24} />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#AEEEEE]/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Lightbulb className="text-[#AEEEEE]" size={20} />
                  </motion.div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { /* number: "5+", label: "Projects" */},
                    { /* number: "2+", label: "Years" */},
                    { /*number: "10+", label: "Technologies" */ }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-[#7FDBFF]"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-[#AEEEEE]/70">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    I'm a <span className="text-[#7FDBFF] font-semibold">software engineer</span> who believes 
                    in the power of technology to transform ideas into reality. My journey began with curiosity 
                    and has evolved into a passion for creating digital solutions that make a difference.
                  </p>
                  <p>
                    I focus on solving real-world problems through innovative technology.
                  </p>
                  <p>
                    I can both build and tell a story through code, communicate with clarity, and deliver effectively.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#AEEEEE] mb-4">What Drives Me</h4>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeHighlight === index 
                        ? 'bg-[#7FDBFF]/10 border border-[#7FDBFF]/30' 
                        : 'bg-[#00153f]/50 border border-transparent hover:border-[#7FDBFF]/20'
                    }`}
                    onClick={() => setActiveHighlight(index)}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        activeHighlight === index ? 'bg-[#7FDBFF]/20' : 'bg-[#AEEEEE]/10'
                      }`}>
                        <highlight.icon 
                          className={activeHighlight === index ? 'text-[#7FDBFF]' : 'text-[#AEEEEE]'} 
                          size={20} 
                        />
                      </div>
                      <div>
                        <h5 className={`font-semibold mb-1 ${
                          activeHighlight === index ? 'text-[#7FDBFF]' : 'text-[#AEEEEE]'
                        }`}>
                          {highlight.title}
                        </h5>
                        <p className="text-sm text-[#AEEEEE]/70">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
