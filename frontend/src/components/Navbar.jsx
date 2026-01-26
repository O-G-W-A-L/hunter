"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-prussian/95 backdrop-blur-xl shadow-natural border-b border-taupe/50"
          : "bg-prussian/85 backdrop-blur-sm"
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container-luxury py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            onClick={() => handleScroll("home")}
            className="relative group text-ivory hover:text-gold transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl font-serif font-medium tracking-wide">
              THE HUNTER
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-gold to-warm-gold"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <NavItem
                key={item.id}
                name={item.name}
                onClick={() => handleScroll(item.id)}
                isActive={activeSection === item.id}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center touch-manipulation group"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-ivory absolute group-hover:bg-gold transition-colors duration-300"
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.span
              className="w-6 h-0.5 bg-ivory absolute group-hover:bg-gold transition-colors duration-300"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.span
              className="w-6 h-0.5 bg-ivory absolute group-hover:bg-gold transition-colors duration-300"
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-8 py-6 border-t border-slate-200/50 overflow-hidden"
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 400 }}
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="block w-full text-left py-3 px-4 text-ivory hover:text-gold hover:bg-prussian/50 rounded-lg transition-all duration-300 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                    whileHover={{ x: 8 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

  const NavItem = ({ name, onClick, isActive, delay }) => (
  <motion.button
    onClick={onClick}
    className={`relative px-6 py-3 rounded-full transition-all duration-400 font-medium ${
      isActive
        ? "text-prussian bg-ivory shadow-natural border-2 border-taupe"
        : "text-taupe hover:text-prussian hover:bg-ivory"
    }`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.02, y: -1 }}
    whileTap={{ scale: 0.98 }}
  >
    {name}
    <motion.div
      className={`absolute bottom-1 left-1/2 h-px ${isActive ? 'bg-gradient-to-r from-gold to-warm-gold' : 'bg-taupe'}`}
      initial={{ width: 0, x: "-50%" }}
      animate={{
        width: isActive ? "60%" : 0,
        x: "-50%",
      }}
      whileHover={{ width: "60%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />
  </motion.button>
)
