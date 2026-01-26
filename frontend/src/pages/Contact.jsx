"use client"

import React, { useState } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaTelegram } from "react-icons/fa"
import { SiX } from "react-icons/si"
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import {
  appleEasing,
  timing,
  prefersReducedMotion
} from "../utils/animations"

const contacts = [
  {
    href: "mailto:hunterswe01@gmail.com",
    icon: FaEnvelope,
    label: "Email",
    description: "Drop me a line",
    color: "from-red-500 to-pink-500",
  },
  {
    href: "https://www.linkedin.com/in/jonathan-amos-ogwal-725926285/",
    icon: FaLinkedin,
    label: "LinkedIn",
    description: "Let's connect professionally",
    color: "from-blue-500 to-blue-600",
  },
  {
    href: "https://github.com/O-G-W-A-L",
    icon: FaGithub,
    label: "GitHub",
    description: "Check out my code",
    color: "from-gray-700 to-gray-900",
  },
  {
    href: "https://x.com/Ogwal_Jonathan",
    icon: SiX,
    label: "X (Twitter)",
    description: "Follow my journey",
    color: "from-gray-800 to-black",
  },
  {
    href: "https://wa.me/+256774114216",
    icon: FaWhatsapp,
    label: "WhatsApp",
    description: "Quick chat",
    color: "from-green-500 to-green-600",
  },
  {
    href: "https://t.me/+256774114216",
    icon: FaTelegram,
    label: "Telegram",
    description: "Secure messaging",
    color: "from-blue-400 to-blue-500",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hoveredContact, setHoveredContact] = useState(null)

  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create mailto link
    const mailtoLink = `mailto:hunterswe01@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div
      id="contact"
      className="min-h-screen bg-prussian text-ivory section-luxury relative overflow-x-hidden grain"
    >
      {/* Old Money Editorial Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 20% 80%, rgba(139, 125, 107, 0.1) 1px, transparent 1px)`,
          backgroundSize: '90px 90px, 70px 70px'
        }} />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 text-ivory tracking-tight">
              Let's Connect
            </h2>
            <p className="text-xl md:text-2xl text-light-grey max-w-4xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm just a message away. Let's discuss how we can work together to
              create something extraordinary.
            </p>
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-gold to-warm-gold mx-auto mt-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: timing.normal, delay: timing.normal, ease: appleEasing.smooth }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            {/* Contact Form */}
            <motion.div
              className="bg-navy-soft/30 backdrop-blur-sm border border-ivory/5 rounded-3xl p-10 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.2)]"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl font-serif font-medium text-ivory mb-4 tracking-tight">Send a Message</h3>
                <p className="text-light-grey/80 leading-relaxed font-light tracking-wide">
                  Have a project in mind? Let's discuss the details and make it happen.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs uppercase tracking-[0.15em] font-medium text-taupe mb-3 ml-1 group-focus-within:text-gold transition-colors duration-300">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-4 bg-transparent border-b border-taupe/30 text-ivory placeholder-taupe/30 focus:border-gold focus:outline-none transition-all duration-300 font-serif text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs uppercase tracking-[0.15em] font-medium text-taupe mb-3 ml-1 group-focus-within:text-gold transition-colors duration-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-4 bg-transparent border-b border-taupe/30 text-ivory placeholder-taupe/30 focus:border-gold focus:outline-none transition-all duration-300 font-serif text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-taupe mb-3 ml-1 group-focus-within:text-gold transition-colors duration-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-taupe/30 text-ivory placeholder-taupe/30 focus:border-gold focus:outline-none transition-all duration-300 font-serif text-lg"
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] font-medium text-taupe mb-3 ml-1 group-focus-within:text-gold transition-colors duration-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-b border-taupe/30 text-ivory placeholder-taupe/30 focus:border-gold focus:outline-none transition-all duration-300 resize-none font-serif text-lg"
                    placeholder="Tell me about your vision..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative bg-ivory text-prussian border border-ivory px-8 py-5 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,243,239,0.3)]"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <span className="relative z-10 font-serif tracking-[0.15em] uppercase text-sm font-semibold flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-prussian"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Contact Info */}
              <div className="bg-navy-soft/30 backdrop-blur-sm border border-ivory/5 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.2)]">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-ivory mb-8 tracking-tight">Direct Lines</h3>
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="p-3 bg-taupe/10 rounded-full mr-6 group-hover:bg-gold/20 transition-colors duration-300">
                      <Mail className="text-taupe group-hover:text-gold transition-colors duration-300" size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-taupe mb-1">Email</p>
                      <p className="text-ivory font-serif text-lg">hunterswe01@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="p-3 bg-taupe/10 rounded-full mr-6 group-hover:bg-gold/20 transition-colors duration-300">
                      <Phone className="text-taupe group-hover:text-gold transition-colors duration-300" size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-taupe mb-1">Phone</p>
                      <p className="text-ivory font-serif text-lg">+256 774 114 216</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="p-3 bg-taupe/10 rounded-full mr-6 group-hover:bg-gold/20 transition-colors duration-300">
                      <MapPin className="text-taupe group-hover:text-gold transition-colors duration-300" size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-taupe mb-1">Location</p>
                      <p className="text-ivory font-serif text-lg">Uganda, East Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-ivory mb-8 tracking-tight">Connect</h3>
                <div className="grid grid-cols-2 gap-4">
                  {contacts.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-navy-soft/30 backdrop-blur-sm border border-ivory/5 rounded-2xl p-6 hover:border-gold/30 transition-all duration-400"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-taupe group-hover:text-gold transition-colors duration-300">
                          <contact.icon className="text-xl" />
                        </div>
                        <div>
                          <h4 className="font-serif text-ivory text-lg">
                            {contact.label}
                          </h4>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                className="bg-navy-soft rounded-3xl p-8 shadow-natural hover:shadow-natural-lg transition-all duration-400"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center mb-6">
                  <MessageCircle className="text-taupe mr-4" size={24} />
                  <h4 className="text-xl md:text-2xl font-serif font-medium text-ivory">Ready to Start?</h4>
                </div>
                <p className="text-light-grey mb-6 leading-relaxed">
                  Whether you have a clear vision or just an idea, I'm here to help bring it to life. Let's discuss your
                  project and explore the possibilities together.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gold text-prussian rounded-full text-sm font-medium">Quick Response</span>
                  <span className="px-4 py-2 bg-taupe/20 text-taupe rounded-full text-sm font-medium">
                    Free Consultation
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
