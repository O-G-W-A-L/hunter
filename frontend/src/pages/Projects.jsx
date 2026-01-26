"use client"

import React, { useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Eye, Star } from "lucide-react"
import {
  appleEasing,
  timing,
  stagger,
  containerVariants,
  itemVariants,
  hoverLift,
  pressAnimation,
  prefersReducedMotion
} from "../utils/animations"

const projects = [
  {
    name: "CropPay",
    description: "Farmers co-own supply chain infrastructure.",
    link: "https://crop-pay.vercel.app",
    tags: ["React", "AI", "Farmers", "Web App"],
    category: "Web Application",
    status: "Live",
    features: ["Supply chain transparency", "Farmer ownership", "Global market access", "Village processing"],
    preview: "https://crop-pay.vercel.app",
    isLive: true,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Trace-It",
    description:
      "A comprehensive web application for tracking and managing lost property with real-time updates and notifications.",
    link: "https://trace-it-tau.vercel.app/",
    tags: ["React", "Firebase", "Real-time", "Python"],
    category: "Web Application",
    status: "Live",
    features: ["Real-time tracking", "Community network", "Push notifications", "Smart matching"],
    preview: "https://trace-it-tau.vercel.app/",
    isLive: true,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Afraco",
    description: "A tech company website offering innovative solutions and services.",
    link: "https://afraco.vercel.app/",
    tags: ["React", "Vercel", "Tech Company"],
    category: "Web Application",
    status: "Live",
    features: ["Company portfolio", "Service showcase", "Contact forms", "Responsive design"],
    preview: "https://afraco.vercel.app/",
    isLive: true,
    color: "from-teal-500 to-green-500",
  },
  {
    name: "FlipCraft",
    description: "A platform for repurposing content using AI, set to be released soon.",
    link: "#",
    tags: ["React", "AI", "Content Management", "Web App"],
    category: "Web Application",
    status: "Development",
    features: ["Content repurposing", "AI-powered transformation", "Multi-format support", "User-friendly interface"],
    preview: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center",
    isLive: false,
    color: "from-blue-500 to-indigo-500",
    showReleaseMessage: true
  },
  {
    name: "FreeMind",
    description: "An intuitive mind mapping tool to help users brainstorm ideas and organize thoughts effectively.",
    link: "https://github.com/O-G-W-A-L/FreeMind.git",
    tags: ["JavaScript", "Firebase", "MongoDB", "React"],
    category: "Productivity Tool",
    status: "Development",
    features: ["Mind mapping", "Real-time collaboration", "Export options", "Templates"],
    preview: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop&crop=center",
    isLive: false,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "TabSmart",
    description: "A browser extension for managing tabs and improving your browsing experience.",
    link: "https://github.com/O-G-W-A-L/TabSmart.git",
    tags: ["Chrome Extension", "JavaScript", "Browser API"],
    category: "Browser Extension",
    status: "Beta",
    features: ["Tab grouping", "Memory optimization", "Usage analytics", "Custom shortcuts"],
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
    isLive: false,
    color: "from-green-500 to-teal-500",
  },
  {
    name: "AdFriend",
    description: "A chrome browser extension that intercepts and replaces ads with positive contents.",
    link: "https://github.com/O-G-W-A-L/AdFriend.git",
    tags: ["Chrome Extension", "JavaScript", "React", "HTML"],
    category: "Digital Wellness",
    status: "Beta",
    features: ["Ad replacement", "Positive content", "Customizable themes", "Wellness tracking"],
    preview: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
    isLive: false,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "The Maze Game",
    description: "A retro maze 3D game with raycasting.",
    link: "https://github.com/O-G-W-A-L/the-maze_project.git",
    tags: ["C", "SDL2"],
    category: "Game Development",
    status: "Complete",
    features: ["3D raycasting", "Smooth gameplay", "Retro aesthetics", "Performance optimized"],
    preview: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop&crop=center",
    isLive: false,
    color: "from-indigo-500 to-purple-500",
  },
]

const categories = [
  { short: "All", full: "All" },
  { short: "Web App", full: "Web Application" },
  { short: "Extension", full: "Browser Extension" },
  { short: "Game", full: "Game Development" },
  { short: "Tool", full: "Productivity Tool" },
  { short: "Wellness", full: "Digital Wellness" },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div
      id="projects"
      className="min-h-screen bg-prussian text-ivory section-luxury relative overflow-x-hidden grain"
    >
      {/* Old Money Editorial Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 40% 60%, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 60% 40%, rgba(139, 125, 107, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 80px 80px'
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
              The Hunter's Projects
            </h2>
            <p className="text-xl md:text-2xl text-light-grey max-w-4xl mx-auto leading-relaxed">
              Innovative solutions crafted with passion, precision, and purpose
            </p>
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-gold to-warm-gold mx-auto mt-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: timing.normal, delay: timing.normal, ease: appleEasing.smooth }}
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
            transition={{ delay: stagger.normal }}
          >
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.full}
                  onClick={() => setSelectedCategory(category.full)}
                  className={`px-6 py-4 rounded-2xl font-medium text-sm md:text-base transition-all duration-400 ${selectedCategory === category.full
                    ? "bg-ivory text-prussian shadow-natural border-2 border-taupe"
                    : "bg-ivory/10 text-taupe hover:text-ivory hover:bg-ivory shadow-soft border border-transparent"
                    }`}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -1 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  animate={{
                    scale: selectedCategory === category.full ? 1.02 : 1
                  }}
                  transition={{ duration: timing.fast, ease: appleEasing.spring }}
                >
                  {category.full}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                className="group bg-navy-soft/30 backdrop-blur-sm border border-ivory/5 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:border-gold/30 transition-all duration-500"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -4 }}
                transition={{ duration: timing.fast, ease: appleEasing.spring }}
              >
                {/* Project Preview */}
                <div className="relative h-64 overflow-hidden border-b border-ivory/5">
                  {project.isLive ? (
                    <div className="relative w-full h-full bg-taupe/20">
                      <iframe
                        src={project.preview}
                        title={`${project.name} live preview`}
                        className="w-full h-full border-0 pointer-events-none scale-50 origin-top-left"
                        style={{
                          width: "200%",
                          height: "200%",
                          transform: "scale(0.5)",
                          transformOrigin: "top left",
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-transparent cursor-pointer" />
                    </div>
                  ) : (
                    <img
                      src={project.preview || "/placeholder.svg"}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold border backdrop-blur-md shadow-sm ${project.status === "Live"
                        ? "bg-green-900/40 text-green-300 border-green-500/30"
                        : project.status === "Beta"
                          ? "bg-yellow-900/40 text-yellow-300 border-yellow-500/30"
                          : project.status === "Development"
                            ? "bg-blue-900/40 text-blue-300 border-blue-500/30"
                            : "bg-purple-900/40 text-purple-300 border-purple-500/30"
                        }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Live Indicator for iframe projects */}
                  {project.isLive && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-red-900/60 text-red-200 border border-red-500/30 rounded-full text-[10px] font-bold tracking-wider flex items-center backdrop-blur-md">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                        LIVE
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-prussian/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: timing.fast, ease: appleEasing.smooth }}
                  >
                    <div className="flex space-x-6">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="group/btn p-4 border border-ivory/20 rounded-full hover:border-gold hover:bg-gold/10 transition-all duration-300"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                      >
                        <Eye className="text-ivory group-hover/btn:text-gold transition-colors duration-300" size={24} />
                      </motion.button>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn p-4 border border-ivory/20 rounded-full hover:border-gold hover:bg-gold/10 transition-all duration-300"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                        onClick={(e) => {
                          if (project.showReleaseMessage) {
                            e.preventDefault()
                            alert("Set to be released soon. Stay tuned!")
                          }
                        }}
                      >
                        <ExternalLink className="text-ivory group-hover/btn:text-gold transition-colors duration-300" size={24} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-8 relative">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-ivory/10 to-transparent" />

                  <div className="flex flex-col mb-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-gold mb-2 font-medium">{project.category}</span>
                    <h3 className="text-2xl font-serif font-medium text-ivory leading-tight group-hover:text-gold transition-colors duration-300">{project.name}</h3>
                  </div>

                  <p className="text-taupe leading-relaxed mb-6 font-light">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6 space-y-3">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-light-grey/80">
                        <Star size={12} className="text-gold/70 mr-3 flex-shrink-0" fill="currentColor" />
                        <span className="tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] uppercase tracking-wider text-taupe px-3 py-1 border border-taupe/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-taupe/50 px-2 py-1">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group/btn relative bg-ivory text-prussian border border-ivory px-6 py-4 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(245,243,239,0.2)] block text-center"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    onClick={(e) => {
                      if (project.showReleaseMessage) {
                        e.preventDefault()
                        alert("Set to be released soon. Stay tuned!")
                      }
                    }}
                  >
                    <span className="relative z-10 font-serif tracking-[0.1em] uppercase text-xs font-bold flex items-center justify-center gap-2">
                      View Project
                      <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ease-out" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 bg-prussian/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="bg-navy-soft border border-ivory/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-2 block">{selectedProject.category}</span>
                        <h3 className="text-3xl md:text-4xl font-serif font-medium text-ivory mb-2">{selectedProject.name}</h3>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-taupe hover:text-ivory transition-colors duration-300 p-2"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {selectedProject.isLive ? (
                      <div className="relative w-full h-80 mb-8 bg-black/20 rounded-2xl overflow-hidden border border-ivory/5">
                        <iframe
                          src={selectedProject.preview}
                          title={`${selectedProject.name} live preview`}
                          className="w-full h-full border-0"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <img
                        src={selectedProject.preview || "/placeholder.svg"}
                        alt={`${selectedProject.name} preview`}
                        className="w-full h-80 object-cover rounded-2xl mb-8 border border-ivory/5"
                      />
                    )}

                    <p className="text-light-grey mb-8 leading-relaxed text-lg font-light">{selectedProject.description}</p>

                    <div className="mb-8">
                      <h4 className="text-xl font-serif font-medium text-ivory mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-taupe">
                            <Star className="text-gold mr-3 flex-shrink-0" size={16} fill="currentColor" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xl font-serif font-medium text-ivory mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tags.map((tag, idx) => (
                          <span key={idx} className="bg-ivory/5 text-ivory px-4 py-2 rounded-full text-xs font-medium border border-ivory/10 tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full group relative bg-ivory text-prussian border border-ivory px-8 py-5 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,243,239,0.3)] block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        if (selectedProject.showReleaseMessage) {
                          e.preventDefault()
                          alert("Set to be released soon. Stay tuned!")
                        }
                      }}
                    >
                      <span className="relative z-10 font-serif tracking-[0.1em] uppercase text-sm font-bold flex items-center justify-center gap-2">
                        Visit Project
                        <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                      </span>
                      <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
