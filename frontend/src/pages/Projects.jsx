"use client"

import React, { useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Eye, ChevronDown } from "lucide-react"
import {
  appleEasing,
  timing,
  stagger,
  containerVariants,
  itemVariants,
  prefersReducedMotion
} from "../utils/animations"

const projectCategories = [
  { id: "all", label: "All Work" },
  { id: "products", label: "Products & Ventures" },
  { id: "engineering", label: "Engineering Work" },
]

const ProductIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const EngineeringIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L18 6V14L10 18L2 14V6L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M10 10L18 6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 10L2 6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 10V18" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const projects = [
  // ===== PRODUCTS & VENTURES =====
  {
    name: "CropPay",
    category: "products",
    problem: "Smallholder farmers lack access to supply chain infrastructure and global markets. Traditional models exclude producers from value they create.",
    solution: "A fintech platform enabling farmers to co-own supply chain infrastructure, access global markets, and retain value through village-level processing and transparent trade.",
    engineeringScope: "Supply chain transparency systems, farmer ownership registry, global market access infrastructure, village processing coordination.",
    technologies: ["React", "Next.js", "AI Integration", "Payment Systems"],
    status: "Live Platform",
    statusColor: "text-green-300 border-green-500/30 bg-green-900/40",
    link: "https://crop-pay.vercel.app",
    isLive: true,
    features: ["Supply chain transparency", "Farmer ownership model", "Global market access", "Village processing infrastructure"],
  },
  {
    name: "TraceIt",
    category: "products",
    problem: "Lost property recovery is fragmented and inefficient. No centralized system exists for tracking, matching, and recovering lost items across communities.",
    solution: "A comprehensive web application for tracking and managing lost property with real-time updates, community network matching, and push notifications.",
    engineeringScope: "Real-time tracking engine, community-based matching algorithm, push notification infrastructure, cross-platform accessibility.",
    technologies: ["React", "Firebase", "Real-time Systems", "Python"],
    status: "Live Platform",
    statusColor: "text-green-300 border-green-500/30 bg-green-900/40",
    link: "https://trace-it-tau.vercel.app/",
    isLive: true,
    features: ["Real-time tracking", "Community network", "Push notifications", "Smart matching algorithm"],
  },
  {
    name: "FlipCraft",
    category: "products",
    problem: "Content creators spend excessive time repurposing content across formats and platforms. Existing tools lack intelligent transformation capabilities.",
    solution: "An AI-powered content repurposing platform that transforms content across multiple formats while preserving message integrity and brand voice.",
    engineeringScope: "AI-powered content transformation engine, multi-format conversion pipeline, user-friendly interface for content management.",
    technologies: ["React", "AI Integration", "Content Management", "Web App"],
    status: "Completed MVP",
    statusColor: "text-purple-300 border-purple-500/30 bg-purple-900/40",
    link: "#",
    isLive: false,
    showReleaseMessage: true,
    features: ["Content repurposing", "AI-powered transformation", "Multi-format support", "Brand voice preservation"],
  },
  {
    name: "Daktiva",
    category: "products",
    problem: "Healthcare access in underserved regions is limited by fragmented systems, lack of patient data portability, and inefficient provider workflows.",
    solution: "A complete healthcare platform with a polished frontend and fully implemented backend architecture designed to connect patients with providers and streamline clinical operations.",
    engineeringScope: "Full healthcare platform architecture including patient management, provider workflows, appointment systems, and clinical data management. Frontend completed with backend architecture implemented and ready for deployment.",
    technologies: ["React", "TypeScript", "Backend Architecture", "Healthcare APIs"],
    status: "Completed Platform",
    statusColor: "text-purple-300 border-purple-500/30 bg-purple-900/40",
    details: "Backend Not Publicly Hosted",
    link: "#",
    isLive: false,
    features: ["Patient management", "Provider workflows", "Appointment scheduling", "Clinical data management"],
  },
  {
    name: "Afraco",
    category: "products",
    problem: "Technology companies need professional digital presence that communicates their capabilities and services effectively to potential clients.",
    solution: "A technology company website showcasing innovative solutions and services with a focus on professional presentation and client engagement.",
    engineeringScope: "Company portfolio system, service showcase, contact management, responsive cross-device design.",
    technologies: ["React", "Vercel", "Responsive Design", "Web Development"],
    status: "Live Platform",
    statusColor: "text-green-300 border-green-500/30 bg-green-900/40",
    link: "https://afraco.vercel.app/",
    isLive: true,
    features: ["Company portfolio", "Service showcase", "Contact forms", "Responsive design"],
  },

  // ===== ENGINEERING WORK =====
  {
    name: "Pharmacy Management Platform",
    category: "engineering",
    problem: "Pharmacies operate with disjointed systems for inventory, dispensing, supplier management, and compliance tracking. Manual processes lead to stockouts, expiry waste, and operational inefficiency.",
    solution: "A comprehensive pharmacy operations platform built to manage inventory, dispensing workflows, supplier relationships, stock tracking, expiry monitoring, reporting, and day-to-day business operations.",
    engineeringScope: "Full-stack inventory management system, dispensing workflow engine, supplier relationship management, real-time stock tracking, expiry monitoring, operational reporting.",
    technologies: ["FastAPI", "Django", "PostgreSQL", "Inventory Systems", "Reporting"],
    status: "Production System",
    statusColor: "text-green-300 border-green-500/30 bg-green-900/40",
    details: "Private Deployment",
    link: "#",
    isLive: false,
    features: ["Inventory management", "Dispensing workflows", "Supplier management", "Expiry monitoring", "Operational reporting"],
  },
  {
    name: "Dukaa",
    category: "engineering",
    problem: "Independent merchants lack the infrastructure to operate multi-vendor marketplaces, manage product catalogs, process orders, and handle marketplace operations efficiently.",
    solution: "Multi-vendor commerce infrastructure enabling merchants, storefront management, product catalog management, orders, and marketplace operations.",
    engineeringScope: "Multi-vendor architecture, storefront management system, product catalog infrastructure, order processing pipeline, marketplace operations.",
    technologies: ["React", "Node.js", "PostgreSQL", "Commerce Systems"],
    status: "Completed MVP",
    statusColor: "text-purple-300 border-purple-500/30 bg-purple-900/40",
    link: "#",
    isLive: false,
    features: ["Multi-vendor support", "Storefront management", "Product catalog", "Order processing", "Marketplace operations"],
  },
  {
    name: "FreeMind",
    category: "engineering",
    problem: "Teams and individuals lack intuitive tools for collaborative brainstorming and structured thinking that work in real-time across distributed environments.",
    solution: "An intuitive mind mapping tool enabling users to brainstorm ideas, organize thoughts, and collaborate in real-time with export capabilities.",
    engineeringScope: "Real-time collaboration engine, mind mapping data structure, export pipeline supporting multiple formats, template system.",
    technologies: ["JavaScript", "Firebase", "MongoDB", "React"],
    status: "Completed MVP",
    statusColor: "text-purple-300 border-purple-500/30 bg-purple-900/40",
    link: "https://github.com/O-G-W-A-L/FreeMind.git",
    isLive: false,
    features: ["Mind mapping", "Real-time collaboration", "Export options", "Template library"],
  },
  {
    name: "TabSmart",
    category: "engineering",
    problem: "Browser tab overload reduces productivity and consumes memory. Users lack intelligent tools to manage, group, and optimize their browsing sessions.",
    solution: "A browser extension for intelligent tab management, grouping, memory optimization, and usage analytics to improve browsing efficiency.",
    engineeringScope: "Chrome extension architecture, tab grouping algorithm, memory optimization engine, usage analytics, custom shortcut system.",
    technologies: ["Chrome Extension", "JavaScript", "Browser API", "Performance Optimization"],
    status: "Beta",
    statusColor: "text-yellow-300 border-yellow-500/30 bg-yellow-900/40",
    link: "https://github.com/O-G-W-A-L/TabSmart.git",
    isLive: false,
    features: ["Tab grouping", "Memory optimization", "Usage analytics", "Custom shortcuts"],
  },
  {
    name: "AdFriend",
    category: "engineering",
    problem: "Digital advertisements are intrusive and detract from user experience. Users want control over their browsing environment without completely blocking content.",
    solution: "A browser extension that intercepts and replaces advertisements with positive, customizable content to improve digital wellness.",
    engineeringScope: "Ad interception and replacement engine, content delivery system, customizable theme framework, wellness tracking.",
    technologies: ["Chrome Extension", "JavaScript", "React", "Content Filtering"],
    status: "Beta",
    statusColor: "text-yellow-300 border-yellow-500/30 bg-yellow-900/40",
    link: "https://github.com/O-G-W-A-L/AdFriend.git",
    isLive: false,
    features: ["Ad replacement", "Positive content delivery", "Customizable themes", "Wellness tracking"],
  },
  {
    name: "The Maze Game",
    category: "engineering",
    problem: "Understanding 3D rendering and raycasting fundamentals requires building from scratch. Existing engines abstract away the core computer graphics principles.",
    solution: "A retro 3D maze game built with raycasting technology from the ground up using C and SDL2, demonstrating low-level graphics programming capability.",
    engineeringScope: "Custom raycasting engine, 3D rendering pipeline, game loop architecture, performance optimization at the C level.",
    technologies: ["C", "SDL2", "Raycasting", "Game Engine"],
    status: "Complete",
    statusColor: "text-purple-300 border-purple-500/30 bg-purple-900/40",
    link: "https://github.com/O-G-W-A-L/the-maze_project.git",
    isLive: false,
    features: ["3D raycasting engine", "Smooth gameplay", "Retro aesthetics", "Performance optimized"],
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const productsCount = projects.filter(p => p.category === "products").length
  const engineeringCount = projects.filter(p => p.category === "engineering").length

  return (
    <div
      id="projects"
      className="min-h-screen bg-prussian text-ivory section-luxury relative overflow-x-hidden grain"
    >
      {/* Editorial Background Pattern */}
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
            className="text-center mb-16"
            variants={itemVariants}
            transition={{ delay: stagger.tight }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 text-ivory tracking-tight">
              Built Systems
            </h2>
            <p className="text-xl md:text-2xl text-light-grey max-w-4xl mx-auto leading-relaxed">
              Products shipped, platforms deployed, and systems operating in production.
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
            className="mb-16 relative"
            variants={itemVariants}
            transition={{ delay: stagger.normal }}
          >
            <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar snap-x snap-mandatory px-6 md:px-0 -mx-6 md:mx-0 md:flex-wrap md:justify-center gap-3 md:gap-4 scroll-smooth">
              {projectCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 whitespace-nowrap snap-center shrink-0 ${
                    selectedCategory === category.id
                      ? "text-prussian bg-ivory shadow-[0_0_20px_rgba(245,243,239,0.3)]"
                      : "text-taupe hover:text-ivory bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-gold/5"
                  }`}
                  whileHover={prefersReducedMotion ? {} : { y: -2 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {selectedCategory === category.id && (
                      <motion.span
                        layoutId="activeProjectDot"
                        className="w-1.5 h-1.5 rounded-full bg-gold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {category.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                className="group bg-navy-soft/30 backdrop-blur-sm border border-ivory/5 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:border-gold/30 transition-all duration-500"
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                transition={{ duration: timing.fast, ease: appleEasing.spring }}
              >
                {/* Content */}
                <div className="p-8 relative">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-ivory/10 to-transparent" />

                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    {project.category === "products" ? (
                      <ProductIcon />
                    ) : (
                      <EngineeringIcon />
                    )}
                    <span className="text-xs uppercase tracking-[0.15em] text-taupe font-medium">
                      {project.category === "products" ? "Product" : "Engineering"}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-ivory leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Problem */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70 font-medium">Problem</span>
                    <p className="text-taupe text-sm leading-relaxed mt-1">{project.problem}</p>
                  </div>

                  {/* Solution (expandable) */}
                  <div className="mb-4">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
                      className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold/70 font-medium hover:text-gold transition-colors duration-300"
                    >
                      Solution
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${expandedProject === project.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedProject === project.name && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: appleEasing.smooth }}
                          className="text-taupe text-sm leading-relaxed mt-1 overflow-hidden"
                        >
                          {project.solution}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    {expandedProject !== project.name && (
                      <p className="text-taupe/50 text-xs mt-1">Click to expand</p>
                    )}
                  </div>

                  {/* Engineering Scope */}
                  <div className="mb-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-taupe/60 font-medium">Scope</span>
                    <p className="text-light-grey text-sm leading-relaxed mt-1">{project.engineeringScope}</p>
                  </div>

                  {/* Status */}
                  <div className="mb-5">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium border ${project.statusColor}`}>
                      {project.status}
                    </span>
                    {project.details && (
                      <span className="ml-2 text-[10px] uppercase tracking-wider text-taupe/60">
                        {project.details}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-light-grey/80">
                        <span className="w-1 h-1 rounded-full bg-gold/60 mr-3 flex-shrink-0" />
                        <span className="tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[10px] uppercase tracking-wider text-taupe px-3 py-1 border border-taupe/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.link && project.link !== "#" && (
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
                          alert("In development. Details available on request.")
                        }
                      }}
                    >
                      <span className="relative z-10 font-serif tracking-[0.1em] uppercase text-xs font-bold flex items-center justify-center gap-2">
                        View Details
                        <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ease-out" />
                    </motion.a>
                  )}

                  {/* Private Project Note */}
                  {(!project.link || project.link === "#") && (
                    <div className="text-center py-3 border border-ivory/5 rounded-xl bg-ivory/5">
                      <span className="text-[10px] uppercase tracking-wider text-taupe/60">
                        {project.details || "Details Available on Request"}
                      </span>
                    </div>
                  )}
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
                        <div className="flex items-center gap-2 mb-2">
                          {selectedProject.category === "products" ? <ProductIcon /> : <EngineeringIcon />}
                          <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium">
                            {selectedProject.category === "products" ? "Product" : "Engineering"}
                          </span>
                        </div>
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

                    {/* Status */}
                    <div className="mb-8">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-medium border ${selectedProject.statusColor}`}>
                        {selectedProject.status}
                      </span>
                      {selectedProject.details && (
                        <span className="ml-3 text-[10px] uppercase tracking-wider text-taupe/60">
                          {selectedProject.details}
                        </span>
                      )}
                    </div>

                    {/* Problem */}
                    <div className="mb-8">
                      <h4 className="text-lg font-serif font-medium text-ivory mb-3">Problem</h4>
                      <p className="text-light-grey leading-relaxed">{selectedProject.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-8">
                      <h4 className="text-lg font-serif font-medium text-ivory mb-3">Solution</h4>
                      <p className="text-light-grey leading-relaxed">{selectedProject.solution}</p>
                    </div>

                    {/* Engineering Scope */}
                    <div className="mb-8">
                      <h4 className="text-lg font-serif font-medium text-ivory mb-3">Engineering Scope</h4>
                      <p className="text-light-grey leading-relaxed">{selectedProject.engineeringScope}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-serif font-medium text-ivory mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-taupe">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-10">
                      <h4 className="text-lg font-serif font-medium text-ivory mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-ivory/5 text-ivory px-4 py-2 rounded-full text-xs font-medium border border-ivory/10 tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.link && selectedProject.link !== "#" && (
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full group relative bg-ivory text-prussian border border-ivory px-8 py-5 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,243,239,0.3)] block text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 font-serif tracking-[0.1em] uppercase text-sm font-bold flex items-center justify-center gap-2">
                          Visit Project
                          <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                        </span>
                        <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                      </motion.a>
                    )}
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