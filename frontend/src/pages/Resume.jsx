"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { DownloadIcon, Briefcase, Calendar, MapPin, Award, Code, GraduationCap } from "lucide-react"

const experiences = [
  {
    role: "Software Engineer",
    company: "Freelance",
    period: "2022 - Present",
    location: "Remote",
    description:
      "Developing custom web applications and solutions for clients worldwide, specializing in React, Node.js, and modern web technologies.",
    achievements: [
      "Built 10+ successful web applications",
      "Maintained 98% client satisfaction rate",
      "Reduced development time by 40% through reusable components",
    ],
  },
  {
    role: "IT Specialist",
    company: "Afraco Co",
    period: "2021 - 2022",
    location: "Uganda",
    description:
      "Managed IT infrastructure and provided technical support for a growing company, ensuring smooth operations and system reliability.",
    achievements: [
      "Improved system uptime to 99.5%",
      "Implemented automated backup solutions",
      "Trained 20+ staff members on new technologies",
    ],
  },
]

const skills = [
  { category: "Frontend", items: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Python", "RESTful APIs"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase"] },
  { category: "Tools", items: ["Git", "Docker", "Linux", "Chrome Extensions"] },
]

const education = [
  {
    degree: "Self-Taught Developer",
    institution: "Online Platforms & Projects",
    period: "2020 - Present",
    description: "Continuous learning through hands-on projects, online courses, and open-source contributions.",
  },
]

export default function Resume() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <div
      id="resume"
      className="min-h-screen bg-gradient-to-br from-[#001f3f] via-[#00243f] to-[#002d4f] text-[#AEEEEE] py-20"
    >
      <div className="w-full px-4 sm:px-8">
        <motion.div
          ref={ref}
          className="w-full max-w-6xl mx-auto"
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
              My Journey
            </h2>
            <p className="text-xl text-[#AEEEEE]/80 max-w-3xl mx-auto">
              A story of continuous growth, learning, and building solutions that matter
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Experience & Education */}
            <div className="lg:col-span-2 space-y-12">
              {/* Experience Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-[#7FDBFF]/10 rounded-full mr-4">
                    <Briefcase className="text-[#7FDBFF]" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#7FDBFF]">Professional Experience</h3>
                </div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="relative bg-gradient-to-br from-[#001f3f]/80 to-[#00243f]/80 backdrop-blur-xl rounded-2xl p-8 border border-[#7FDBFF]/20 hover:border-[#7FDBFF]/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-4 top-8 w-4 h-4 bg-[#7FDBFF] rounded-full border-4 border-[#001f3f]"></div>

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-[#7FDBFF] mb-2">{exp.role}</h4>
                          <p className="text-xl text-[#AEEEEE] font-semibold">{exp.company}</p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <div className="flex items-center text-[#AEEEEE]/70 mb-1">
                            <Calendar size={16} className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-[#AEEEEE]/70">
                            <MapPin size={16} className="mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-[#AEEEEE]/80 mb-4 leading-relaxed">{exp.description}</p>

                      <div>
                        <h5 className="text-lg font-semibold text-[#7FDBFF] mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Award size={16} className="text-[#7FDBFF] mr-3 mt-1 flex-shrink-0" />
                              <span className="text-[#AEEEEE]/80">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-[#7FDBFF]/10 rounded-full mr-4">
                    <GraduationCap className="text-[#7FDBFF]" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#7FDBFF]">Education & Learning</h3>
                </div>

                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-[#001f3f]/80 to-[#00243f]/80 backdrop-blur-xl rounded-2xl p-8 border border-[#7FDBFF]/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-[#7FDBFF] mb-2">{edu.degree}</h4>
                        <p className="text-xl text-[#AEEEEE] font-semibold">{edu.institution}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <div className="flex items-center text-[#AEEEEE]/70">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <p className="text-[#AEEEEE]/80 leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Skills & Download */}
            <div className="space-y-8">
              {/* Skills Section */}
              <motion.div
                className="bg-gradient-to-br from-[#001f3f]/80 to-[#00243f]/80 backdrop-blur-xl rounded-2xl p-8 border border-[#7FDBFF]/20"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#7FDBFF]/10 rounded-full mr-4">
                    <Code className="text-[#7FDBFF]" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#7FDBFF]">Core Skills</h3>
                </div>

                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <h4 className="text-lg font-semibold text-[#AEEEEE] mb-3">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#7FDBFF]/10 text-[#7FDBFF] rounded-full text-sm border border-[#7FDBFF]/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Download Resume */}
              <motion.div
                className="bg-gradient-to-br from-[#7FDBFF]/10 to-[#AEEEEE]/10 rounded-2xl p-8 border border-[#7FDBFF]/30 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h3 className="text-2xl font-bold text-[#7FDBFF] mb-4">Get My Full Resume</h3>
                <p className="text-[#AEEEEE]/80 mb-6">
                  Interested in learning more about my experience and qualifications? Request a detailed copy of my
                  resume.
                </p>
                <motion.a
                  href="mailto:huntertest02@gmail.com?subject=Request%20for%20Resume&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThank%20you."
                  className="inline-flex items-center bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] text-[#001f3f] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#7FDBFF]/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DownloadIcon size={20} className="mr-2" />
                  Request Full Resume
                </motion.a>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {[
                  { label: "Years Experience", value: "4+" },
                  { label: "Projects Completed", value: "10+" },
                  { label: "Technologies", value: "15+" },
                  { label: "Happy Clients", value: "5+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#001f3f]/50 rounded-xl p-4 text-center border border-[#7FDBFF]/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-2xl font-bold text-[#7FDBFF] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#AEEEEE]/70">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
