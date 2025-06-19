"use client"

import React, { useState } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaTelegram } from "react-icons/fa"
import { SiX } from "react-icons/si"
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react"

const contacts = [
  {
    href: "mailto:huntertest02@gmail.com",
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
    const mailtoLink = `mailto:huntertest02@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#00243f] via-[#002d4f] to-[#00365f] text-[#AEEEEE] py-20"
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
              Let's Connect!
            </h2>
            <p className="text-xl text-[#AEEEEE]/80 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm just a message away. Let's discuss how we can work together to
              create something extraordinary.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-[#00243f]/80 to-[#002d4f]/80 backdrop-blur-xl rounded-3xl p-8 border border-[#7FDBFF]/20"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-[#7FDBFF] mb-4">Send a Message</h3>
                <p className="text-[#AEEEEE]/70">
                  Have a project in mind? Let's discuss the details and make it happen.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#AEEEEE] mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#00243f]/50 border border-[#7FDBFF]/30 rounded-xl text-[#AEEEEE] placeholder-[#AEEEEE]/50 focus:border-[#7FDBFF] focus:outline-none transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#AEEEEE] mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#00243f]/50 border border-[#7FDBFF]/30 rounded-xl text-[#AEEEEE] placeholder-[#AEEEEE]/50 focus:border-[#7FDBFF] focus:outline-none transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#AEEEEE] mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#00243f]/50 border border-[#7FDBFF]/30 rounded-xl text-[#AEEEEE] placeholder-[#AEEEEE]/50 focus:border-[#7FDBFF] focus:outline-none transition-colors duration-300"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#AEEEEE] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#00243f]/50 border border-[#7FDBFF]/30 rounded-xl text-[#AEEEEE] placeholder-[#AEEEEE]/50 focus:border-[#7FDBFF] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] text-[#00243f] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#7FDBFF]/20 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#00243f] mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </div>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-[#00243f]/80 to-[#002d4f]/80 backdrop-blur-xl rounded-3xl p-8 border border-[#7FDBFF]/20">
                <h3 className="text-2xl font-bold text-[#7FDBFF] mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-[#7FDBFF]/10 rounded-full mr-4">
                      <Mail className="text-[#7FDBFF]" size={20} />
                    </div>
                    <div>
                      <p className="text-[#AEEEEE] font-medium">Email</p>
                      <p className="text-[#AEEEEE]/70">huntertest02@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 bg-[#7FDBFF]/10 rounded-full mr-4">
                      <Phone className="text-[#7FDBFF]" size={20} />
                    </div>
                    <div>
                      <p className="text-[#AEEEEE] font-medium">Phone</p>
                      <p className="text-[#AEEEEE]/70">+256 774 114 216</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 bg-[#7FDBFF]/10 rounded-full mr-4">
                      <MapPin className="text-[#7FDBFF]" size={20} />
                    </div>
                    <div>
                      <p className="text-[#AEEEEE] font-medium">Location</p>
                      <p className="text-[#AEEEEE]/70">Uganda, East Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-[#7FDBFF] mb-6">Connect on Social</h3>
                <div className="grid grid-cols-2 gap-4">
                  {contacts.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-gradient-to-br from-[#00243f]/80 to-[#002d4f]/80 backdrop-blur-xl rounded-2xl p-6 border border-[#7FDBFF]/20 hover:border-[#7FDBFF]/50 transition-all duration-300"
                      onHoverStart={() => setHoveredContact(index)}
                      onHoverEnd={() => setHoveredContact(null)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`p-4 rounded-2xl mb-4 bg-gradient-to-r ${contact.color} bg-opacity-20`}>
                          <contact.icon className="text-3xl text-white group-hover:text-[#7FDBFF] transition-colors duration-300" />
                        </div>
                        <h4 className="font-semibold text-[#AEEEEE] group-hover:text-[#7FDBFF] transition-colors duration-300 mb-1">
                          {contact.label}
                        </h4>
                        <p className="text-sm text-[#AEEEEE]/60 group-hover:text-[#AEEEEE]/80 transition-colors duration-300">
                          {contact.description}
                        </p>
                      </div>

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#7FDBFF]/5 to-[#AEEEEE]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                className="bg-gradient-to-r from-[#7FDBFF]/10 to-[#AEEEEE]/10 rounded-2xl p-6 border border-[#7FDBFF]/30"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center mb-4">
                  <MessageCircle className="text-[#7FDBFF] mr-3" size={24} />
                  <h4 className="text-xl font-bold text-[#7FDBFF]">Ready to Start?</h4>
                </div>
                <p className="text-[#AEEEEE]/80 mb-4">
                  Whether you have a clear vision or just an idea, I'm here to help bring it to life. Let's discuss your
                  project and explore the possibilities together.
                </p>
                <div className="flex space-x-3">
                  <span className="px-3 py-1 bg-[#7FDBFF]/20 text-[#7FDBFF] rounded-full text-sm">Quick Response</span>
                  <span className="px-3 py-1 bg-[#AEEEEE]/20 text-[#AEEEEE] rounded-full text-sm">
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
