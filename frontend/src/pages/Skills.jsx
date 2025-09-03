"use client"

import React, { useState } from "react"
import { motion, useInView } from "framer-motion"
import { Star, TrendingUp } from "lucide-react"

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
      className="min-h-screen bg-gradient-to-br from-[#001a3f] via-[#00243f] to-[#002d4f] text-[#AEEEEE] py-20"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          ref={ref}
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] bg-clip-text text-transparent">
              The Hunter's Arsenal
            </h2>
            <p className="text-xl text-[#AEEEEE]/80 max-w-3xl mx-auto">
              A comprehensive toolkit forged through experience, passion, and continuous learning
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Category Tabs - Mobile Optimized */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Mobile: Grid Layout */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeCategory === index
                      ? "bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] text-[#001a3f]"
                      : "bg-[#001a3f]/50 text-[#AEEEEE] hover:bg-[#7FDBFF]/10 border border-[#7FDBFF]/30"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="block">{category.icon}</span>
                  <span className="block mt-1">{category.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Desktop: Flex Layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-4">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === index
                      ? "bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] text-[#001a3f]"
                      : "bg-[#001a3f]/50 text-[#AEEEEE] hover:bg-[#7FDBFF]/10 border border-[#7FDBFF]/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.fullTitle}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                className="bg-gradient-to-br from-[#001a3f]/80 to-[#00243f]/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-[#7FDBFF]/20 hover:border-[#7FDBFF]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7FDBFF]/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Skill Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4">
                  <img
                    src={skill.image || "/placeholder.svg"}
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3 text-[#7FDBFF]">{skill.name}</h3>

                {/* Experience */}
                <div className="flex items-center justify-center mb-3 md:mb-4 text-xs md:text-sm text-[#AEEEEE]/70">
                  <TrendingUp size={12} className="mr-1" />
                  {skill.experience}
                </div>

                {/* Proficiency Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs md:text-sm text-[#AEEEEE]/80">Level</span>
                    <span className="text-xs md:text-sm font-bold text-[#7FDBFF]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#001a3f]/50 rounded-full h-1.5 md:h-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={12}
                      className={`${
                        starIndex < Math.floor(skill.level / 20) ? "text-[#7FDBFF] fill-current" : "text-[#AEEEEE]/30"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
