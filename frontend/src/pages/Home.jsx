"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  appleEasing,
  timing,
  stagger,
  containerVariants,
  itemVariants,
  prefersReducedMotion
} from "../utils/animations"

export default function Home() {
  const [key, setKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div id="home" className="min-h-screen bg-prussian text-ivory relative overflow-hidden grain pt-20 md:pt-24 lg:pt-32">
      {/* Old Money Editorial Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, rgba(139, 125, 107, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 50% 50%, rgba(245, 243, 239, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px, 60px 60px, 100px 100px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen container-luxury">
        {/* Hero Section */}
        <motion.div
          className="text-center w-full max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
            transition={{ delay: stagger.tight }}
          >
            <motion.span
              className="inline-block text-xl md:text-2xl text-taupe font-medium mb-6 tracking-wide"
              animate={prefersReducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: appleEasing.smooth }}
            >
              Hello, World! 👋
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium leading-none tracking-tight">
              I'm a{" "}
              <motion.span
                className="text-gold"
                animate={prefersReducedMotion ? {} : {
                  textShadow: [
                    "0 0 0 rgba(212, 175, 55, 0)",
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                    "0 0 0 rgba(212, 175, 55, 0)"
                  ]
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: appleEasing.smooth }}
              >
                SOFTWARE ENGINEER
              </motion.span>
            </h1>
          </motion.div>

          {/* Name Animation */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
            transition={{ delay: stagger.normal }}
          >
            <motion.h2 className="text-xl md:text-2xl font-light mb-8 text-taupe tracking-wide">
              My name is
            </motion.h2>
            <motion.div key={key} className="relative">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-ivory whitespace-nowrap leading-none"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: timing.slower, ease: appleEasing.smooth }}
              >
                {Array.from("OGWAL JONATHAN AMOS").map((char, index) => (
                  <motion.span
                    key={`${key}-${index}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: timing.normal,
                      delay: index * stagger.tight,
                      ease: appleEasing.smooth,
                    }}
                    whileHover={prefersReducedMotion ? {} : {
                      scale: 1.02,
                      transition: { duration: timing.fast, ease: appleEasing.spring }
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-taupe font-medium mt-6 tracking-wider"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: timing.slower, duration: timing.normal, ease: appleEasing.smooth }}
              >
                — THE HUNTER —
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-light-grey max-w-4xl mx-auto leading-relaxed mb-16"
            variants={itemVariants}
            transition={{ delay: stagger.loose }}
          >
            Crafting digital experiences that solve real-world problems with elegance and precision.
            <br />
            <span className="text-ivory font-medium">Let's build something extraordinary together.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            variants={itemVariants}
            transition={{ delay: stagger.looser }}
          >
            <motion.button
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              className="group relative bg-ivory text-prussian border border-ivory px-12 py-4 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,243,239,0.3)] hover:scale-105"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <span className="relative z-10 font-serif tracking-[0.2em] uppercase text-xs md:text-sm font-semibold">
                View My Work
              </span>
              <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="group relative bg-transparent text-ivory border border-ivory/30 px-12 py-4 rounded-full overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <span className="relative z-10 font-serif tracking-[0.2em] uppercase text-xs md:text-sm font-semibold group-hover:text-gold transition-colors duration-500">
                Get In Touch
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: appleEasing.smooth }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: appleEasing.smooth }}
          />
        </div>
      </motion.div>
    </div >
  )
}


