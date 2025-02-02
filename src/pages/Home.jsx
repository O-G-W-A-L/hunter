import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8 },
});

export default function Home() {
  const [key, setKey] = useState(0);

  // Re-trigger the typing effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-4 sm:p-8 flex flex-col justify-between relative overflow-hidden">
      <BackgroundAnimation />

      <header className="z-10 mt-8 sm:mt-16">
        <motion.h1
          className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34D399] to-[#4FD1C5] leading-snug tracking-wide"
          {...fadeIn()}
        >
          Hey there, <br />
          <span className="block text-[#FFFFFF] mt-4 font-light">
            Welcome! Glad to have you here, smile, take you time, and let’s start building something amazing together.
          </span>
        </motion.h1>
      </header>

      <main className="flex-grow flex items-center justify-center z-10 my-8 sm:my-0 relative">
        <motion.div
          className="text-center relative p-8 rounded-3xl backdrop-blur-sm bg-white bg-opacity-5 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#AEEEEE] to-[#7FDBFF] mb-4 drop-shadow-md"
            {...fadeIn(0.3)}
          >
            My Name is
          </motion.h2>

          <motion.div
            key={key} // Re-trigger animation every 5 seconds
            className="block text-white text-4xl sm:text-5xl md:text-6xl mb-2 font-typewriter drop-shadow-lg"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            {Array.from("OGWAL JONATHAN AMOS").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.0 + index * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-[#D1D5DB] mt-2 font-medium drop-shadow-md"
            {...fadeIn(1.5)}
          >
            - THE HUNTER -
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const particles = [];
    const particleCount = 30;
    const colors = ["#AEEEEE", "#7FDBFF", "#34D399", "#4FD1C5"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
        .toString(16)
        .padStart(2, "0")}`;
      ctx.fill();
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(174, 238, 238, ${0.15 - distance / 1000})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        drawParticle(particle);
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};
