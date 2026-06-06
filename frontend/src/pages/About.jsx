"use client"

import React, { useState } from "react"
import { motion, useInView } from "framer-motion"
import { Server, Package, GitBranch, Shield } from "lucide-react"
import ProfileImage from '../assets/test.jpg'
import {
  appleEasing,
  timing,
  stagger,
  containerVariants,
  itemVariants,
  prefersReducedMotion
} from "../utils/animations"

const highlights = [
  {
    icon: Server,
    title: "Systems Architecture",
    description: "Production systems built to manage real-world operational complexity.",
  },
  {
    icon: Package,
    title: "Product Development",
    description: "From concept through development to deployment.",
  },
  {
    icon: GitBranch,
    title: "Technical Decision-Making",
    description: "Architecture and infrastructure choices guided by problem constraints.",
  },
  {
    icon: Shield,
    title: "Reliability & Quality",
    description: "Systems built for production stability, data integrity, and maintainability.",
  },
]

export default function About() {
  const [activeHighlight, setActiveHighlight] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <div
      id="about"
      className="min-h-screen bg-prussian text-ivory section-luxury relative overflow-x-hidden grain"
    >
      {/* Editorial Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, rgba(139, 125, 107, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, rgba(245, 243, 239, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px, 60px 60px, 100px 100px'
        }} />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          ref={ref}
          className="w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-24"
            variants={itemVariants}
            transition={{ delay: stagger.tight }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 text-ivory tracking-tight">
              Approach
            </h2>
            <p className="text-xl md:text-2xl text-light-grey max-w-4xl mx-auto leading-relaxed">
              Building software that solves operational, business, and human problems.
            </p>
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-gold to-warm-gold mx-auto mt-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: timing.normal, delay: timing.normal, ease: appleEasing.smooth }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center lg:flex-row flex-col">
            {/* Profile Section */}
            <motion.div
              className="relative order-1 lg:order-1"
              variants={itemVariants}
              transition={{ delay: stagger.normal }}
            >
              <motion.div
                className="w-full max-w-sm mx-auto relative"
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                transition={{ duration: timing.slow, ease: appleEasing.smooth }}
              >
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-gold/20 rounded-t-[10rem] rounded-b-[3rem] scale-105" />
                <div className="absolute -inset-2 border border-ivory/10 rounded-t-[10rem] rounded-b-[3rem] delay-75 transition-transform duration-500 ease-out group-hover:scale-105" />

                {/* Main Image Container */}
                <div className="relative h-[28rem] sm:h-[32rem] rounded-t-[10rem] rounded-b-[3rem] overflow-hidden border-[3px] border-ivory/10 shadow-2xl group cursor-none">
                  <div className="absolute inset-0 bg-prussian/20 z-10 transition-colors duration-700 group-hover:bg-transparent mix-blend-multiply" />

                  <img
                    src={ProfileImage}
                    alt="Hunter Ogwal"
                    className="w-full h-full object-cover transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 ease-out"
                  />

                  {/* Inner Border/Vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] z-20 pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="space-y-10 order-1 lg:order-2"
              variants={itemVariants}
              transition={{ delay: stagger.loose }}
            >
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-light-grey">
                <p>
                  Every system I build starts with a problem worth solving. I work across healthcare, agriculture, commerce, and digital platforms, domains where operational complexity demands serious engineering.
                </p>
                <p>
                  My approach is practical: understand the workflow, design the architecture, ship the system, and ensure it works reliably in production. I prioritize data integrity, error handling, and maintainability over novelty.
                </p>
                <p>
                  I'm interested in building things that last, products that are meaningful, infrastructure that scales, and code that other engineers can understand and improve.
                </p>
              </div>

              {/* Highlights */}
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.h4
                  className="text-2xl font-serif font-medium text-ivory mb-8"
                  variants={itemVariants}
                >
                  Engineering Focus
                </motion.h4>
                <div className="grid gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-400 ${
                        activeHighlight === index
                          ? "bg-navy-soft shadow-natural border-2 border-taupe"
                          : "bg-navy-soft/10 hover:bg-navy-soft hover:shadow-soft border border-transparent"
                      }`}
                      onClick={() => setActiveHighlight(index)}
                      variants={itemVariants}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.99 }}
                      transition={{ duration: timing.fast, ease: appleEasing.spring }}
                    >
                      <div className="flex items-start space-x-5">
                        <motion.div
                          className={`p-3 rounded-lg ${
                            activeHighlight === index
                              ? "bg-gold text-prussian"
                              : "bg-taupe text-ivory"
                          }`}
                          animate={{
                            scale: activeHighlight === index ? 1.05 : 1,
                          }}
                          transition={{ duration: timing.fast, ease: appleEasing.spring }}
                        >
                          <highlight.icon size={20} />
                        </motion.div>
                        <div className="flex-1">
                          <h5 className="font-medium mb-2 text-ivory">
                            {highlight.title}
                          </h5>
                          <p className="text-light-grey leading-relaxed">{highlight.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}