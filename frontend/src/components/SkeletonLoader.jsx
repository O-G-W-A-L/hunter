import React from 'react'
import { motion } from 'framer-motion'
import { appleEasing, timing } from '../utils/animations'

const SkeletonLoader = ({
  width = '100%',
  height = '1rem',
  borderRadius = '0.5rem',
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-r from-[#7FDBFF]/10 via-[#AEEEEE]/20 to-[#7FDBFF]/10 ${className}`}
      style={{ width, height, borderRadius }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 2,
        ease: appleEasing.smooth,
        repeat: Infinity,
      }}
      {...props}
    />
  )
}

export const SkeletonCard = ({ className = '' }) => (
  <motion.div
    className={`bg-gradient-to-br from-[#001F3F]/50 to-[#00243f]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#7FDBFF]/10 ${className}`}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: timing.normal, ease: appleEasing.smooth }}
  >
    <div className="space-y-4">
      <SkeletonLoader height="2rem" width="80%" />
      <SkeletonLoader height="1rem" width="60%" />
      <div className="flex space-x-2">
        <SkeletonLoader height="0.75rem" width="3rem" />
        <SkeletonLoader height="0.75rem" width="4rem" />
        <SkeletonLoader height="0.75rem" width="2.5rem" />
      </div>
      <SkeletonLoader height="3rem" width="100%" borderRadius="2rem" />
    </div>
  </motion.div>
)

export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonLoader
        key={index}
        height="1rem"
        width={`${100 - (index * 10)}%`}
        className="last:w-3/4"
      />
    ))}
  </div>
)

export const SkeletonImage = ({ className = '', aspectRatio = '16/9' }) => (
  <motion.div
    className={`bg-gradient-to-br from-[#7FDBFF]/5 to-[#AEEEEE]/10 rounded-xl overflow-hidden ${className}`}
    style={{ aspectRatio }}
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{
      duration: 3,
      ease: appleEasing.smooth,
      repeat: Infinity,
    }}
  >
    <div className="w-full h-full bg-gradient-to-r from-transparent via-[#7FDBFF]/5 to-transparent animate-pulse" />
  </motion.div>
)

export default SkeletonLoader
