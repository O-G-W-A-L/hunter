"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { SiX } from "react-icons/si"

const socialLinks = [
  { Icon: Github, href: "https://github.com/O-G-W-A-L", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/jonathan-amos-ogwal-725926285/", label: "LinkedIn" },
  { Icon: SiX, href: "https://x.com/Ogwal_Jonathan", label: "X" },
  { Icon: Mail, href: "mailto:hunterswe01@gmail.com", label: "Email" },
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
      className="bg-prussian text-ivory pt-24 pb-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container-luxury relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Brand/Signature */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-ivory mb-6 tracking-tight">
              THE HUNTER
            </h3>
            <p className="text-taupe max-w-lg mx-auto leading-relaxed font-light tracking-wide text-lg">
              Engineering digital excellence for the discerning few.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {["about", "skills", "projects", "contact"].map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-xs uppercase tracking-[0.2em] text-ivory/60 hover:text-gold transition-colors duration-500 font-medium"
              >
                {link}
              </button>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-8 mb-20"
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
                className="group relative p-4 rounded-full border border-ivory/10 hover:border-gold/50 transition-all duration-500 bg-white/5 backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <div className="absolute inset-0 bg-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="text-ivory group-hover:text-gold transition-colors duration-500 relative z-10" size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-ivory/5 relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="hidden md:block w-32" /> {/* Spacer for centering */}

            <p className="text-[10px] uppercase tracking-[0.2em] text-taupe/60 mb-6 md:mb-0">
              © {new Date().getFullYear()} Ogwal Jonathan Amos. All Rights Reserved.
            </p>

            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-ivory/5 hover:bg-gold/10 rounded-full border border-ivory/10 hover:border-gold/30 transition-all duration-500 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="text-taupe group-hover:text-gold transition-colors duration-500" size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
