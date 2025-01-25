import React from 'react';
import { motion } from 'framer-motion';
import { GitlabIcon as GitHub, Linkedin, X, Mail } from 'lucide-react';

const socialLinks = [
  { Icon: GitHub, href: 'https://github.com/O-G-W-A-L' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/jonathan-amos-ogwal-725926285/' },
  { Icon: X, href: 'https://x.com/Ogwal_Jonathan' },
  { Icon: Mail, href: 'huntertest02@gmail.com' },
];

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gradient-to-r from-[#001F3F] to-[#0A4D68] text-[#AEEEEE] py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <motion.p 
          className="text-sm mb-4 md:mb-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          © {new Date().getFullYear()} Ogwal Jonathan Amos. All rights reserved.
        </motion.p>
        <motion.div 
          className="flex space-x-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7FDBFF] hover:text-[#AEEEEE] transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
              <span className="sr-only">{Icon.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}

