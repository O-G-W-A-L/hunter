"use client"

import { motion } from "framer-motion"
import {
  containerVariants,
  itemVariants,
  prefersReducedMotion
} from "../utils/animations"

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-prussian text-ivory relative overflow-hidden grain pt-20 md:pt-24 lg:pt-32">
      {/* Editorial Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, rgba(139, 125, 107, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 50% 50%, rgba(245, 243, 239, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px, 60px 60px, 100px 100px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-[calc(100vh-6rem)] container-luxury w-full max-w-[95vw] lg:max-w-7xl xl:max-w-[90rem] mx-auto">
        <motion.div
          className="text-center w-full mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero */}
          <motion.div className="mb-4 w-full" variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-medium leading-none tracking-tight text-ivory mb-4">
              Jonathan Amos Ogwal
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gold/50 font-medium mb-6">
              Known as Hunter
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-taupe font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
              Software Engineer
            </p>
          </motion.div>

          {/* Supporting line */}
          <motion.div className="mb-14" variants={itemVariants}>
            <p className="text-base md:text-lg text-ivory/60 max-w-2xl mx-auto leading-relaxed">
              I build backend systems and full-stack applications for production environments.
            </p>
          </motion.div>

          {/* Minimal Divider */}
          <motion.div className="w-12 h-px bg-gold/20 mx-auto mb-14" variants={itemVariants} />

          {/* CTA */}
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative bg-ivory text-prussian border border-ivory px-12 py-4 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,243,239,0.2)]"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <span className="relative z-10 font-serif tracking-[0.2em] uppercase text-xs md:text-sm font-semibold transition-colors duration-500 group-hover:text-prussian">
                View Systems
              </span>
              <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative bg-transparent text-ivory border border-ivory/30 px-12 py-4 rounded-full overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <span className="relative z-10 font-serif tracking-[0.2em] uppercase text-xs md:text-sm font-semibold group-hover:text-gold transition-colors duration-500">
                Get In Touch
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}