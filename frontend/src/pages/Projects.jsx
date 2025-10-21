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
    name: "FlipCraft",
    description: "A platform for repurposing content using AI, set to be released on Monday, 8th November, 2025.",
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
      className="min-h-screen bg-gradient-to-br from-[#00243f] via-[#002d4f] to-[#00365f] text-[#AEEEEE] py-20 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          ref={ref}
          className="w-full max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            transition={{ delay: stagger.tight }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] bg-clip-text text-transparent">
              The Hunter's Projects
            </h2>
            <p className="text-xl text-[#AEEEEE]/80 max-w-3xl mx-auto">
              Innovative solutions crafted with passion, precision, and purpose
            </p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] mx-auto rounded-full mt-6"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: timing.normal, delay: timing.normal, ease: appleEasing.smooth }}
            />
          </motion.div>

          {/* Category Filter - Mobile Optimized */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
            transition={{ delay: stagger.normal }}
          >
            {/* Mobile: Horizontal Scroll */}
            <div className="sm:hidden">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <motion.button
                    key={category.full}
                    onClick={() => setSelectedCategory(category.full)}
                    className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                      selectedCategory === category.full
                        ? "bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] text-[#001F3F]"
                        : "bg-[#001F3F]/50 text-[#AEEEEE] hover:bg-[#7FDBFF]/10 border border-[#7FDBFF]/30"
                    }`}
                    whileHover={prefersReducedMotion ? {} : hoverLift}
                    whileTap={prefersReducedMotion ? {} : pressAnimation}
                    animate={{
                      scale: selectedCategory === category.full ? 1.05 : 1
                    }}
                    transition={{ duration: timing.fast, ease: appleEasing.spring }}
                  >
                    {category.short}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Desktop: Flex Layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.full}
                  onClick={() => setSelectedCategory(category.full)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.full
                      ? "bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] text-[#001F3F]"
                      : "bg-[#001F3F]/50 text-[#AEEEEE] hover:bg-[#7FDBFF]/10 border border-[#7FDBFF]/30"
                  }`}
                  whileHover={prefersReducedMotion ? {} : hoverLift}
                  whileTap={prefersReducedMotion ? {} : pressAnimation}
                  animate={{
                    scale: selectedCategory === category.full ? 1.05 : 1
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-[#001F3F]/80 to-[#00243f]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-[#7FDBFF]/20 hover:border-[#7FDBFF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7FDBFF]/10"
                whileHover={prefersReducedMotion ? {} : hoverLift}
                transition={{ duration: timing.fast, ease: appleEasing.spring }}
              >
                {/* Project Preview */}
                <div className="relative h-48 overflow-hidden">
                  {project.isLive ? (
                    <div className="relative w-full h-full">
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : project.status === "Beta"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : project.status === "Development"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Live Indicator for iframe projects */}
                  {project.isLive && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-semibold flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-1 animate-pulse"></span>
                        LIVE
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-[#001F3F]/90 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: timing.fast, ease: appleEasing.smooth }}
                  >
                    <div className="flex space-x-4">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="p-3 bg-[#7FDBFF]/20 rounded-full hover:bg-[#7FDBFF]/30 transition-colors duration-300"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                        whileTap={prefersReducedMotion ? {} : pressAnimation}
                        transition={{ duration: timing.fast, ease: appleEasing.spring }}
                      >
                        <Eye className="text-[#7FDBFF]" size={20} />
                      </motion.button>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#7FDBFF]/20 rounded-full hover:bg-[#7FDBFF]/30 transition-colors duration-300"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: -5 }}
                        whileTap={prefersReducedMotion ? {} : pressAnimation}
                        transition={{ duration: timing.fast, ease: appleEasing.spring }}
                        onClick={(e) => {
                          if (project.showReleaseMessage) {
                            e.preventDefault();
                            alert("To be released on 8th November, 2025. Stay tuned!");
                          }
                        }}
                      >
                        <ExternalLink className="text-[#7FDBFF]" size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#7FDBFF]">{project.name}</h3>
                    <span className="text-sm text-[#AEEEEE]/60">{project.category}</span>
                  </div>

                  <p className="text-[#AEEEEE]/80 mb-4">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-1 text-xs text-[#AEEEEE]/70">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Star size={10} className="text-[#7FDBFF] mr-1" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[#0A4D68]/60 text-[#7FDBFF] text-xs px-3 py-1 rounded-full border border-[#7FDBFF]/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-[#AEEEEE]/60 px-2 py-1">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] text-[#001F3F] px-4 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    whileHover={prefersReducedMotion ? {} : hoverLift}
                    whileTap={prefersReducedMotion ? {} : pressAnimation}
                    transition={{ duration: timing.fast, ease: appleEasing.spring }}
                    onClick={(e) => {
                      if (project.showReleaseMessage) {
                        e.preventDefault();
                        alert("To be released on 8th November, 2025. Stay tuned!");
                      }
                    }}
                  >
                    Dive In
                    <ExternalLink size={16} className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="bg-gradient-to-br from-[#001F3F] to-[#00243f] rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-[#7FDBFF]/30"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#7FDBFF] mb-2">{selectedProject.name}</h3>
                        <p className="text-[#AEEEEE]/70">{selectedProject.category}</p>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-[#AEEEEE] hover:text-[#7FDBFF] transition-colors duration-300"
                      >
                        ✕
                      </button>
                    </div>

                    {selectedProject.isLive ? (
                      <div className="relative w-full h-64 mb-4">
                        <iframe
                          src={selectedProject.preview}
                          title={`${selectedProject.name} live preview`}
                          className="w-full h-full border-0 rounded-2xl"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <img
                        src={selectedProject.preview || "/placeholder.svg"}
                        alt={`${selectedProject.name} preview`}
                        className="w-full h-48 object-cover rounded-2xl mb-4"
                      />
                    )}

                    <p className="text-[#AEEEEE]/80 mb-4">{selectedProject.description}</p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-[#7FDBFF] mb-2">Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProject.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Star className="text-[#7FDBFF] mr-2" size={12} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#7FDBFF] mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, idx) => (
                          <span key={idx} className="bg-[#0A4D68]/60 text-[#7FDBFF] px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] text-[#001F3F] px-6 py-3 rounded-full font-bold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                      onClick={(e) => {
                        if (selectedProject.showReleaseMessage) {
                          e.preventDefault();
                          alert("To be released on 8th November, 2025. Stay tuned!");
                        }
                      }}
                    >
                      <ExternalLink className="mr-2" size={20} />
                      Visit Project
                    </a>
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
