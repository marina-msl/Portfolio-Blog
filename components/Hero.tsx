'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <>
            <Image
              src="/hero-banner.jpg"
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
              onError={() => setImageError(true)}
            />
            {/* Overlay para melhorar legibilidade do texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/40 to-transparent" />
          </>
        ) : (
          // Fallback gradient background
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            {/* Network pattern simulation */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute bottom-0 left-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {Array.from({ length: 50 }).map((_, i) => {
                    const x = (i * 30) % 1200
                    const y = 400 + Math.sin(i) * 100
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="url(#networkGradient)"
                      />
                    )
                  })}
                  {Array.from({ length: 30 }).map((_, i) => {
                    const x1 = (i * 40) % 1200
                    const y1 = 400 + Math.sin(i) * 100
                    const x2 = ((i + 1) * 40) % 1200
                    const y2 = 400 + Math.sin(i + 1) * 100
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#networkGradient)"
                        strokeWidth="1"
                        opacity="0.5"
                      />
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen py-20">
          {/* Left side - Main content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Marina
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Developer passionate about creating innovative solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Quote from banner */}
          <motion.div
            className="text-right space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Long-term thinking,
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-primary-400"
              >
                daily execution.
              </motion.div>
            </div>
            <motion.div
              className="text-lg md:text-xl text-gray-300 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Software Engineer | Backend | Java
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

