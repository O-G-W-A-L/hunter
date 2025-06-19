"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { SiX } from "react-icons/si"

const socialLinks = [
  { Icon: Github, href: "https://github.com/O-G-W-A-L", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/jonathan-amos-ogwal-725926285/", label: "LinkedIn" },
  { Icon: SiX, href: "https://x.com/Ogwal_Jonathan", label: "X (Twitter)" },
  { Icon: Mail, href: "mailto:huntertest02@gmail.com", label: "Email" },
]

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.5 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.footer
      ref={ref}
      className="relative bg-gradient-to-br from-[#00043f] via-[#001f3f] to-[#00243f] text-[#AEEEEE] py-16 border-t border-[#7FDBFF]/20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #7FDBFF 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #AEEEEE 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] bg-clip-text text-transparent mb-4">
                THE HunteR
              </h3>
              <p className="text-[#AEEEEE]/80 mb-6 max-w-md leading-relaxed">
                Crafting digital experiences that solve real-world problems. Always hunting for the next challenge and
                opportunity to create something extraordinary.
              </p>
              <div className="flex items-center text-[#AEEEEE]/60">
                <span>Made with</span>
                <Heart className="mx-2 text-red-400" size={16} fill="currentColor" />
                <span>and lots of ☕</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold text-[#7FDBFF] mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-[#AEEEEE]/70 hover:text-[#7FDBFF] transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      <span className="w-2 h-2 bg-[#7FDBFF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-xl font-semibold text-[#7FDBFF] mb-4">Let's Connect</h4>
              <div className="space-y-3">
                <p className="text-[#AEEEEE]/70">
                  <span className="block font-medium text-[#AEEEEE]">Email</span>
                  huntertest02@gmail.com
                </p>
                <p className="text-[#AEEEEE]/70">
                  <span className="block font-medium text-[#AEEEEE]">Location</span>
                  Uganda, East Africa
                </p>
                <p className="text-[#AEEEEE]/70">
                  <span className="block font-medium text-[#AEEEEE]">Status</span>
                  <span className="inline-flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Available for projects
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex space-x-6">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#7FDBFF]/10 rounded-full hover:bg-[#7FDBFF]/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon
                    className="text-[#7FDBFF] group-hover:text-[#AEEEEE] transition-colors duration-300"
                    size={20}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#7FDBFF]/20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-[#AEEEEE]/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ogwal Jonathan Amos - Hunter. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <span className="text-[#AEEEEE]/60 text-sm">Built with React & Framer Motion</span>
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-[#7FDBFF]/10 rounded-full hover:bg-[#7FDBFF]/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="text-[#7FDBFF]" size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
