import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaTelegram } from "react-icons/fa"
import { SiX } from "react-icons/si"

const contacts = [
  { href: "mailto:huntertest02@gmail.com", icon: FaEnvelope, label: "Email", color: "#EA4335" },
  {
    href: "https://www.linkedin.com/in/jonathan-amos-ogwal-725926285/",
    icon: FaLinkedin,
    label: "LinkedIn",
    color: "#0A66C2",
  },
  { href: "https://github.com/O-G-W-A-L", icon: FaGithub, label: "GitHub", color: "#181717" },
  { href: "https://x.com/Ogwal_Jonathan", icon: SiX, label: "X", color: "#000000" },
  { href: "https://wa.me/+256774114216", icon: FaWhatsapp, label: "WhatsApp", color: "#25D366" },
  { href: "https://t.me/+256774114216", icon: FaTelegram, label: "Telegram", color: "#26A5E4" },
]

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#001F3F] via-[#0A4D68] to-[#088F8F] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] mb-4 text-center">
            Let's Connect!
          </h1>
          <p className="text-lg sm:text-xl text-[#AEEEEE] font-medium mb-10 text-center">
            Reach out through your preferred channel. I'm just a click away!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#001F3F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <contact.icon className="text-4xl sm:text-5xl text-white group-hover:text-[#7FDBFF] transition-colors duration-300" />
                  <span className="mt-3 text-sm sm:text-base font-medium text-[#AEEEEE] group-hover:text-white transition-colors duration-300">
                    {contact.label}
                  </span>
                </div>
                <div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-[#7FDBFF] rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 75%, 5% 75%, 5% 25%, 0% 25%)",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

