import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8 }
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#0A4D68] to-[#088F8F] text-[#AEEEEE] p-4 sm:p-8 flex flex-col justify-between relative overflow-hidden">
      <BackgroundAnimation />
      
      <header className="z-10 mt-8 sm:mt-16">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7FDBFF] to-[#AEEEEE] leading-tight"
          {...fadeIn()}
        >
          Hey, since you made it here, Welcome!
        </motion.h1>
      </header>

      <main className="flex-grow flex items-center justify-center z-10 my-8 sm:my-0">
        <motion.div 
          className="text-center"
          {...fadeIn(0.3)}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 sm:mb-4">I'm Ogwal Jonathan Amos</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#7FDBFF]">The Hunter of Digital Wonders</p>
        </motion.div>
      </main>

      <footer className="flex justify-center z-10 mb-8 sm:mb-16">
        <motion.button
          className="bg-[#7FDBFF] text-[#001F3F] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg transition-colors duration-300 ease-in-out hover:bg-[#AEEEEE]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Dive Into My Work
        </motion.button>
      </footer>
    </div>
  );
}

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
    }));

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(174, 238, 238, 0.5)';
      ctx.fill();
    };

    const updateParticle = (particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        drawParticle(particle);
        updateParticle(particle);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

