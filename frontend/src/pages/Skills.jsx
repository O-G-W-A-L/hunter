"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import {
  appleEasing,
  timing,
  stagger,
  containerVariants,
  itemVariants,
  prefersReducedMotion
} from "../utils/animations"

const capabilityAreas = [
  {
    area: "Backend Systems",
    description: "Server-side architecture, API design, and data infrastructure for production applications.",
    capabilities: [
      "FastAPI",
      "Django",
      "PostgreSQL",
      "API Design",
      "Authentication & Authorization",
      "Data Modeling",
      "RESTful Services"
    ]
  },
  {
    area: "Frontend Applications",
    description: "User-facing interfaces and client-side application architecture.",
    capabilities: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "State Management",
      "Component Architecture",
      "Responsive Design"
    ]
  },
  {
    area: "Infrastructure",
    description: "Deployment, orchestration, and system operations.",
    capabilities: [
      "Docker",
      "Linux Systems",
      "CI/CD Pipelines",
      "Cloud Deployment",
      "Server Management",
      "Database Administration",
      "AI Integration"
    ]
  },
  {
    area: "Domain Expertise",
    description: "Specialized knowledge applied to complex industry problems.",
    capabilities: [
      "Healthcare Platforms",
      "Fintech Systems",
      "Marketplace Infrastructure",
      "Inventory & Supply Chain",
      "Real-time Systems",
      "AI Integrations",
      "Browser Extensions"
    ]
  }
]

export default function Skills() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <div
      id="capabilities"
      className="min-h-screen bg-prussian text-ivory section-luxury relative overflow-x-hidden grain"
    >
      {/* Editorial Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 70% 30%, rgba(139, 125, 107, 0.1) 1px, transparent 1px)`,
          backgroundSize: '70px 70px, 90px 90px'
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
            className="text-center mb-20"
            variants={itemVariants}
            transition={{ delay: stagger.tight }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 text-ivory tracking-tight">
              Capabilities
            </h2>
            <p className="text-xl md:text-2xl text-light-grey max-w-4xl mx-auto leading-relaxed">
              Engineering disciplines and technical domains where I deliver production systems.
            </p>
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-gold to-warm-gold mx-auto mt-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: timing.normal, delay: timing.normal, ease: appleEasing.smooth }}
            />
          </motion.div>

          {/* Capability Areas Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {capabilityAreas.map((area, index) => (
              <motion.div
                key={area.area}
                className="bg-navy-soft/30 backdrop-blur-sm border border-ivory/5 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:border-gold/30 transition-all duration-500"
                variants={itemVariants}
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                transition={{ duration: timing.fast, ease: appleEasing.spring }}
              >
                {/* Area Title */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-ivory mt-2 mb-3">
                    {area.area}
                  </h3>
                  <p className="text-taupe text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-gold/20 via-ivory/10 to-transparent mb-6" />

                {/* Capabilities List */}
                <div className="flex flex-wrap gap-2">
                  {area.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="text-xs uppercase tracking-wider text-light-grey/80 px-4 py-2 border border-ivory/10 rounded-full bg-ivory/5 hover:border-gold/30 hover:text-gold transition-all duration-300"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
            transition={{ delay: stagger.looser }}
          >
            <p className="text-taupe text-sm max-w-2xl mx-auto leading-relaxed">
              These represent domains where I have designed, built, and delivered production systems.
              Technologies are tools used to solve problems — the focus remains on engineering outcomes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}