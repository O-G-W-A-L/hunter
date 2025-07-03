"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 1, ease: "easeOut" },
})

export default function Home() {
  const [key, setKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div id="home" className="min-h-screen bg-[#000f3f] text-[#AEEEEE] relative overflow-hidden flex flex-col">
      <BackgroundAnimation />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 pt-20">
        {/* Hero Section */}
        <motion.div
          className="text-center z-10 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Greeting */}
          <motion.div className="mb-8" {...fadeIn(0.2)}>
            <motion.span
              className="inline-block text-lg sm:text-xl text-[#7FDBFF] font-medium mb-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Hello, World! 👋
            </motion.span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I'm a{" "}
              <motion.span
                className="bg-gradient-to-r from-[#7FDBFF] via-[#AEEEEE] to-[#7FDBFF] bg-clip-text text-transparent bg-300% animate-gradient"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                SOFTWARE ENGINEER
              </motion.span>
            </h1>
          </motion.div>

          {/* Name Animation */}
          <motion.div className="mb-8" {...fadeIn(0.6)}>
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 text-[#AEEEEE]/80">
              My name is
            </motion.h2>
            <motion.div key={key} className="relative">
              <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white drop-shadow-2xl whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {Array.from("OGWAL JONATHAN AMOS").map((char, index) => (
                  <motion.span
                    key={`${key}-${index}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "#7FDBFF",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#7FDBFF] font-bold mt-4 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                - THE HUNTER -
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#AEEEEE]/90 max-w-3xl mx-auto leading-relaxed"
            {...fadeIn(1.2)}
          >
            Crafting digital experiences that solve real-world problems.
            <br />
            <span className="text-[#7FDBFF]">Let's build something extraordinary together.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mt-12" {...fadeIn(1.6)}>
            <motion.button
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] text-[#001f3f] font-bold rounded-full text-lg shadow-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(127, 219, 255, 0.3)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-[#7FDBFF] text-[#7FDBFF] font-bold rounded-full text-lg hover:bg-[#7FDBFF] hover:text-[#001f3f] transition-all duration-300"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    </div>
  )
}

const BackgroundAnimation = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const particles = []
    const particleCount = 40
    const colors = ["#AEEEEE", "#7FDBFF", "#34D399", "#4FD1C5"]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.4 - 0.2,
        speedY: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.6 + 0.4,
        pulse: Math.random() * 0.02 + 0.01,
      })
    }

    const drawParticle = (particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.fill()

      // Add glow effect
      ctx.shadowBlur = 10
      ctx.shadowColor = particle.color
      ctx.fill()
      ctx.shadowBlur = 0
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(127, 219, 255, ${0.2 - distance / 600})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        drawParticle(particle)

        particle.x += particle.speedX
        particle.y += particle.speedY

        // Pulse effect
        particle.opacity += particle.pulse
        if (particle.opacity >= 1 || particle.opacity <= 0.2) {
          particle.pulse *= -1
        }

        // Boundary collision
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}
