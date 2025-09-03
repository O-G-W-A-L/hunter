"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { SiX } from "react-icons/si"

const socialLinks = [
  { Icon: Github, href: "https://github.com/O-G-W-A-L", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/jonathan-amos-ogwal-725926285/", label: "LinkedIn" },
  { Icon: SiX, href: "https://x.com/Ogwal_Jonathan", label: "X" },
  { Icon: Mail, href: "mailto:huntertest02@gmail.com", label: "Email" },
]

export default function Footer() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.5 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.footer
      ref={ref}
      className="bg-gradient-to-br from-[#00043f] via-[#001f3f] to-[#00243f] text-[#AEEEEE] py-12 border-t border-[#7FDBFF]/20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] bg-clip-text text-transparent mb-3">
              THE HunteR
            </h3>
            <p className="text-[#AEEEEE]/80 max-w-md mx-auto">
              Crafting digital experiences that solve real-world problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {["about", "skills", "projects", "contact"].map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-[#AEEEEE]/70 hover:text-[#7FDBFF] transition-colors duration-300 capitalize"
              >
                {link}
              </button>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#7FDBFF]/10 rounded-full hover:bg-[#7FDBFF]/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon className="text-[#7FDBFF]" size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-[#7FDBFF]/20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center text-[#AEEEEE]/60 text-sm mb-4 sm:mb-0">
              <span>Made with</span>
              <Heart className="mx-2 text-red-400" size={14} fill="currentColor" />
              <span>© {new Date().getFullYear()} Hunter</span>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-[#7FDBFF]/10 rounded-full hover:bg-[#7FDBFF]/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="text-[#7FDBFF]" size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
