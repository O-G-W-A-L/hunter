import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { SiX } from "react-icons/si";

const contacts = [
  { href: "mailto:huntertest02@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "https://www.linkedin.com/in/jonathan-amos-ogwal-725926285/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/O-G-W-A-L", icon: FaGithub, label: "GitHub" },
  { href: "https://x.com/Ogwal_Jonathan", icon: SiX, label: "X" },
  { href: "https://wa.me/+256774114216", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://t.me/+256774114216", icon: FaTelegram, label: "Telegram" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#00243f] text-[#AEEEEE] p-4 sm:p-8 flex items-center justify-center">
      <motion.div
        className="w-full max-w-4xl bg-[#00243f]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 sm:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Connect!
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Reach out through your preferred channel. I'm just a click away!
        </motion.p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delay: 0.4 }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#00243f]/90 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <contact.icon className="text-5xl text-white group-hover:text-[#7FDBFF] transition-colors duration-300" />
              <span className="mt-4 text-lg font-medium text-white group-hover:text-[#7FDBFF] transition-colors duration-300">
                {contact.label}
              </span>
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#7FDBFF] transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;