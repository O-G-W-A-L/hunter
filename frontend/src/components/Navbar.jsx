"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "About", id: "about" },
  { name: "Capabilities", id: "capabilities" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ["home", "about", "capabilities", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Perfect offset handling for modern landing viewports
          return rect.top <= 120 && rect.bottom >= 120
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "py-4 bg-prussian/80 backdrop-blur-md border-b border-ivory/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "py-6 bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Apple Easing
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <button
          onClick={() => handleScroll("home")}
          className="text-lg md:text-xl font-serif font-semibold tracking-[0.15em] text-ivory hover:text-gold transition-colors duration-300 uppercase relative"
        >
          Hunter
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative px-5 py-2 text-xs lg:text-sm uppercase tracking-[0.2em] font-serif font-medium transition-colors duration-300 z-10 ${
                activeSection === item.id ? "text-prussian" : "text-ivory/60 hover:text-ivory"
              }`}
            >
              {item.name}
              
              {/* Premium Shared Layout Capsule Indicator */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-ivory rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none z-50"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu Toggle</span>
          <div className="w-5 flex flex-col gap-1.5 items-end">
            <motion.span 
              className="h-0.5 bg-ivory origin-right" 
              animate={isOpen ? { rotate: -45, width: "20px", y: 1 } : { rotate: 0, width: "20px", y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span 
              className="h-0.5 bg-ivory origin-right" 
              animate={isOpen ? { opacity: 0, width: "0px" } : { opacity: 1, width: "14px" }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="h-0.5 bg-ivory origin-right" 
              animate={isOpen ? { rotate: 45, width: "20px", y: -1 } : { rotate: 0, width: "20px", y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-0 pt-24 pb-8 bg-prussian/98 backdrop-blur-2xl border-b border-ivory/[0.04] z-40 shadow-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col space-y-2 px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`block w-full text-left py-4 text-sm uppercase tracking-[0.25em] font-serif font-medium transition-all ${
                    activeSection === item.id ? "text-gold pl-2" : "text-ivory/70 hover:text-ivory pl-0"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}