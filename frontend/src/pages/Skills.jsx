"use client"

import React, { useState } from "react"
import { motion, useInView } from "framer-motion"
import { Star, TrendingUp } from "lucide-react"
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

const skillCategories = [
  {
    title: "Frontend",
    fullTitle: "Frontend Development",
    icon: "🎨",
    skills: [
      {
        name: "React.js",
        level: 90,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        experience: "2+ years",
      },
      {
        name: "JavaScript",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        experience: "3+ years",
      },
      {
        name: "HTML/CSS",
        level: 95,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        experience: "5+ years",
      },
      {
        name: "Tailwind CSS",
        level: 88,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        experience: "2+ years",
      },
    ],
  },
  {
    title: "Backend",
    fullTitle: "Backend Development",
    icon: "⚙️",
    skills: [
      {
        name: "Node.js",
        level: 82,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        experience: "2+ years",
      },
      {
        name: "Express.js",
        level: 80,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        experience: "2+ years",
      },
      {
        name: "Python",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        experience: "4+ years",
      },
      {
        name: "RESTful APIs",
        level: 88,
        image: "https://img.icons8.com/color/48/api-settings.png",
        experience: "2+ years",
      },
    ],
  },
  {
    title: "Database",
    fullTitle: "Database & Cloud",
    icon: "☁️",
    skills: [
      {
        name: "MongoDB",
        level: 78,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        experience: "2+ years",
      },
      {
        name: "PostgreSQL",
        level: 75,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        experience: "2+ years",
      },
      {
        name: "Firebase",
        level: 82,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        experience: "3+ years",
      },
      {
        name: "Docker",
        level: 70,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        experience: "1+ years",
      },
    ],
  },
  {
    title: "Tools",
    fullTitle: "Tools & Others",
    icon: "🛠️",
    skills: [
      {
        name: "Git & GitHub",
        level: 90,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        experience: "5+ years",
      },
      {
        name: "Linux",
        level: 85,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        experience: "3+ years",
      },
      {
        name: "Chrome Extensions",
        level: 88,
        image: "https://img.icons8.com/color/48/chrome.png",
        experience: "1+ years",
      },
      {
        name: "Creative Writing",
        level: 95,
        image: "https://img.icons8.com/ios-filled/50/ffffff/pen.png",
        experience: "6+ years",
      },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <div
      id="skills"
      className="min-h-screen bg-prussian text-ivory section-luxury relative overflow-x-hidden grain"
    >
      {/* Old Money Editorial Background Pattern */}
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
              The Hunter's Arsenal
            </h2>
            <p className="text-xl md:text-2xl text-light-grey max-w-4xl mx-auto leading-relaxed">
              A comprehensive toolkit forged through experience, passion, and continuous learning
            </p>
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-gold to-warm-gold mx-auto mt-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: timing.normal, delay: timing.normal, ease: appleEasing.smooth }}
            />
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
            transition={{ delay: stagger.normal }}
          >
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-4 rounded-2xl font-medium text-sm md:text-base transition-all duration-400 ${activeCategory === index
                    ? "bg-ivory text-prussian shadow-natural border-2 border-taupe"
                    : "bg-ivory/10 text-taupe hover:text-ivory hover:bg-ivory shadow-soft border border-transparent"
                    }`}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -1 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  animate={{
                    scale: activeCategory === index ? 1.02 : 1
                  }}
                  transition={{ duration: timing.fast, ease: appleEasing.spring }}
                >
                  <span className="mr-3 text-lg">{category.icon}</span>
                  <span className="hidden sm:inline">{category.fullTitle}</span>
                  <span className="sm:hidden">{category.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                className="group bg-navy-soft/30 backdrop-blur-sm border border-ivory/5 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:border-gold/30 transition-all duration-500"
                variants={itemVariants}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -4 }}
                transition={{ duration: timing.fast, ease: appleEasing.spring }}
              >
                {/* Skill Icon */}
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: timing.fast, ease: appleEasing.spring }}
                >
                  <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={skill.image || "/placeholder.svg"}
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain relative z-10 drop-shadow-md"
                  />
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-xl md:text-2xl font-serif font-medium text-center mb-2 text-ivory group-hover:text-gold transition-colors duration-300">{skill.name}</h3>

                {/* Experience */}
                <div className="flex items-center justify-center mb-6 text-xs uppercase tracking-[0.1em] text-taupe font-medium">
                  <TrendingUp size={14} className="mr-2 text-gold" />
                  {skill.experience}
                </div>

                {/* Proficiency Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-taupe">Proficiency</span>
                    <span className="text-xs font-medium text-gold font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-ivory/5 rounded-full h-1.5 border border-ivory/5 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold to-warm-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: timing.slower,
                        delay: index * stagger.tight,
                        ease: appleEasing.smooth
                      }}
                    />
                  </div>
                </div>

                {/* Star Rating */}
                <motion.div
                  className="flex justify-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: timing.normal,
                    delay: timing.slower + index * stagger.tight,
                    ease: appleEasing.smooth
                  }}
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.div
                      key={starIndex}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        duration: timing.fast,
                        delay: timing.slower + index * stagger.tight + starIndex * 0.1,
                        ease: appleEasing.spring
                      }}
                    >
                      <Star
                        size={14}
                        className={`${starIndex < Math.floor(skill.level / 20)
                          ? "text-gold fill-gold drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]"
                          : "text-taupe/20"
                          }`}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
